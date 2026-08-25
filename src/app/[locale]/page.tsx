import "./globals.css";
import type { Metadata } from "next";
import MainPage from "./components/MainPage/MainPage";

const COPY = {
  es: {
    title: "Oxygen Token — Créditos de carbono tokenizados de conservación forestal real",
    description:
      "Oxygen convierte la conservación forestal verificada en créditos de carbono on-chain. Compensá tu huella y financiá la protección de bosques nativos en Argentina.",
  },
  en: {
    title: "Oxygen Token — Tokenized carbon credits for real forest conservation",
    description:
      "Oxygen turns verified forest conservation into on-chain carbon credits. Offset your footprint and fund the protection of native forests in Argentina.",
  },
} as const;

export function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Metadata {
  const copy = locale === "en" ? COPY.en : COPY.es;

  return {
    title: { absolute: copy.title },
    description: copy.description,
    alternates: {
      canonical: `/${locale}`,
      languages: { es: "/es", en: "/en", "x-default": "/es" },
    },
    openGraph: {
      title: copy.title,
      description: copy.description,
      url: `/${locale}`,
      siteName: "Oxygen Token",
      type: "website",
    },
  };
}

export default function Home() {
  return (
    <>
      <main>
        <MainPage />
      </main>
    </>
  );
}
