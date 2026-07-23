import type { Metadata } from "next";
import Footer from "../components/Footer/Footer";
import { privacyContent, EFFECTIVE_DATE, type PrivacyCopy } from "./content";

export function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Metadata {
  const copy = privacyContent[locale as keyof typeof privacyContent] ?? privacyContent.en;
  const url = `/${locale}/privacy`;
  return {
    title: copy.title,
    description: copy.intro,
    alternates: { canonical: url },
    openGraph: { title: copy.title, description: copy.intro, url, type: "website" },
  };
}

export default function PrivacyPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const c: PrivacyCopy =
    privacyContent[locale as keyof typeof privacyContent] ?? privacyContent.en;

  return (
    <>
      <main className="bg-black text-white min-h-screen">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 pt-32 pb-24">
          <h1 className="text-4xl font-bold tracking-tight mb-3">{c.title}</h1>
          <p className="text-white/60 text-sm mb-10">
            {c.effectiveLabel}: {EFFECTIVE_DATE}
          </p>
          <p className="text-white/80 leading-relaxed mb-12">{c.intro}</p>

          <div className="space-y-10">
            {c.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-xl font-semibold tracking-tight mb-3">
                  {section.heading}
                </h2>
                <div className="space-y-3 text-white/80 leading-relaxed">
                  {section.body.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
