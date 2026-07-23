import type { Metadata } from "next";

import WhitepaperContent from "./WhitepaperContent";
import { whitepaperContent } from "./content";

export function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Metadata {
  const copy =
    whitepaperContent[locale as keyof typeof whitepaperContent] ??
    whitepaperContent.en;
  const { title, description } = copy.meta;
  const url = `/${locale}/whitepaper`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: "website" },
  };
}

export default function WhitepaperPage() {
  return <WhitepaperContent />;
}
