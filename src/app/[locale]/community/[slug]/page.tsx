import { getTranslations } from "next-intl/server";
import { BlogClient } from 'seobot';
import Rich_Content from "../../components/Blog/Rich_Content";
import Scroll_To_Top from "../../components/Blog/Scroll_To_Top";
import Footer from "../../components/Footer/Footer";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

async function getPost(slug: string) {
  const key = process.env.SEOBOT_API_KEY;
  if (!key) {
    console.error('SEOBOT_API_KEY environment variable must be set');
    return null;
  }

  try {
    const client = new BlogClient(key);
    return await client.getArticle(slug);
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}

async function getMoreArticles(currentSlug: string) {
  const key = process.env.SEOBOT_API_KEY;
  if (!key) return [] as any[];
  const client = new BlogClient(key);
  const res = await client.getArticles(0, 6);
  const list = (res.articles || []).filter((a: any) => a.slug !== currentSlug);
  return list.slice(0, 3);
}

function sanitizeArticleHtml(html: string, headline: string): string {
  if (!html) return html;
  const pattern = /<h[12][^>]*>\s*([^<]+?)\s*<\/h[12]>/i;
  const match = html.match(pattern);
  if (!match) return html;
  const text = match[1].trim();
  if (text === headline || match.index !== undefined && match.index < 300) {
    return html.replace(pattern, "");
  }
  return html;
}

interface SEObotBlogPostPageProps {
  params: {
    locale: string;
    slug: string;
  };
}

export async function generateMetadata({ params }: SEObotBlogPostPageProps) {
  const post = await getPost(params.slug);
  if (!post) return {};

  const title = post.headline;
  const description = post.metaDescription || post.headline;
  const canonical = `/community/${params.slug}`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "article",
      ...(post.image ? { images: [{ url: post.image }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(post.image ? { images: [post.image] } : {}),
    },
  };
}

export default async function SEObotBlogPostPage({ params }: SEObotBlogPostPageProps) {
  const t = await getTranslations("Blog");
  const post = await getPost(params.slug);
  const more = await getMoreArticles(params.slug);

  if (!post) {
    notFound();
  }

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.headline,
    description: post.metaDescription || post.headline,
    ...(post.image ? { image: post.image } : {}),
    ...(post.createdAt ? { datePublished: post.createdAt } : {}),
    url: `https://oxygentoken.org/${params.locale}/community/${params.slug}`,
    author: { "@type": "Organization", name: "Oxygen Token" },
    publisher: {
      "@type": "Organization",
      name: "Oxygen Token",
      logo: {
        "@type": "ImageObject",
        url: "https://oxygentoken.org/assets/images/logo.png",
      },
    },
  };

  return (
    <div className="min-h-screen relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <div className="fixed inset-0 z-0">
        <div 
          className="w-full h-full bg-no-repeat"
          style={{
            backgroundImage: "url('/assets/images/blogBg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-teal-dark/70 via-teal-dark/60 to-teal-medium/70"></div>
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      <div className="relative z-10">
        <div className="pt-16 lg:pt-32 pb-24">
          <div className="max-w-[60rem] mx-auto px-4 lg:px-8">
            
            <div className="grid grid-cols-1 gap-12">
              <div className="col-span-1">
        
        <article className="relative bg-white/10 backdrop-blur-sm rounded-lg pt-16 p-8 border border-white/20">
          <Link
            href="/community"
            className="absolute top-4 right-4 inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-200"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            {t("backToBlog") || "Back to Community"}
          </Link>
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-white mb-4 leading-tight">{post.headline}</h1>
            <div className="flex items-center gap-4 text-white/60 mb-6">
              <span>Oxygen Team</span>
              <span>•</span>
              <span>{new Date(post.createdAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</span>
              <span>•</span>
              <span>{post.readingTime || 5} min read</span>
            </div>
            
            {post.image && (
              <div className="relative w-full rounded-lg overflow-hidden mb-6 aspect-[16/9]">
                <Image
                  src={post.image}
                  alt={post.headline}
                  fill
                  sizes="(max-width: 768px) 100vw, 768px"
                  className="object-cover"
                />
              </div>
            )}

            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {post.tags.map((tag: any, index: number) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm text-white/80"
                  >
                    {tag.title}
                  </span>
                ))}
              </div>
            )}
          </header>
          
          {(() => {
            const anyPost = post as any;
            const rawHtml = anyPost.content || anyPost.body || anyPost.html || anyPost.contentHtml || anyPost.article || anyPost.fullContent || '';
            const html = sanitizeArticleHtml(rawHtml, post.headline);
            return <Rich_Content html={html} />;
          })()}

          <footer className="mt-12 pt-8 border-t border-white/20">
            <div className="flex items-center justify-between text-white/60">
              <div className="flex items-center gap-6">
                <span>0 {t("views") || "views"}</span>
                <span>0 {t("comments") || "comments"}</span>
                <span>0 {t("likes") || "likes"}</span>
              </div>
              <div className="text-sm">
                {t("publishedOn") || "Published on"} {new Date(post.createdAt).toLocaleDateString()}
              </div>
            </div>
          </footer>
        </article>
        
        {more.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-bold text-white mb-6">You may also be interested in</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {more.map((m: any) => (
                <Link
                  key={m.id}
                  href={`/community/${m.slug}`}
                  className="group rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors"
                >
                  <div className="relative h-40 w-full overflow-hidden">
                    <Image
                      src={m.image || '/assets/images/forest.jpg'}
                      alt={m.headline}
                      fill
                      sizes="(max-width: 768px) 100vw, 400px"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-white font-semibold text-lg line-clamp-2">{m.headline}</h3>
                    <p className="text-white/70 text-sm mt-2 line-clamp-3">{m.metaDescription || ''}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
        
        <Scroll_To_Top />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
