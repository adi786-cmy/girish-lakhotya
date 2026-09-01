import React from "react";
import Link from "next/link";
import { sampleVideos } from "@/data/content";

export default function VideoHubHighlightSection() {
  const featuredVideos = sampleVideos.filter((v) => v.featured).slice(0, 4);

  if (featuredVideos.length === 0) {
    return (
      <section className="section-padding bg-cream text-ink border-t border-ink/10">
        <div className="page-container space-y-8">
          <div className="space-y-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-accent">Videos</p>
            <h2 className="heading-2">Broadcast index</h2>
          </div>
          <p className="font-sans text-base text-warm leading-relaxed max-w-2xl">
            Video perspectives are forthcoming. The archive will open here once verified
            recordings are published.
          </p>
          <Link
            href="/videos"
            className="inline-block font-mono text-[11px] uppercase tracking-[0.22em] text-warm hover:text-ink"
          >
            Video Hub →
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding bg-cream text-ink border-t border-ink/10">
      <div className="page-container space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-accent">Videos</p>
            <h2 className="heading-2">Broadcast index</h2>
          </div>
          <Link
            href="/videos"
            className="font-mono text-[11px] uppercase tracking-[0.22em] text-warm hover:text-ink"
          >
            Full archive →
          </Link>
        </div>

        <ol>
          {featuredVideos.map((video, idx) => (
            <li key={video.id} className="border-t border-ink/15 last:border-b">
              <Link
                href={`/videos/${video.slug}`}
                className="group grid grid-cols-12 gap-4 py-8 items-baseline"
              >
                <span className="col-span-2 md:col-span-1 font-mono text-[11px] text-warm">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <div className="col-span-10 md:col-span-8 space-y-1">
                  <h3 className="font-display font-black uppercase tracking-tight text-xl sm:text-2xl text-ink group-hover:text-accent transition-colors leading-tight">
                    {video.title}
                  </h3>
                  <p className="font-sans text-sm text-warm leading-relaxed max-w-2xl">
                    {video.description}
                  </p>
                </div>
                <div className="hidden md:block md:col-span-3 text-right font-mono text-[11px] uppercase tracking-widest text-warm">
                  {video.category}
                  <span className="block mt-1">{video.duration}</span>
                </div>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
