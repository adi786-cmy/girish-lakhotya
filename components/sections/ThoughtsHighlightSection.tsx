import React from "react";
import Link from "next/link";
import { sampleArticles } from "@/data/content";

export default function ThoughtsHighlightSection() {
  return (
    <section className="section-padding bg-cream text-ink border-t border-ink/10">
      <div className="page-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-accent">Thoughts</p>
            <h2 className="heading-2">Perspectives & notes</h2>
          </div>
          <Link
            href="/thoughts"
            className="font-mono text-[11px] uppercase tracking-[0.22em] text-warm hover:text-ink"
          >
            All articles →
          </Link>
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
                <div className="col-span-10 md:col-span-8 space-y-2">
                  <h3 className="font-display font-black uppercase tracking-tight text-xl sm:text-2xl md:text-3xl text-ink group-hover:text-accent transition-colors leading-tight">
                    {article.title}
                  </h3>
                  <p className="font-sans text-sm text-warm leading-relaxed max-w-2xl">
                    {article.excerpt}
                  </p>
                </div>
                <div className="hidden md:block md:col-span-3 text-right font-mono text-[11px] uppercase tracking-widest text-warm">
                  {article.category}
                  <span className="block mt-1">{article.readTime}</span>
                </div>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
