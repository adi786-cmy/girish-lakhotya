import React from "react";
import Link from "next/link";
import { samplePodcasts } from "@/data/content";
import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata({
  title: "Podcast Series — Girish Lakhotya: The Bondsman Podcast",
  description: "Listen to episodes of The Bondsman Podcast hosted by Girish Lakhotya, discussing bail bonds reform, legal accessibility, and legaltech innovation.",
  canonical: "/podcast",
});

export default function PodcastPage() {
  if (samplePodcasts.length === 0) {
    return (
      <div className="pt-28 pb-24 bg-cream text-ink min-h-screen">
        <div className="page-container space-y-16">
          <div className="space-y-4 max-w-3xl border-b border-ink/15 pb-10">
            <p className="font-mono text-[11px] uppercase tracking-widest text-accent">
              Podcast
            </p>
            <h1 className="heading-hero">The Bondsman Podcast.</h1>
            <p className="font-sans text-lg text-warm leading-relaxed max-w-2xl">
              Hosted by Girish Lakhotya. Conversations with legal minds, technology
              innovators, and justice advocates will be published here once verified
              episodes are ready.
            </p>
          </div>

          <div className="border-t border-ink/15 py-16 max-w-2xl space-y-6">
            <p className="font-sans text-base text-warm leading-relaxed">
              No episodes are listed yet. The series archive will open on this page
              when recordings can be verified.
            </p>
            <Link
              href="/"
              className="inline-block font-mono text-[11px] uppercase tracking-widest text-ink hover:text-accent"
            >
              Return home →
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-24 bg-cream text-ink min-h-screen">
      <div className="page-container space-y-16">
        <div className="space-y-4 max-w-3xl border-b border-ink/15 pb-10">
          <p className="font-mono text-[11px] uppercase tracking-widest text-accent">
            Podcast
          </p>
          <h1 className="heading-hero">The Bondsman Podcast.</h1>
          <p className="font-sans text-lg text-warm leading-relaxed max-w-2xl">
            Hosted by Girish Lakhotya. In-depth conversations with legal minds, technology
            innovators, and justice advocates across India.
          </p>
        </div>

        <ol>
          {samplePodcasts.map((podcast, idx) => (
            <li key={podcast.id} className="border-t border-ink/15 last:border-b">
              <Link
                href={`/podcast/${podcast.slug}`}
                className="group grid grid-cols-12 gap-4 py-8 md:py-10 items-baseline"
              >
                <span className="col-span-2 md:col-span-1 font-mono text-[11px] text-warm">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <div className="col-span-8 md:col-span-8 space-y-2">
                  <h2 className="font-display font-black uppercase tracking-tight text-xl sm:text-2xl md:text-3xl text-ink group-hover:text-accent transition-colors leading-tight">
                    {podcast.title}
                  </h2>
                  <p className="font-sans text-sm text-warm leading-relaxed max-w-2xl">
                    {podcast.description}
                  </p>
                </div>
                <div className="col-span-2 md:col-span-3 text-right">
                  <span className="font-mono text-[11px] uppercase tracking-widest text-warm">
                    {podcast.publishedDate}
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
