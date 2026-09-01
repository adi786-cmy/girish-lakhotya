import React from "react";
import { verifiedMediaMentions } from "@/data/content";
import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata({
  title: "Media & Press — Girish Lakhotya",
  description: "Verified media coverage, magazine features, and public commentary by Girish Lakhotya.",
  canonical: "/media",
});

export default function MediaPage() {
  return (
    <div className="pt-28 pb-24 bg-cream text-ink min-h-screen">
      <div className="page-container space-y-16">
        <div className="space-y-4 max-w-3xl border-b border-ink/15 pb-10">
          <p className="font-mono text-[11px] uppercase tracking-widest text-accent">
            Press
          </p>
          <h1 className="heading-hero">Media.</h1>
          <p className="font-sans text-lg sm:text-xl text-warm leading-relaxed">
            Verified magazine coverage, executive features, and published media coverage for
            Girish Lakhotya.
          </p>
        </div>

        <ol>
          {verifiedMediaMentions.map((item, idx) => (
            <li key={item.id} className="border-t border-ink/15 last:border-b">
              {item.pdfUrl ? (
                <a
                  href={item.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group grid grid-cols-12 gap-4 py-8 md:py-10 items-baseline"
                >
                  <span className="col-span-2 md:col-span-1 font-mono text-[11px] text-warm">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <div className="col-span-8 md:col-span-8 space-y-2">
                    <p className="font-mono text-[11px] uppercase tracking-widest text-accent">
                      {item.publication}
                    </p>
                    <h2 className="font-display font-black uppercase tracking-tight text-xl sm:text-2xl md:text-3xl text-ink group-hover:text-accent transition-colors leading-tight">
                      {item.title}
                    </h2>
                    <p className="font-sans text-sm text-warm leading-relaxed max-w-2xl">
                      {item.summary}
                    </p>
                  </div>
                  <div className="col-span-2 md:col-span-3 text-right">
                    <span className="font-mono text-[11px] uppercase tracking-widest text-warm">
                      {item.date}
                    </span>
                    <span className="block mt-2 font-mono text-[11px] uppercase tracking-widest text-ink group-hover:text-accent">
                      →
                    </span>
                  </div>
                </a>
              ) : (
                <div className="grid grid-cols-12 gap-4 py-8 md:py-10 items-baseline">
                  <span className="col-span-2 md:col-span-1 font-mono text-[11px] text-warm">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <div className="col-span-8 md:col-span-8 space-y-2">
                    <p className="font-mono text-[11px] uppercase tracking-widest text-accent">
                      {item.publication}
                    </p>
                    <h2 className="font-display font-black uppercase tracking-tight text-xl sm:text-2xl md:text-3xl leading-tight">
                      {item.title}
                    </h2>
                    <p className="font-sans text-sm text-warm leading-relaxed max-w-2xl">
                      {item.summary}
                    </p>
                  </div>
                  <div className="col-span-2 md:col-span-3 text-right font-mono text-[11px] uppercase tracking-widest text-warm">
                    {item.date}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
