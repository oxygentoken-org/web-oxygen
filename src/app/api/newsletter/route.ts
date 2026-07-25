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
    const ok = await service.addNewsletterSubscriber(normalizedEmail);

    if (!ok) {
      return NextResponse.json({ error: 'Could not save subscription' }, { status: 500 });
    }

    // No bloquean la respuesta ni fallan la suscripción si algo de esto falla
    // (ej. dominio sin verificar todavía, o falta la key full-access).
    sendWelcomeEmail(normalizedEmail, typeof locale === 'string' ? locale : 'es').catch(() => {});
    addToNewsletterAudience(normalizedEmail).catch(() => {});

    return NextResponse.json({ message: 'subscribed' });
  } catch (error) {
    console.error('Newsletter API error:', error);
    return NextResponse.json({ error: 'Bad request' }, { status: 400 });
  }
}
