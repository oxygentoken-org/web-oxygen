import type { MetadataRoute } from "next";
import { BlogClient } from "seobot";

const BASE_URL = "https://oxygentoken.org";
const LOCALES = ["es", "en"] as const;

// Public, indexable routes (login/register/dashboard are intentionally excluded).
const STATIC_PATHS = [
  "",
  "/nosotros",
  "/proyectos",
  "/calculadora",
  "/community",
  "/whitepaper",
  "/privacy",
];

async function getArticleSlugs(): Promise<string[]> {
  const key = process.env.SEOBOT_API_KEY;
  if (!key) return [];
  try {
    const client = new BlogClient(key);
    const res = await client.getArticles(0, 1000);
    return (res.articles || []).map((a: any) => a.slug).filter(Boolean);
  } catch {
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const path of STATIC_PATHS) {
    for (const locale of LOCALES) {
      entries.push({
        url: `${BASE_URL}/${locale}${path}`,
        lastModified: now,
        changeFrequency: path === "" ? "weekly" : "monthly",
        priority: path === "" ? 1 : 0.7,
      });
    }
  }

  const slugs = await getArticleSlugs();
  for (const slug of slugs) {
    for (const locale of LOCALES) {
      entries.push({
        url: `${BASE_URL}/${locale}/community/${slug}`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.6,
      });
    }
  }

  return entries;
}
