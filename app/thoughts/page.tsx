import React from "react";
import Link from "next/link";
import { sampleArticles } from "@/data/content";
import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata({
  title: "Girish's Notebook — Thoughts on Bail Bonds & Bond Smart",
  description: "Essays, notes, and strategic perspectives by Girish Lakhotya on bail reform, citizen rights, and progressive finance.",
  canonical: "/thoughts",
});

export default function ThoughtsPage() {
  return (
    <div className="pt-28 pb-24 bg-cream text-ink min-h-screen">
      <div className="page-container space-y-16">
        <div className="space-y-4 max-w-3xl border-b border-ink/15 pb-10">
          <p className="font-mono text-[11px] uppercase tracking-widest text-accent">
            Journal
          </p>
          <h1 className="heading-hero">Girish&apos;s Notebook.</h1>
          <p className="font-sans text-lg sm:text-xl text-warm leading-relaxed">
            Essays, field notes, and statutory perspectives on bail bond reform, citizen access,
            and digital legal infrastructure.
          </p>
        </div>

        <ol>
          {sampleArticles.map((article, idx) => (
            <li key={article.id} className="border-t border-ink/15 last:border-b">
              <Link
                href={`/thoughts/${article.slug}`}
                className="group grid grid-cols-12 gap-4 py-8 md:py-10 items-baseline"
              >
                <span className="col-span-2 md:col-span-1 font-mono text-[11px] text-warm">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <div className="col-span-8 md:col-span-8 space-y-2">
                  <h2 className="font-display font-black uppercase tracking-tight text-xl sm:text-2xl md:text-3xl text-ink group-hover:text-accent transition-colors leading-tight">
                    {article.title}
                  </h2>
                  <p className="font-sans text-sm text-warm leading-relaxed max-w-2xl">
                    {article.excerpt}
                  </p>
                </div>
                <div className="col-span-2 md:col-span-3 text-right">
                  <span className="font-mono text-[11px] uppercase tracking-widest text-warm">
                    {article.publishedDate}
                  </span>
                  <span className="block mt-2 font-mono text-[11px] uppercase tracking-widest text-ink group-hover:text-accent">
                    →
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
