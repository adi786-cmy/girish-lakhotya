import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { samplePodcasts } from "@/data/content";

export function generateStaticParams() {
  return samplePodcasts.map((podcast) => ({
    slug: podcast.slug,
  }));
}

export default function PodcastDetailPage({ params }: { params: { slug: string } }) {
  const podcast = samplePodcasts.find((p) => p.slug === params.slug);

  if (!podcast) {
    notFound();
  }

  return (
    <div className="pt-28 pb-24 bg-cream text-ink min-h-screen">
      <div className="page-container max-w-4xl space-y-12">
        <Link
          href="/podcast"
          className="inline-block font-mono text-[11px] uppercase tracking-widest text-warm hover:text-ink"
        >
          ← Back to podcast
        </Link>

        <div className="space-y-6 border-b border-ink/15 pb-10">
          <p className="font-mono text-[11px] uppercase tracking-widest text-accent">
            Episode {podcast.episodeNumber}
          </p>
          <h1 className="heading-1">{podcast.title}</h1>
          <p className="font-mono text-[11px] uppercase tracking-widest text-warm">
            {podcast.publishedDate} · {podcast.duration}
          </p>
        </div>

        <p className="font-sans text-base sm:text-lg text-warm leading-relaxed">
          {podcast.description}
        </p>
      </div>
    </div>
  );
}
