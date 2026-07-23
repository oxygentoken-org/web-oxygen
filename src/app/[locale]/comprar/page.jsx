import ComprarContent from "./ComprarContent";

export function generateMetadata({ params: { locale } }) {
  const isEn = locale === "en";
  const title = isEn ? "Buy" : "Comprar";
  const description = isEn
    ? "Buy Oxygen tokens to offset your carbon footprint and fund verified forest conservation in Argentina."
    : "Comprá tokens de Oxygen para compensar tu huella de carbono y financiar la conservación de bosques verificada en Argentina.";
  const url = `/${locale}/comprar`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: "website" },
  };
}

export default function ComprarPage() {
  return <ComprarContent />;
}
