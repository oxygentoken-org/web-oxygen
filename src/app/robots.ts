import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/es/dashboard/", "/en/dashboard/"],
    },
    sitemap: "https://oxygentoken.org/sitemap.xml",
    host: "https://oxygentoken.org",
  };
}
