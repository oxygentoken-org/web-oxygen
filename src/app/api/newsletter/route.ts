import { NextRequest, NextResponse } from 'next/server';
import { GoogleSheetsService } from '../../../utils/googleSheets';
import { sendWelcomeEmail } from '../../../utils/email';

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

    // No bloquea la respuesta ni falla la suscripción si el mail no sale (ej. dominio sin verificar todavía).
    sendWelcomeEmail(normalizedEmail, typeof locale === 'string' ? locale : 'es').catch(() => {});

    return NextResponse.json({ message: 'subscribed' });
  } catch (error) {
    console.error('Newsletter API error:', error);
    return NextResponse.json({ error: 'Bad request' }, { status: 400 });
  }
}
