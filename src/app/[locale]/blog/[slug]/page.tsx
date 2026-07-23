import { permanentRedirect } from "next/navigation";

// Articles are now served under /community/[slug] (SEObot-backed). This route
// used to render a duplicate of the same article; redirect to avoid duplicate
// content and preserve any indexed /blog/<slug> URLs.
export default function BlogSlugRedirect({
  params,
}: {
  params: { locale: string; slug: string };
}) {
  permanentRedirect(`/${params.locale}/community/${params.slug}`);
}
