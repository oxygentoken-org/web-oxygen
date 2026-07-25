// Sincroniza los emails de la pestaña "Newsletter" del Google Sheet con la
// Audience de Resend. Uso manual/admin — requiere RESEND_FULL_ACCESS_KEY,
// que nunca debe usarse en el endpoint público de suscripción.
//
// Uso: node scripts/sync-newsletter-audience.js

require("dotenv").config({ path: ".env.local" });
const { Resend } = require("resend");
const { google } = require("googleapis");

const AUDIENCE_ID = process.env.RESEND_NEWSLETTER_AUDIENCE_ID;

async function main() {
  if (!process.env.RESEND_FULL_ACCESS_KEY) {
    throw new Error("Falta RESEND_FULL_ACCESS_KEY en el entorno");
  }
  if (!AUDIENCE_ID) {
    throw new Error("Falta RESEND_NEWSLETTER_AUDIENCE_ID en el entorno");
  }

  const resend = new Resend(process.env.RESEND_FULL_ACCESS_KEY);

  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  });
  const sheets = google.sheets({ version: "v4", auth });

  const { data } = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.GOOGLE_SHEETS_ID,
    range: "Newsletter!A:A",
  });

  const rows = data.values || [];
  const emails = rows.slice(1).map((r) => (r[0] || "").trim()).filter(Boolean);

  console.log(`Encontrados ${emails.length} emails en la planilla.`);

  let added = 0;
  let skipped = 0;
  for (const email of emails) {
    const result = await resend.contacts.create({ email, audienceId: AUDIENCE_ID });
    if (result.error) {
      console.log(`  - ${email}: ${result.error.message}`);
      skipped++;
    } else {
      added++;
    }
  }

  console.log(`Listo. Agregados/actualizados: ${added}. Con error: ${skipped}.`);
}

main().catch((err) => {
  console.error("Error sincronizando:", err.message);
  process.exit(1);
});
