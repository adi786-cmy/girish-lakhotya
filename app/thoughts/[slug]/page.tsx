import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { sampleArticles } from "@/data/content";
import EditorialCover from "@/components/ui/EditorialCover";

export function generateStaticParams() {
  return sampleArticles.map((article) => ({
    slug: article.slug,
  }));
}

export default function ArticleDetailPage({ params }: { params: { slug: string } }) {
  const article = sampleArticles.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  const articleIndex = sampleArticles.findIndex((a) => a.slug === article.slug) + 1;

  return (
    <div className="pt-28 pb-24 bg-cream text-ink min-h-screen">
      <div className="page-container max-w-4xl space-y-12">
        <Link
          href="/thoughts"
          className="inline-block font-mono text-[11px] uppercase tracking-widest text-warm hover:text-ink"
        >
          ← Back to notebook
        </Link>

        <div className="space-y-6 border-b border-ink/15 pb-10">
          <p className="font-mono text-[11px] uppercase tracking-widest text-accent">
            {article.category}
          </p>
          <h1 className="heading-1">{article.title}</h1>
          <p className="font-sans text-lg text-warm leading-relaxed">{article.excerpt}</p>
          <p className="font-mono text-[11px] uppercase tracking-widest text-warm">
            {article.author} · {article.publishedDate} · {article.readTime}
          </p>
        </div>

        <EditorialCover
          kicker={article.category}
          title={article.title}
          index={articleIndex}
          meta={article.publishedDate}
        />

        <div
          className="font-sans text-base sm:text-lg text-ink leading-relaxed space-y-6 prose-headings:font-display prose-headings:uppercase prose-headings:tracking-tight prose-headings:text-ink"
          dangerouslySetInnerHTML={{ __html: article.body }}
        />

        <div className="border-t border-ink/15 pt-10 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="space-y-2">
            <p className="font-mono text-[11px] uppercase tracking-widest text-accent">
              Bond Smart
            </p>
            <p className="font-sans text-sm text-warm max-w-md">
              How Girish Lakhotya is standardizing legal bond access through technology.
            </p>
          </div>
          <Link
            href="/bond-smart"
            className="font-mono text-[11px] uppercase tracking-widest text-ink hover:text-accent"
          >
            Explore Bond Smart →
          </Link>
        </div>
      </div>
    </div>
  );
}
