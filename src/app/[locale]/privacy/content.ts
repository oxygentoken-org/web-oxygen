// Privacy policy copy. This is a good-faith starting point that reflects the
// site's actual data practices; it is not legal advice and should be reviewed
// by a lawyer before being relied upon. Effective date is a fixed string, not
// a runtime value, so it only changes when the policy actually changes.
export const EFFECTIVE_DATE = "2026-07-23";

type Section = { heading: string; body: string[] };
export type PrivacyCopy = {
  title: string;
  intro: string;
  effectiveLabel: string;
  sections: Section[];
};

const en: PrivacyCopy = {
  title: "Privacy Policy",
  effectiveLabel: "Last updated",
  intro:
    "This Privacy Policy explains how Oxygen (\"we\", \"us\") collects, uses and protects your personal data when you use oxygentoken.org and related services.",
  sections: [
    {
      heading: "1. Data we collect",
      body: [
        "Account data: the email address and password you provide when you create an account, and any two-factor authentication settings.",
        "Wallet data: your public wallet address when you sign in with a crypto wallet (Sign-In with Ethereum).",
        "Communications: your email address if you subscribe to our newsletter, and the content of any message you send us.",
        "Affiliate data: affiliate or referral codes you enter or are assigned.",
        "Usage data: technical information collected automatically, such as pages visited, approximate location, device and browser, gathered through analytics tools.",
      ],
    },
    {
      heading: "2. How we use your data",
      body: [
        "To create and manage your account and authenticate you.",
        "To provide, operate and improve the website and its features.",
        "To send you service messages and, where you have opted in, newsletters.",
        "To measure and analyze usage so we can improve the product.",
        "To protect the security of our users and prevent abuse or fraud.",
      ],
    },
    {
      heading: "3. Cookies and similar technologies",
      body: [
        "We use strictly necessary cookies to keep you signed in and remember your language preference (for example, an authentication token and a NEXT_LOCALE cookie).",
        "We use analytics cookies and tags to understand how the site is used. You can control cookies through your browser settings.",
      ],
    },
    {
      heading: "4. Third parties and processors",
      body: [
        "We rely on trusted providers to run the service, including Vercel (hosting and analytics), Google (tag management and spreadsheets), and our content and email providers.",
        "When you interact with a public blockchain, your wallet address and transactions are public by nature and outside our control.",
        "We do not sell your personal data.",
      ],
    },
    {
      heading: "5. Data retention",
      body: [
        "We keep your personal data for as long as your account is active or as needed to provide the service, and thereafter only as required to comply with legal obligations or resolve disputes.",
      ],
    },
    {
      heading: "6. Your rights",
      body: [
        "Depending on your jurisdiction, you may have the right to access, correct, delete or export your personal data, and to object to or restrict certain processing.",
        "To exercise any of these rights, contact us at oxygen@oxygentoken.org.",
      ],
    },
    {
      heading: "7. International transfers",
      body: [
        "Your data may be processed in countries other than your own. Where required, we take steps to ensure an adequate level of protection for your data.",
      ],
    },
    {
      heading: "8. Children",
      body: [
        "The service is not directed to children under 18, and we do not knowingly collect their personal data.",
      ],
    },
    {
      heading: "9. Changes to this policy",
      body: [
        "We may update this policy from time to time. We will indicate the date of the latest revision at the top of this page.",
      ],
    },
    {
      heading: "10. Contact",
      body: [
        "For any question about this policy or your personal data, contact us at oxygen@oxygentoken.org.",
      ],
    },
  ],
};

const es: PrivacyCopy = {
  title: "Política de Privacidad",
  effectiveLabel: "Última actualización",
  intro:
    "Esta Política de Privacidad explica cómo Oxygen (\"nosotros\") recopila, usa y protege tus datos personales cuando usás oxygentoken.org y los servicios relacionados.",
  sections: [
    {
      heading: "1. Datos que recopilamos",
      body: [
        "Datos de cuenta: la dirección de correo y la contraseña que proporcionás al crear una cuenta, y la configuración de autenticación de dos factores.",
        "Datos de wallet: tu dirección de wallet pública cuando iniciás sesión con una billetera cripto (Sign-In with Ethereum).",
        "Comunicaciones: tu dirección de correo si te suscribís al newsletter, y el contenido de los mensajes que nos envíes.",
        "Datos de afiliados: los códigos de afiliado o referido que ingresás o que te asignamos.",
        "Datos de uso: información técnica recopilada automáticamente, como páginas visitadas, ubicación aproximada, dispositivo y navegador, obtenida mediante herramientas de analítica.",
      ],
    },
    {
      heading: "2. Cómo usamos tus datos",
      body: [
        "Para crear y administrar tu cuenta y autenticarte.",
        "Para brindar, operar y mejorar el sitio web y sus funcionalidades.",
        "Para enviarte mensajes del servicio y, cuando lo hayas aceptado, newsletters.",
        "Para medir y analizar el uso y así mejorar el producto.",
        "Para proteger la seguridad de nuestros usuarios y prevenir abusos o fraudes.",
      ],
    },
    {
      heading: "3. Cookies y tecnologías similares",
      body: [
        "Usamos cookies estrictamente necesarias para mantener tu sesión y recordar tu idioma (por ejemplo, un token de autenticación y una cookie NEXT_LOCALE).",
        "Usamos cookies y etiquetas de analítica para entender cómo se usa el sitio. Podés controlar las cookies desde la configuración de tu navegador.",
      ],
    },
    {
      heading: "4. Terceros y encargados de tratamiento",
      body: [
        "Nos apoyamos en proveedores de confianza para operar el servicio, incluyendo Vercel (hosting y analítica), Google (gestión de etiquetas y planillas) y nuestros proveedores de contenido y correo.",
        "Cuando interactuás con una blockchain pública, tu dirección de wallet y tus transacciones son públicas por naturaleza y están fuera de nuestro control.",
        "No vendemos tus datos personales.",
      ],
    },
    {
      heading: "5. Conservación de los datos",
      body: [
        "Conservamos tus datos personales mientras tu cuenta esté activa o mientras sea necesario para prestar el servicio, y luego solo durante el tiempo requerido para cumplir obligaciones legales o resolver disputas.",
      ],
    },
    {
      heading: "6. Tus derechos",
      body: [
        "Según tu jurisdicción, podés tener derecho a acceder, corregir, eliminar o exportar tus datos personales, y a oponerte o restringir ciertos tratamientos.",
        "Para ejercer cualquiera de estos derechos, escribinos a oxygen@oxygentoken.org.",
      ],
    },
    {
      heading: "7. Transferencias internacionales",
      body: [
        "Tus datos pueden procesarse en países distintos al tuyo. Cuando corresponde, tomamos medidas para garantizar un nivel de protección adecuado.",
      ],
    },
    {
      heading: "8. Menores",
      body: [
        "El servicio no está dirigido a menores de 18 años, y no recopilamos deliberadamente sus datos personales.",
      ],
    },
    {
      heading: "9. Cambios en esta política",
      body: [
        "Podemos actualizar esta política ocasionalmente. Indicaremos la fecha de la última revisión al inicio de esta página.",
      ],
    },
    {
      heading: "10. Contacto",
      body: [
        "Ante cualquier consulta sobre esta política o tus datos personales, escribinos a oxygen@oxygentoken.org.",
      ],
    },
  ],
};

export const privacyContent = { en, es };
