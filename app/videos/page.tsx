import React from "react";
import Link from "next/link";
import { sampleVideos } from "@/data/content";
import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata({
  title: "Video Hub — Girish Lakhotya Media & Perspectives",
  description: "Watch Girish Lakhotya's video commentary, legal rights breakdowns, bail reform insights, and Bond Smart vision presentations.",
  canonical: "/videos",
});

export default function VideosPage() {
  if (sampleVideos.length === 0) {
    return (
      <div className="pt-28 pb-24 bg-cream text-ink min-h-screen">
        <div className="page-container space-y-16">
          <div className="space-y-4 max-w-3xl border-b border-ink/15 pb-10">
            <p className="font-mono text-[11px] uppercase tracking-widest text-accent">
              Videos
            </p>
            <h1 className="heading-hero">Video Hub.</h1>
            <p className="font-sans text-lg text-warm leading-relaxed max-w-2xl">
              Perspectives on bail bonds, citizen rights, and Bond Smart will be
              published here. New commentary is being prepared and will appear in
              this archive once verified recordings are ready.
            </p>
          </div>

          <div className="border-t border-ink/15 py-16 max-w-2xl space-y-6">
            <p className="font-sans text-base text-warm leading-relaxed">
              No episodes are listed yet. When Girish Lakhotya publishes verified
              video perspectives, they will be indexed on this page.
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
            Videos
          </p>
          <h1 className="heading-hero">Video Hub.</h1>
          <p className="font-sans text-lg text-warm leading-relaxed max-w-2xl">
            Thought leadership, statutory rights breakdowns, and perspectives on India&apos;s bail
            bonds ecosystem.
          </p>
        </div>

        <ol>
          {sampleVideos.map((video, idx) => (
            <li key={video.id} className="border-t border-ink/15 last:border-b">
              <Link
                href={`/videos/${video.slug}`}
                className="group grid grid-cols-12 gap-4 py-8 md:py-10 items-baseline"
              >
                <span className="col-span-2 md:col-span-1 font-mono text-[11px] text-warm">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <div className="col-span-8 md:col-span-8 space-y-2">
                  <h2 className="font-display font-black uppercase tracking-tight text-xl sm:text-2xl md:text-3xl text-ink group-hover:text-accent transition-colors leading-tight">
                    {video.title}
                  </h2>
                  <p className="font-sans text-sm text-warm leading-relaxed max-w-2xl">
                    {video.description}
                  </p>
                </div>
                <div className="col-span-2 md:col-span-3 text-right">
                  <span className="font-mono text-[11px] uppercase tracking-widest text-warm">
                    {video.publishedDate}
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
