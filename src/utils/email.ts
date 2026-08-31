import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Antes de verificar el dominio en Resend solo se puede enviar desde este remitente de prueba.
// Una vez verificado oxygentoken.org, setear RESEND_FROM_EMAIL (ej: "Oxygen <newsletter@oxygentoken.org>").
const FROM = process.env.RESEND_FROM_EMAIL || "Oxygen <onboarding@resend.dev>";

// Cliente separado con permiso "Full access" — Resend exige ese permiso para manejar
// Audiences/Contacts (la key de solo-envío de arriba no alcanza). Se usa únicamente acá,
// server-side, nunca en código expuesto al cliente.
const resendAudiences = process.env.RESEND_FULL_ACCESS_KEY
  ? new Resend(process.env.RESEND_FULL_ACCESS_KEY)
  : null;

export async function addToNewsletterAudience(email: string) {
  const audienceId = process.env.RESEND_NEWSLETTER_AUDIENCE_ID;

  if (!resendAudiences || !audienceId) {
    console.warn("RESEND_FULL_ACCESS_KEY o RESEND_NEWSLETTER_AUDIENCE_ID no configurados, se omite el alta en la Audience.");
    return false;
  }

  try {
    const { error } = await resendAudiences.contacts.create({ email, audienceId });
    if (error) {
      console.error("Error agregando contacto a la Audience:", error);
      return false;
    }
    return true;
  } catch (error) {
    console.error("Error agregando contacto a la Audience:", error);
    return false;
  }
}

// Boletín #1 — se manda como primer contenido al suscribirse (no un mail genérico de
// "gracias por sumarte"). Solo en español por ahora: el contenido fue redactado y
// aprobado en español; falta traducir al inglés si se quiere paridad bilingüe.
function boletin1Html() {
  return `
  <html>
  <head>
  <style>
    .section-title { font-family:Georgia,serif; font-weight:700; font-size:12px; letter-spacing:0.16em; text-transform:uppercase; color:#a97a1f; margin:0 0 14px; text-align:center; }
    .team-grid td { padding:10px; text-align:center; vertical-align:top; }
    .team-photo { width:64px; height:64px; border-radius:50%; object-fit:cover; border:2px solid #c9a227; display:block; margin:0 auto 8px; }
    .team-name { font-family:-apple-system,sans-serif; font-size:12px; font-weight:700; color:#241c0f; }
    .team-role { font-family:-apple-system,sans-serif; font-size:10.5px; color:#8a7f63; }
    /* Clientes de mail sin soporte para @keyframes (Outlook desktop, muchos webmail) simplemente
       ignoran esto y se quedan con el gradient estático de más abajo — por eso el degradé base
       va siempre inline, esto es una mejora progresiva, no la única fuente de color. Un segundo
       "layer" de sombra se desliza de derecha a izquierda por encima del degradé fijo. */
    @keyframes boletinHeaderShift {
      0%   { background-position: 130% 0, 0 0; }
      50%  { background-position: -30% 0, 0 0; }
      100% { background-position: 130% 0, 0 0; }
    }
    .boletinHeaderAnim {
      background-image:
        linear-gradient(100deg, transparent 35%, rgba(0,0,0,0.22) 50%, transparent 65%),
        linear-gradient(135deg,#1d3a1c 0%,#16220f 30%,#3a2f13 65%,#5c3a17 100%) !important;
      background-size: 260% 100%, 100% 100% !important;
      background-position: 130% 0, 0 0;
      animation: boletinHeaderShift 9s ease-in-out infinite;
    }
  </style>
  </head>
  <body style="margin:0;padding:0;background:#ece2c4;font-family:Georgia,'Times New Roman',serif;">
    <div style="max-width:600px;margin:28px auto;background:#fbf4de;border-radius:36px;overflow:hidden;box-shadow:0 20px 44px rgba(35,26,10,0.16);">

      <!-- header -->
      <div class="boletinHeaderAnim" style="position:relative;background:linear-gradient(135deg,#1d3a1c 0%,#16220f 30%,#3a2f13 65%,#5c3a17 100%);padding:0;overflow:hidden;">
        <div style="position:absolute;inset:0;background-image:radial-gradient(circle at 12% 25%, rgba(201,162,39,0.20) 0, transparent 32%),radial-gradient(circle at 88% 15%, rgba(181,80,44,0.18) 0, transparent 30%);"></div>
        <table role="presentation" width="100%" style="position:relative;">
          <tr><td style="padding:44px 30px 32px;text-align:center;">
            <div style="font-family:Georgia,serif;font-size:10.5px;letter-spacing:0.22em;color:#c9a227;font-weight:700;margin-bottom:12px;">BOLETÍN · EDICIÓN 1</div>
            <div style="font-family:Georgia,serif;font-weight:700;font-size:32px;letter-spacing:0.05em;color:#f3e6b8;line-height:1;margin-bottom:4px;text-shadow:0 2px 0 rgba(0,0,0,0.3);">OXYGEN</div>
            <div style="font-family:Georgia,serif;font-size:12px;letter-spacing:0.1em;color:#8fae7d;font-weight:600;">TOKEN</div>
            <div style="font-family:-apple-system,sans-serif;font-size:10.5px;letter-spacing:0.14em;color:#c9b98a;margin-top:16px;">GRAN CHACO · FORMOSA · ARGENTINA</div>
          </td></tr>
        </table>
        <svg width="100%" height="34" viewBox="0 0 600 34" style="display:block;margin-top:-1px;" preserveAspectRatio="none">
          <path d="M0,34 L0,20 C50,2 100,26 150,16 C210,4 260,30 320,18 C380,6 430,28 480,16 C530,6 570,20 600,12 L600,34 Z" fill="#fbf4de"/>
        </svg>
      </div>

      <!-- intro -->
      <div style="padding:20px 34px 8px;text-align:center;">
        <h1 style="margin:0 0 14px;font-family:Georgia,serif;font-weight:700;font-size:20px;letter-spacing:0.02em;line-height:1.4;color:#241c0f;">Los árboles valen más en pie que como madera</h1>
        <p style="margin:0 auto;max-width:460px;font-family:-apple-system,sans-serif;font-size:14.5px;line-height:1.7;color:#5c5138;text-align:left;">
          Oxygen nació de una alianza con Estancias La Florencia SA, dueños de un campo de 30.000 hectáreas de bosque chaqueño nativo en Formosa. En vez de dejar que el desmonte siga avanzando, convertimos la conservación y reforestación de ese bosque en un activo real, verificable y con impacto directo en el territorio y en la comunidad Wichí que vive dentro del predio.
        </p>
        <p style="margin:14px auto 0;max-width:460px;font-family:-apple-system,sans-serif;font-size:14.5px;line-height:1.7;color:#5c5138;text-align:left;">
          Nuestra misión: preservar ecosistemas y especies en peligro de extinción, impulsar el desarrollo económico de las comunidades locales, y lograr que el mundo empiece a valorar los bosques nativos como lo que son.
        </p>
        <p style="margin:14px auto 0;max-width:460px;font-family:-apple-system,sans-serif;font-size:14.5px;line-height:1.7;color:#5c5138;text-align:left;">
          Nos vemos como un <strong>articulador territorial</strong>: nuestro rol es conectar la conservación del bosque a largo plazo con proyectos que monetizan al bosque vivo — bonos de carbono y biodiversidad, y producciones forestales no madereras como la miel de monte o el aprovechamiento sustentable de la chaucha de algarroba, entre otras.
        </p>
      </div>

      <div style="padding:24px 34px 4px;">
        <p class="section-title">En qué estamos trabajando</p>
      </div>

      <div style="padding:0 34px 8px;">
        <table role="presentation" width="100%" style="margin-bottom:18px;">
          <tr>
            <td style="background:#f3ead0;border-radius:16px;padding:18px 20px;">
              <div style="font-family:-apple-system,sans-serif;font-size:10px;letter-spacing:0.1em;color:#a97a1f;font-weight:700;margin-bottom:6px;">PISTA 1 · CONSERVACIÓN</div>
              <div style="font-family:Georgia,serif;font-size:16px;font-weight:700;color:#241c0f;margin-bottom:6px;">Certificación del stock de carbono con Verra</div>
              <div style="font-family:-apple-system,sans-serif;font-size:13.5px;line-height:1.6;color:#5c5138;">Certificamos el stock de carbono bajo la metodología REDD+ (VM0048) de Verra, con estándar CCB Gold, sobre un polígono de aproximadamente 20.000 hectáreas. El compromiso es de conservación del bosque a largo plazo.</div>
            </td>
          </tr>
        </table>
        <table role="presentation" width="100%" style="margin-bottom:18px;">
          <tr>
            <td style="background:#f3ead0;border-radius:16px;padding:18px 20px;">
              <div style="font-family:-apple-system,sans-serif;font-size:10px;letter-spacing:0.1em;color:#a97a1f;font-weight:700;margin-bottom:6px;">PISTA 2 · REFORESTACIÓN</div>
              <div style="font-family:Georgia,serif;font-size:16px;font-weight:700;color:#241c0f;margin-bottom:6px;">Reforestación con Open Forest Protocol</div>
              <div style="font-family:-apple-system,sans-serif;font-size:13.5px;line-height:1.6;color:#5c5138;">Estamos aplicando para certificar un proyecto de reforestación con el estándar Open Forest Protocol, sobre aproximadamente 700 hectáreas divididas en 92 polígonos que sufrieron procesos de deforestación con anterioridad a la adquisición del campo por parte de Estancias La Florencia SA. Buscamos recuperar la cobertura vegetal, fijar carbono y recuperar suelos degradados — además de emplear a pobladores locales en las tareas de producción: vivero, plantación y monitoreo.</div>
            </td>
          </tr>
        </table>
        <table role="presentation" width="100%" style="margin-bottom:18px;">
          <tr>
            <td style="background:#f3ead0;border-radius:16px;padding:18px 20px;">
              <div style="font-family:-apple-system,sans-serif;font-size:10px;letter-spacing:0.1em;color:#a97a1f;font-weight:700;margin-bottom:6px;">PISTA 3 · BOSQUE VIVO</div>
              <div style="font-family:Georgia,serif;font-size:16px;font-weight:700;color:#241c0f;margin-bottom:6px;">Producciones forestales no madereras</div>
              <div style="font-family:-apple-system,sans-serif;font-size:13.5px;line-height:1.6;color:#5c5138;">Impulsamos economías que ponen en valor al bosque sin talarlo: miel de monte y el aprovechamiento sustentable de la chaucha de algarroba, entre otras producciones en desarrollo.</div>
            </td>
          </tr>
        </table>
        <table role="presentation" width="100%" style="margin-bottom:6px;">
          <tr>
            <td style="background:#f3ead0;border-radius:16px;padding:18px 20px;">
              <div style="font-family:-apple-system,sans-serif;font-size:10px;letter-spacing:0.1em;color:#a97a1f;font-weight:700;margin-bottom:6px;">EN EL TERRITORIO</div>
              <div style="font-family:Georgia,serif;font-size:16px;font-weight:700;color:#241c0f;margin-bottom:6px;">Junto a la comunidad Wichí</div>
              <div style="font-family:-apple-system,sans-serif;font-size:13.5px;line-height:1.6;color:#5c5138;">Dentro del campo vive hace generaciones la comunidad Wichí Cruce El Mistolar. Acompañamos su propio pedido —expresado en una asamblea comunitaria— de que la tierra donde están asentados quede titulada a su nombre, buscando fomentar la continuidad cultural, el arraigo territorial, y la identidad y los saberes del monte que la comunidad sostiene hace generaciones. Como parte de este camino, ya colaboramos con obras concretas como la construcción de 2 cisternas de agua.</div>
            </td>
          </tr>
        </table>
      </div>

      <div style="padding:24px 34px 4px;">
        <p class="section-title">El equipo detrás</p>
      </div>

      <div style="padding:0 34px 10px;">
        <table role="presentation" width="100%" class="team-grid">
          <tr>
            <td style="width:33%;">
              <img class="team-photo" src="https://www.oxygentoken.org/assets/images/team/team_sin_bg/Dante_sbg.png" alt="Dante Arola" />
              <div class="team-name">Dante Arola</div>
              <div class="team-role">Cofundador</div>
            </td>
            <td style="width:33%;">
              <img class="team-photo" src="https://www.oxygentoken.org/assets/images/team/team_sin_bg/Mateo_sbg.png" alt="Matteo Palladino" />
              <div class="team-name">Matteo Palladino</div>
              <div class="team-role">Cofundador</div>
            </td>
            <td style="width:33%;">
              <img class="team-photo" src="https://www.oxygentoken.org/assets/images/team/team_sin_bg/Felipe_sbg.png" alt="Felipe Issa" />
              <div class="team-name">Felipe Issa</div>
              <div class="team-role">Cofundador</div>
            </td>
          </tr>
          <tr>
            <td>
              <img class="team-photo" src="https://www.oxygentoken.org/assets/images/team/team_sin_bg/Ramon_sbg.png" alt="Ramón Peña Agrest" />
              <div class="team-name">Ramón Peña Agrest</div>
              <div class="team-role">Especialista ambiental</div>
            </td>
            <td>
              <img class="team-photo" src="https://www.oxygentoken.org/assets/images/team/team_sin_bg/Tomas_sbg.png" alt="Tomás Vujanic" />
              <div class="team-name">Tomás Vujanic</div>
              <div class="team-role">Consultor ambiental</div>
            </td>
            <td>
              <img class="team-photo" src="https://www.oxygentoken.org/assets/images/rosaMoreno.png" alt="Ernestina Moreno" />
              <div class="team-name">Ernestina Moreno</div>
              <div class="team-role">Líder Wichí, Mistolar</div>
            </td>
          </tr>
        </table>
      </div>

      <!-- CTA -->
      <div style="padding:10px 34px 8px;text-align:center;">
        <table role="presentation" width="100%" style="margin:14px 0 20px;">
          <tr>
            <td align="center">
              <a href="https://www.oxygentoken.org/es/nosotros" style="display:inline-block;background:linear-gradient(120deg,#e0b24a 0%,#c9932f 35%,#a9691f 70%,#b5502c 100%);color:#211a10;text-decoration:none;font-family:-apple-system,sans-serif;font-weight:800;letter-spacing:0.06em;font-size:13px;padding:15px 34px;border-radius:999px;">
                CONOCER TODO EL EQUIPO
              </a>
            </td>
          </tr>
        </table>
        <p style="font-family:-apple-system,sans-serif;font-size:13px;color:#8a7f63;margin:0 0 20px;">
          ¿Preguntas o sugerencias? Escribinos a <a href="mailto:forests@oxygentoken.org" style="color:#a97a1f;font-weight:700;">forests@oxygentoken.org</a>
        </p>
      </div>

      <svg width="100%" height="30" viewBox="0 0 600 30" style="display:block;margin-bottom:-1px;" preserveAspectRatio="none">
        <path d="M0,0 C60,20 110,4 170,14 C230,24 270,4 330,12 C390,20 440,2 500,10 C550,17 580,6 600,0 L600,30 L0,30 Z" fill="#16220f"/>
      </svg>

      <div style="background:linear-gradient(135deg,#1d3a1c 0%,#16220f 45%,#3a2a12 100%);color:#c9b98a;text-align:center;font-size:11px;letter-spacing:0.1em;padding:6px 20px 26px;font-family:-apple-system,sans-serif;">
        <div style="margin-bottom:10px;color:#c9a227;font-weight:700;">NATURALEZA · TECNOLOGÍA · FUTURO</div>
        <div style="margin-bottom:10px;">
          <a href="https://www.linkedin.com/company/oxygentoken/" style="margin:0 7px;color:#c9a227;text-decoration:none;">LinkedIn</a>
          <a href="https://x.com/OxygenToken" style="margin:0 7px;color:#c9a227;text-decoration:none;">X</a>
          <a href="https://instagram.com/oxygentoken" style="margin:0 7px;color:#c9a227;text-decoration:none;">Instagram</a>
        </div>
        <div style="opacity:.75;">© 2026 Oxygen — Todos los derechos reservados</div>
        <div style="opacity:.6;margin-top:10px;font-size:10px;"><a href="{{{RESEND_UNSUBSCRIBE_URL}}}" style="color:#c9b98a;">Cancelar suscripción</a></div>
      </div>

    </div>
  </body>
  </html>
  `;
}

export async function sendWelcomeEmail(email: string, _locale: string = "es") {
  try {
    await resend.emails.send({
      from: FROM,
      to: email,
      subject: "🌳 Cómo nació Oxygen, y en qué estamos hoy",
      html: boletin1Html(),
    });
    return true;
  } catch (error) {
    console.error("Error sending welcome email via Resend:", error);
    return false;
  }
}
