import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight, Calendar, User } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getAllBlogPosts, CATEGORY_LABELS, type BlogPost } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — Insights Digital Marketing | Para Suhu Digital",
  description:
    "Insights, tips, dan case study seputar SEO, Ads, Website, Social Media, dan AI untuk bisnis Indonesia. Update mingguan dari Para Suhu Digital.",
  alternates: {
    canonical: "https://parasuhudigital.com/blog",
  },
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function PostCard({ post, featured }: { post: BlogPost; featured?: boolean }) {
  const { slug, frontmatter } = post;
  const category = frontmatter.category
    ? CATEGORY_LABELS[frontmatter.category] ?? frontmatter.category
    : null;

  return (
    <Link
      href={`/blog/${slug}`}
      className={`group block rounded-3xl border border-white/10 bg-suhu-black-card/40 hover:border-suhu-emerald/40 hover:bg-suhu-black-card transition-all overflow-hidden ${
        featured ? "md:col-span-2 md:row-span-2" : ""
      }`}
    >
      {frontmatter.cover && (
        <div
          className={`relative w-full overflow-hidden ${
            featured ? "aspect-[16/9]" : "aspect-[16/10]"
          }`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={frontmatter.cover}
            alt={frontmatter.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </div>
      )}

      <div className={`p-7 ${featured ? "lg:p-10" : ""}`}>
        <div className="flex items-center gap-3 mb-5">
          {category && (
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-suhu-emerald">
              {category}
            </span>
          )}
          {category && (
            <span className="w-1 h-1 rounded-full bg-white/30" />
          )}
          <span className="text-xs text-white/40 font-mono">
            {formatDate(frontmatter.date)}
          </span>
        </div>

        <h3
          className={`font-display font-semibold text-white tracking-[-0.02em] group-hover:text-suhu-neon transition-colors ${
            featured
              ? "text-3xl md:text-4xl lg:text-5xl leading-[1.05]"
              : "text-xl md:text-2xl leading-tight"
          }`}
        >
          {frontmatter.title}
        </h3>

        <p
          className={`mt-4 text-white/60 leading-relaxed ${
            featured ? "text-base md:text-lg" : "text-sm"
          }`}
        >
          {frontmatter.excerpt}
        </p>

        <div className="mt-6 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-white/50">
            <User className="w-3 h-3" />
            <span>{frontmatter.author}</span>
          </div>
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-white/40 group-hover:text-suhu-emerald transition-colors">
            <span>Baca</span>
            <ArrowUpRight className="w-3 h-3 transition-transform group-hover:rotate-45" />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function BlogPage() {
  const allPosts = getAllBlogPosts();
  const featured = allPosts.find((p) => p.frontmatter.featured);
  const others = featured
    ? allPosts.filter((p) => p.slug !== featured.slug)
    : allPosts;

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-40" />
          <div className="absolute top-1/3 -right-32 w-96 h-96 bg-suhu-emerald/20 rounded-full blur-[120px]" />

          <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-suhu-emerald/30 bg-suhu-emerald/5 rounded-full mb-8">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-suhu-emerald">
                Blog & Insights
              </span>
            </div>

            <h1 className="font-display font-semibold text-[10vw] md:text-[7vw] lg:text-[6vw] leading-[0.9] text-white tracking-[-0.04em]">
              Insight, tips,
              <br />
              <span className="font-bold text-gradient-emerald">
                & case study.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg md:text-xl text-white/70 leading-relaxed">
              Artikel actionable seputar SEO, Ads, Website, Socmed, dan AI
              untuk bisnis Indonesia. Update reguler.
            </p>
          </div>
        </section>

        {/* Posts grid */}
        <section className="py-16 lg:py-24">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            {allPosts.length === 0 ? (
              <div className="text-center py-24 border border-dashed border-white/10 rounded-3xl">
                <p className="text-white/40 font-mono text-sm uppercase tracking-[0.2em]">
                  Belum ada artikel. Stay tuned.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featured && <PostCard post={featured} featured />}
                {others.map((post) => (
                  <PostCard key={post.slug} post={post} />
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
