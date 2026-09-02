"use client";

import React, { useRef } from "react";
import EditorialPhotograph from "@/components/shared/EditorialPhotograph";
import { founderProfile } from "@/data/content";
import { gsap, useGSAP } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/useReducedMotion";

export default function FounderEventSection() {
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          <div className="lg:col-span-7">
            <EditorialPhotograph
              src="/images/girish/girish-event.jpg"
              alt="Girish Lakhotya at a professional event"
              width={1206}
              height={1265}
              sizes="(max-width: 1024px) 100vw, 58vw"
              reveal="from-left"
              fit="cover"
              objectPosition="50% 18%"
              parallax
              figureClassName="w-full"
              className="w-full aspect-[4/5] sm:aspect-[5/6]"
            />
          </div>

          <div ref={textRef} className="lg:col-span-5 space-y-5 pb-2">
            <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-accent">
              The work
            </p>
            <h2 className="heading-2">{founderProfile.prachayGroup.title}</h2>
            <p className="font-sans text-base sm:text-lg text-warm leading-relaxed">
              {founderProfile.prachayGroup.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
