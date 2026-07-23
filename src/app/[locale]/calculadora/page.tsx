import type { Metadata } from "next";
import CalculadoraContent from "./CalculadoraContent";

export function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Metadata {
  const isEn = locale === "en";
  const title = isEn ? "CO₂ Calculator" : "Calculadora de CO₂";
  const description = isEn
    ? "Calculate your carbon footprint and offset it with Oxygen tokens that fund verified forest conservation."
    : "Calculá tu huella de carbono y compensala con tokens de Oxygen que financian la conservación de bosques verificada.";
  const url = `/${locale}/calculadora`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: "website" },
  };
}

export default function CalculadoraPage() {
  return <CalculadoraContent />;
}
