import ProyectosContent from "./ProyectosContent";

export function generateMetadata({ params: { locale } }) {
  const isEn = locale === "en";
  const title = isEn ? "Projects" : "Proyectos";
  const description = isEn
    ? "Explore Oxygen's forest conservation projects and the map of La Esperanza in Formosa, Argentina."
    : "Explorá los proyectos de conservación de bosques de Oxygen y el mapa de La Esperanza en Formosa, Argentina.";
  const url = `/${locale}/proyectos`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: "website" },
  };
}

export default function ProyectosPage() {
  return <ProyectosContent />;
}
