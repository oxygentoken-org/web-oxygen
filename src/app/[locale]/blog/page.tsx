import { permanentRedirect } from "next/navigation";

// The live blog now lives at /community (SEObot-backed). The old /blog page
// held placeholder content; keep the URL working by redirecting to /community.
export default function BlogRedirect({ params }: { params: { locale: string } }) {
  permanentRedirect(`/${params.locale}/community`);
}
