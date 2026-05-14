import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import { ArrowUpRight, Calendar, User, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/sections/CTASection";
import {
  getAllBlogSlugs,
  getBlogPost,
  getAllBlogPosts,
  CATEGORY_LABELS,
} from "@/lib/blog";

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = getBlogPost(params.slug);
  if (!post) return {};

  return {
    title: `${post.frontmatter.title} | Para Suhu Digital`,
    description: post.frontmatter.excerpt,
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.excerpt,
      type: "article",
      publishedTime: post.frontmatter.date,
      authors: [post.frontmatter.author],
      images: post.frontmatter.cover ? [post.frontmatter.cover] : undefined,
    },
    alternates: {
      canonical: `https://parasuhudigital.com/blog/${params.slug}`,
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function estimateReadingTime(text: string) {
  const wordsPerMin = 200;
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / wordsPerMin));
}

const mdxComponents = {
  h1: (props: any) => (
    <h1
      className="font-display font-semibold text-4xl md:text-5xl text-white tracking-[-0.03em] mt-12 mb-6"
      {...props}
    />
  ),
  h2: (props: any) => (
    <h2
      className="font-display font-semibold text-3xl md:text-4xl text-white tracking-[-0.03em] mt-12 mb-5"
      {...props}
    />
  ),
  h3: (props: any) => (
    <h3
      className="font-display font-semibold text-2xl md:text-3xl text-white tracking-[-0.02em] mt-10 mb-4"
      {...props}
    />
  ),
  p: (props: any) => (
    <p className="text-lg text-white/75 leading-[1.8] my-5" {...props} />
  ),
  a: (props: any) => (
    <a
      className="text-suhu-neon underline underline-offset-4 decoration-suhu-emerald/40 hover:decoration-suhu-neon transition-colors"
      {...props}
    />
  ),
  ul: (props: any) => (
    <ul
      className="text-lg text-white/75 leading-[1.8] my-5 list-disc list-outside pl-6 space-y-2"
      {...props}
    />
  ),
  ol: (props: any) => (
    <ol
      className="text-lg text-white/75 leading-[1.8] my-5 list-decimal list-outside pl-6 space-y-2"
      {...props}
    />
  ),
  li: (props: any) => <li className="marker:text-suhu-emerald" {...props} />,
  blockquote: (props: any) => (
    <blockquote
      className="my-8 pl-6 border-l-2 border-suhu-emerald text-xl text-white/80 italic"
      {...props}
    />
  ),
  code: (props: any) => (
    <code
      className="px-1.5 py-0.5 rounded bg-suhu-black-card border border-white/10 text-suhu-neon font-mono text-[0.9em]"
      {...props}
    />
  ),
  pre: (props: any) => (
    <pre
      className="my-6 p-5 rounded-2xl bg-suhu-black-card border border-white/10 overflow-x-auto text-sm"
      {...props}
    />
  ),
  hr: () => <hr className="my-12 border-white/10" />,
  strong: (props: any) => (
    <strong className="font-semibold text-white" {...props} />
  ),
};

export default function BlogDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getBlogPost(params.slug);
  if (!post) return notFound();

  const { frontmatter, content } = post;
  const category = frontmatter.category
    ? CATEGORY_LABELS[frontmatter.category] ?? frontmatter.category
    : null;
  const readingTime = estimateReadingTime(content);

  const related = getAllBlogPosts()
    .filter((p) => p.slug !== post.slug)
    .filter(
      (p) =>
        p.frontmatter.category === frontmatter.category ||
        p.frontmatter.tags?.some((t) => frontmatter.tags?.includes(t))
    )
    .slice(0, 3);

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-12 overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-suhu-emerald/15 rounded-full blur-[120px]" />

          <div className="relative max-w-[900px] mx-auto px-6 lg:px-12">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-white/40 hover:text-suhu-emerald transition-colors mb-10"
            >
              <ArrowLeft className="w-3 h-3" />
              <span>Kembali ke blog</span>
            </Link>

            {category && (
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="w-8 h-px bg-suhu-emerald" />
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-suhu-emerald">
                  {category}
                </span>
              </div>
            )}

            <h1 className="font-display font-semibold text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-white tracking-[-0.03em]">
              {frontmatter.title}
            </h1>

            <p className="mt-6 text-xl text-white/70 leading-relaxed">
              {frontmatter.excerpt}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-white/50">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{frontmatter.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(frontmatter.date)}</span>
              </div>
              <span>•</span>
              <span>{readingTime} menit baca</span>
            </div>
          </div>
        </section>

        {/* Cover */}
        {frontmatter.cover && (
          <section className="px-6 lg:px-12 mb-12">
            <div className="max-w-[1100px] mx-auto rounded-3xl overflow-hidden border border-white/10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={frontmatter.cover}
                alt={frontmatter.title}
                className="w-full h-auto"
              />
            </div>
          </section>
        )}

        {/* Body */}
        <section className="py-12 pb-24">
          <div className="max-w-[760px] mx-auto px-6 lg:px-12">
            <article className="prose-suhu">
              <MDXRemote source={content} components={mdxComponents} />
            </article>

            {/* Tags */}
            {frontmatter.tags && frontmatter.tags.length > 0 && (
              <div className="mt-16 pt-8 border-t border-white/10">
                <div className="text-xs font-mono uppercase tracking-[0.2em] text-white/40 mb-4">
                  Tags
                </div>
                <div className="flex flex-wrap gap-2">
                  {frontmatter.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono uppercase tracking-wider text-suhu-emerald px-3 py-1.5 rounded-full border border-suhu-emerald/30 bg-suhu-emerald/5"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Related */}
        {related.length > 0 && (
          <section className="py-16 lg:py-24 bg-suhu-black-card/30">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
              <div className="mb-12">
                <div className="inline-flex items-center gap-2 mb-6">
                  <span className="w-8 h-px bg-suhu-emerald" />
                  <span className="text-xs font-mono uppercase tracking-[0.2em] text-suhu-emerald">
                    Baca Juga
                  </span>
                </div>
                <h2 className="font-display font-semibold text-4xl md:text-5xl leading-[0.95] tracking-[-0.03em] text-white">
                  Artikel terkait
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {related.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className="group block p-7 rounded-3xl border border-white/10 bg-suhu-black hover:border-suhu-emerald/40 transition-all"
                  >
                    <div className="text-xs font-mono uppercase tracking-[0.2em] text-suhu-emerald mb-3">
                      {p.frontmatter.category
                        ? CATEGORY_LABELS[p.frontmatter.category] ??
                          p.frontmatter.category
                        : "Article"}
                    </div>
                    <h3 className="font-display font-semibold text-xl text-white tracking-[-0.02em] group-hover:text-suhu-neon transition-colors leading-tight">
                      {p.frontmatter.title}
                    </h3>
                    <p className="mt-3 text-sm text-white/60 leading-relaxed line-clamp-3">
                      {p.frontmatter.excerpt}
                    </p>
                    <div className="mt-5 inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-white/40 group-hover:text-suhu-emerald transition-colors">
                      <span>Baca</span>
                      <ArrowUpRight className="w-3 h-3 transition-transform group-hover:rotate-45" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
