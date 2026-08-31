import { NextRequest, NextResponse } from 'next/server';
import { GoogleSheetsService } from '../../../utils/googleSheets';
import { sendWelcomeEmail, addToNewsletterAudience } from '../../../utils/email';
import { checkRateLimit } from '../../../utils/rateLimit';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Los dos puntos de entrada reales del sitio; cualquier otro valor (o ausente)
// cae en 'footer' — antes el "Source" del Sheet quedaba siempre en 'footer'
// sin importar de dónde viniera la suscripción, porque nada mandaba este campo.
const VALID_SOURCES = ['footer', 'popup'] as const;

function getClientIp(request: NextRequest): string {
  // Vercel siempre setea x-forwarded-for; el resto son fallbacks para otros
  // entornos (proxies, dev local). Si no hay nada, se agrupan todos los
  // requests bajo 'unknown' — el rate limit por email igual sigue aplicando.
  const forwardedFor = request.headers.get('x-forwarded-for');
  if (forwardedFor) return forwardedFor.split(',')[0].trim();
  return request.headers.get('x-real-ip') || (request as any).ip || 'unknown';
}

export async function POST(request: NextRequest) {
  try {
    const { email, locale, source, company } = await request.json();

    // Honeypot: campo oculto que un humano nunca completa. Si llega con
    // contenido, es casi seguro un bot rellenando el formulario a ciegas —
    // se responde éxito sin hacer nada real, para no delatar el filtro.
    if (typeof company === 'string' && company.trim() !== '') {
      return NextResponse.json({ message: 'subscribed' });
    }

    if (!email || typeof email !== 'string' || !EMAIL_RE.test(email.trim())) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }

    const normalizedEmail = email.trim().toLowerCase();
    const normalizedSource = VALID_SOURCES.includes(source) ? source : 'footer';

    const ip = getClientIp(request);
    const withinIpLimit = checkRateLimit(`ip:${ip}`, { limit: 5, windowMs: 10 * 60 * 1000 });
    const withinEmailLimit = checkRateLimit(`email:${normalizedEmail}`, { limit: 1, windowMs: 2 * 60 * 1000 });
    if (!withinIpLimit || !withinEmailLimit) {
      return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
    }

    const service = new GoogleSheetsService();
    const subscriberStatus = await service.addNewsletterSubscriber(normalizedEmail, normalizedSource);

    if (subscriberStatus === 'error') {
      return NextResponse.json({ error: 'Could not save subscription' }, { status: 500 });
    }

    // Se esperan (no se lanzan sin await) porque en el runtime serverless de Vercel
    // una promesa disparada sin await puede quedar congelada/matada apenas se manda
    // la respuesta, antes de completarse — el mail de bienvenida y el alta en la
    // Audience simplemente no pasarían, sin ningún error visible. Igual no bloquean
    // ni fallan la suscripción si algo de esto falla (ej. dominio sin verificar
    // todavía, o falta la key full-access): el Sheet ya quedó guardado arriba, que
    // es la fuente de verdad de "está suscripto".
    //
    // El mail de bienvenida solo se manda para altas nuevas — si el email ya
    // estaba en la hoja, reenviarlo cada vez que alguien reenvía el formulario
    // (doble click, incógnito, localStorage limpio) sería spam. El alta en la
    // Audience de Resend sí se repite siempre: es un upsert, no un envío.
    const tasks: Promise<boolean>[] = [addToNewsletterAudience(normalizedEmail)];
    if (subscriberStatus === 'new') {
      tasks.push(sendWelcomeEmail(normalizedEmail, typeof locale === 'string' ? locale : 'es'));
    }
    const [audienceResult, welcomeResult] = await Promise.allSettled(tasks);
    if (audienceResult.status === 'rejected' || audienceResult.value === false) {
      console.error('Newsletter API: audience add failed for', normalizedEmail);
    }
    if (welcomeResult && (welcomeResult.status === 'rejected' || welcomeResult.value === false)) {
      console.error('Newsletter API: welcome email failed for', normalizedEmail);
    }

    return NextResponse.json({ message: 'subscribed' });
  } catch (error) {
    console.error('Newsletter API error:', error);
    return NextResponse.json({ error: 'Bad request' }, { status: 400 });
  }
}
