import { NextRequest, NextResponse } from 'next/server';
import { GoogleSheetsService } from '../../../utils/googleSheets';
import { sendWelcomeEmail, addToNewsletterAudience } from '../../../utils/email';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  try {
    const { email, locale } = await request.json();

    if (!email || typeof email !== 'string' || !EMAIL_RE.test(email.trim())) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }

    const normalizedEmail = email.trim().toLowerCase();

    const service = new GoogleSheetsService();
    const subscriberStatus = await service.addNewsletterSubscriber(normalizedEmail);

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
