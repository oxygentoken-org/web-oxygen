import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Antes de verificar el dominio en Resend solo se puede enviar desde este remitente de prueba.
// Una vez verificado oxygentoken.org, setear RESEND_FROM_EMAIL (ej: "Oxygen <newsletter@oxygentoken.org>").
const FROM = process.env.RESEND_FROM_EMAIL || "Oxygen <onboarding@resend.dev>";

interface EmailCopy {
  subject: string;
  heading: string;
  body: string;
  footer: string;
}

const COPY: { es: EmailCopy; en: EmailCopy } = {
  es: {
    subject: "Bienvenido/a al newsletter de Oxygen 🌳",
    heading: "¡Gracias por sumarte!",
    body: "A partir de ahora vas a recibir novedades sobre La Esperanza: avances en el territorio, hitos con la comunidad Wichí, y el progreso de nuestros proyectos de conservación y reforestación en el Gran Chaco.",
    footer: "Oxygen — Formosa, Argentina",
  },
  en: {
    subject: "Welcome to the Oxygen newsletter 🌳",
    heading: "Thanks for joining!",
    body: "From now on you'll get updates on La Esperanza: on-the-ground progress, milestones with the Wichí community, and updates on our conservation and reforestation projects in the Gran Chaco.",
    footer: "Oxygen — Formosa, Argentina",
  },
};

function renderHtml(copy: EmailCopy) {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 480px; margin: 0 auto; padding: 32px 24px; color: #0f1419;">
      <h1 style="color: #00bb22; font-size: 22px; margin-bottom: 12px;">${copy.heading}</h1>
      <p style="font-size: 15px; line-height: 1.5;">${copy.body}</p>
      <p style="margin-top: 32px; font-size: 12px; color: #6b7280;">${copy.footer}</p>
    </div>
  `;
}

export async function sendWelcomeEmail(email: string, locale: string = "es") {
  const copy = locale === "en" ? COPY.en : COPY.es;

  try {
    await resend.emails.send({
      from: FROM,
      to: email,
      subject: copy.subject,
      html: renderHtml(copy),
    });
    return true;
  } catch (error) {
    console.error("Error sending welcome email via Resend:", error);
    return false;
  }
}
