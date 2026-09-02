"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { gsap, useGSAP } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/useReducedMotion";

type Reveal = "from-bottom" | "from-left" | "from-bottom-soft";

interface EditorialPhotographProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes: string;
  reveal: Reveal;
  fit?: "cover" | "contain";
  objectPosition?: string;
  className?: string;
  figureClassName?: string;
  parallax?: boolean;
}

export default function EditorialPhotograph({
  src,
  alt,
  width,
  height,
  sizes,
  reveal,
  fit = "cover",
  objectPosition = "50% 20%",
  className = "",
  figureClassName = "",
  parallax = false,
}: EditorialPhotographProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useGSAP(
    () => {
      if (reduced || !frameRef.current || !mediaRef.current) return;

      const clipFrom =
        reveal === "from-left" ? "inset(0 100% 0 0)" : "inset(100% 0 0 0)";
      const startScale = reveal === "from-bottom-soft" ? 1.02 : parallax ? 1.06 : 1.04;
      const startY = reveal === "from-left" || reveal === "from-bottom-soft" ? 0 : 6;

      gsap.set(frameRef.current, { clipPath: clipFrom });
      gsap.set(mediaRef.current, { scale: startScale, yPercent: startY });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: frameRef.current,
          start: "top 82%",
          end: "top 28%",
          scrub: 0.7,
        },
      });

      tl.to(frameRef.current, { clipPath: "inset(0% 0% 0% 0%)", ease: "none" }, 0).to(
        mediaRef.current,
        { scale: parallax ? 1.04 : 1, yPercent: 0, ease: "none" },
        0
      );

      if (parallax && reveal !== "from-bottom-soft") {
        gsap.to(mediaRef.current, {
          yPercent: -5,
          ease: "none",
          scrollTrigger: {
            trigger: frameRef.current,
            start: "top 28%",
            end: "bottom top",
            scrub: 0.9,
          },
        });
      }
    },
    { scope: frameRef, dependencies: [reduced, reveal, parallax] }
  );

  return (
    <figure className={figureClassName}>
      <div ref={frameRef} className={`relative overflow-hidden bg-cream ${className}`}>
        <div ref={mediaRef} className="relative h-full w-full will-change-transform">
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            sizes={sizes}
            className={
              fit === "contain"
                ? "h-full w-full object-contain"
                : "h-full w-full object-cover"
            }
            style={fit === "cover" ? { objectPosition } : undefined}
          />
        </div>
      </div>
    </figure>
  );
}
