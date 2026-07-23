import NosotrosContent from "./NosotrosContent";

export function generateMetadata({ params: { locale } }) {
  const isEn = locale === "en";
  const title = isEn ? "About Us" : "Nosotros";
  const description = isEn
    ? "Meet the Oxygen team and our mission and vision for forest conservation and carbon markets."
    : "Conocé al equipo de Oxygen y nuestra misión y visión para la conservación de bosques y los mercados de carbono.";
  const url = `/${locale}/nosotros`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: "website" },
  };
}

export default function NosotrosPage() {
  return <NosotrosContent />;
}
