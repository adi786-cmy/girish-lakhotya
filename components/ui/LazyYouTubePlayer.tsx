"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

interface LazyYouTubePlayerProps {
  youtubeId: string;
  title: string;
  thumbnailUrl?: string;
  duration?: string;
  className?: string;
}

export default function LazyYouTubePlayer({
  youtubeId,
  title,
  thumbnailUrl,
  duration,
  className = "",
}: LazyYouTubePlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const maxresThumbnail = `https://i.ytimg.com/vi/${youtubeId}/maxresdefault.jpg`;
  const hqThumbnail = `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`;
  const [imgSrc, setImgSrc] = useState(thumbnailUrl || maxresThumbnail);

  const handlePlay = () => {
    setIsPlaying(true);
    trackEvent({
      eventName: "video_play",
      location: "LazyYouTubePlayer",
      label: title,
      metadata: { youtubeId },
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handlePlay();
    }
  };

  if (isPlaying) {
    return (
      <div className={`relative w-full aspect-video bg-obsidian-950 overflow-hidden border border-ink/15 rounded-lg ${className}`}>
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1`}
          title={title}
          className="absolute inset-0 w-full h-full border-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label={`Play video: ${title}`}
      onClick={handlePlay}
      onKeyDown={handleKeyDown}
      className={`group relative w-full aspect-video bg-obsidian-950 overflow-hidden border border-ink/15 rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent ${className}`}
    >
      <Image
        src={imgSrc}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1100px"
        className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
        onError={() => {
          if (imgSrc !== hqThumbnail) {
            setImgSrc(hqThumbnail);
          }
        }}
      />
      <div className="absolute inset-0 bg-ink/30 group-hover:bg-ink/10 transition-colors" />

      {/* Editorial Play Button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-cream text-ink flex items-center justify-center shadow-lg group-hover:bg-accent group-hover:text-cream transition-all duration-300 transform group-hover:scale-110">
          <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current translate-x-0.5" />
        </div>
      </div>

      {/* Video Duration Badge */}
      {duration ? (
        <div className="absolute bottom-4 right-4 bg-ink/85 text-cream font-mono text-[11px] px-2.5 py-1 uppercase tracking-widest rounded border border-cream/10">
          {duration}
        </div>
      ) : null}
    </div>
  );
}
