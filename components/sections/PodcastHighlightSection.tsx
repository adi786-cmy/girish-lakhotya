import React from "react";
import Link from "next/link";
import { samplePodcasts } from "@/data/content";

export default function PodcastHighlightSection() {
  const featured = samplePodcasts[0];

  if (!featured || samplePodcasts.length === 0) {
    return (
      <section className="section-padding bg-cream text-ink border-t border-ink/10">
        <div className="page-container space-y-8">
          <div className="space-y-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-accent">Podcast</p>
            <h2 className="heading-2">The Bondsman Podcast</h2>
          </div>
          <p className="font-sans text-base text-warm leading-relaxed max-w-2xl">
            Conversations on bail bond access and legal reform are forthcoming. Episodes
            will appear here once verified recordings are published.
          </p>
          <Link
            href="/podcast"
            className="inline-block font-mono text-[11px] uppercase tracking-[0.22em] text-warm hover:text-ink"
          >
            Podcast series →
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding bg-cream text-ink border-t border-ink/10">
      <div className="page-container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-end">
          <div className="md:col-span-8 space-y-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-accent">Podcast</p>
            <p className="font-mono text-[11px] uppercase tracking-widest text-warm">
              Episode {featured.episodeNumber} · {featured.duration}
            </p>
            <h2 className="heading-2">{featured.title}</h2>
            <p className="font-sans text-base text-warm leading-relaxed max-w-2xl">
              {featured.description}
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href={`/podcast/${featured.slug}`}
                className="inline-flex items-center justify-center rounded-full bg-ink text-cream text-xs tracking-widest uppercase px-8 py-3"
              >
                Listen
              </Link>
              <Link
                href="/podcast"
                className="inline-flex items-center justify-center rounded-full border border-ink/25 text-warm text-xs tracking-widest uppercase px-8 py-3"
              >
                All episodes
              </Link>
            </div>
          </div>
          <div className="md:col-span-4 border-t border-ink/20 pt-6">
            <p className="font-display font-black uppercase tracking-tight text-2xl">The Bondsman Podcast</p>
            <p className="font-mono text-[11px] uppercase tracking-widest text-warm mt-2">
              Hosted by Girish Lakhotya
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
