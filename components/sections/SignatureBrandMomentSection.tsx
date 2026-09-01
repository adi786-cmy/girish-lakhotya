"use client";

import React, { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/useReducedMotion";

const LINES = [
  { t: "THE", serif: false },
  { t: "BONDSMAN", serif: false },
  { t: "OF", serif: true },
  { t: "INDIA", serif: false },
];

export default function SignatureBrandMomentSection() {
  const pinRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useGSAP(
    () => {
      if (reduced || !pinRef.current || !stageRef.current) return;
      const lines = stageRef.current.querySelectorAll<HTMLElement>(".signature-line");

      gsap.set(lines, { yPercent: 40, opacity: 0.35 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pinRef.current,
          start: "top top",
          end: "+=220%",
          pin: true,
          scrub: 0.65,
          anticipatePin: 1,
        },
      });

      lines.forEach((line, i) => {
        tl.to(line, { yPercent: 0, opacity: 1, duration: 1, ease: "none" }, i * 0.55);
      });

      tl.to(lines, { opacity: 0.18, duration: 0.8, ease: "none" }, "+=0.2");
    },
    { scope: pinRef, dependencies: [reduced] }
  );

  return (
    <section className="relative bg-ink text-cream">
      <div ref={pinRef} className="min-h-[100dvh]">
        <div
          ref={stageRef}
          className="min-h-[100dvh] flex flex-col justify-center px-6 sm:px-10 md:px-16 select-none"
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-cream/50 mb-8">
            The Bondsman of India
          </p>
          <h2 className="font-display font-black uppercase tracking-tighter leading-[0.82]">
            {LINES.map((line) => (
              <span
                key={line.t}
                className={`signature-line block text-section-xl ${
                  line.serif ? "serif-accent normal-case font-normal text-accent-light" : ""
                }`}
                style={line.serif ? undefined : { color: "#E8E4DE" }}
              >
                {line.t}
              </span>
            ))}
          </h2>
          <p className="mt-10 max-w-xl font-sans text-base sm:text-lg text-cream/60 leading-relaxed">
            Bridging legal rights, clear statutory guidance, and software innovation for India&apos;s
            bail ecosystem.
          </p>
        </div>
      </div>
    </section>
  );
}
