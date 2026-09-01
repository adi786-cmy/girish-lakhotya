import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { sampleVideos } from "@/data/content";
import EditorialCover from "@/components/ui/EditorialCover";
import LazyYouTubePlayer from "@/components/ui/LazyYouTubePlayer";
import { generatePageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return sampleVideos.map((video) => ({
    slug: video.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const video = sampleVideos.find((v) => v.slug === params.slug);
  if (!video) return {};

  return generatePageMetadata({
    title: `${video.title} — Girish Lakhotya Video`,
    description: video.description,
    canonical: `/videos/${video.slug}`,
    type: "article",
  });
}

export default function VideoDetailPage({ params }: { params: { slug: string } }) {
  const video = sampleVideos.find((v) => v.slug === params.slug);

  if (!video) {
    notFound();
  }

  const videoIndex = sampleVideos.findIndex((v) => v.slug === video.slug) + 1;
  const watchUrl = video.youtubeId
    ? `https://www.youtube.com/watch?v=${video.youtubeId}`
    : undefined;

  return (
    <div className="pt-28 pb-24 bg-cream text-ink min-h-screen">
      <div className="page-container max-w-4xl space-y-12">
        <Link
          href="/videos"
          className="inline-block font-mono text-[11px] uppercase tracking-widest text-warm hover:text-ink"
        >
          ← Back to videos
        </Link>

        <div className="space-y-6 border-b border-ink/15 pb-10">
          <p className="font-mono text-[11px] uppercase tracking-widest text-accent">
            {video.category}
          </p>
          <h1 className="heading-1">{video.title}</h1>
          <p className="font-mono text-[11px] uppercase tracking-widest text-warm">
            {video.publishedDate} · {video.duration}
          </p>
        </div>

        {video.youtubeId ? (
          <LazyYouTubePlayer
            youtubeId={video.youtubeId}
            title={video.title}
            thumbnailUrl={video.thumbnailUrl}
            duration={video.duration}
          />
        ) : (
          <EditorialCover
            kicker={video.category}
            title={video.title}
            index={videoIndex}
            meta={video.publishedDate}
          />
        )}

        <p className="font-sans text-base sm:text-lg text-warm leading-relaxed">
          {video.description}
        </p>

        {watchUrl ? (
          <p>
            <a
              href={watchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-ink hover:text-accent border-b border-ink/30 pb-0.5"
            >
              Watch on YouTube Channel →
            </a>
          </p>
        ) : null}

        <div className="border-t border-ink/15 pt-10 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="space-y-2">
            <p className="font-mono text-[11px] uppercase tracking-widest text-accent">
              Bond Smart
            </p>
            <p className="font-sans text-sm text-warm max-w-md">
              How these insights become a platform for legal bond access.
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
