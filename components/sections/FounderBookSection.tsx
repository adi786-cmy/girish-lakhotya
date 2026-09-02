"use client";

import React, { useRef } from "react";
import EditorialPhotograph from "@/components/shared/EditorialPhotograph";
import { founderProfile } from "@/data/content";
import { gsap, useGSAP } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/useReducedMotion";

export default function FounderBookSection() {
  const textRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useGSAP(
    () => {
      if (reduced || !textRef.current) return;
      gsap.fromTo(
        textRef.current,
        { y: 32, opacity: 0.15 },
        {
          y: 0,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 88%",
            end: "top 58%",
            scrub: 0.6,
          },
        }
      );
    },
    { dependencies: [reduced] }
  );

  return (
    <section className="bg-cream text-ink section-padding border-t border-ink/10">
      <div className="page-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div ref={textRef} className="lg:col-span-5 space-y-5 order-2 lg:order-1">
            <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-accent">
              Founder
            </p>
            <h2 className="heading-2">{founderProfile.name}</h2>
            <p className="font-serif text-xl sm:text-2xl leading-relaxed text-ink max-w-xl">
              {founderProfile.philosophy[0]}
            </p>
            <p className="font-sans text-base sm:text-lg text-warm leading-relaxed max-w-xl">
              {founderProfile.philosophy[2]}
            </p>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2">
            <EditorialPhotograph
              src="/images/girish/girish-book.jpg"
              alt="Girish Lakhotya, Founder and Chairman of Prachay Group, with a book"
              width={1206}
              height={1204}
              sizes="(max-width: 1024px) 100vw, 58vw"
              reveal="from-bottom"
              fit="contain"
              figureClassName="w-full"
              className="w-full aspect-square"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
