"use client";

import React from "react";

export default function BrandMomentSection() {
  return (
    <section className="relative min-h-screen py-32 flex flex-col justify-center bg-ink text-cream overflow-hidden">
      <div className="page-container relative z-10 space-y-10">
        <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-cream/50">
          The Bondsman of India
        </p>
        <h2 className="font-display font-black uppercase tracking-tighter leading-[0.82] text-section-xl">
          <span className="block" style={{ color: "#E8E4DE" }}>THE</span>
          <span className="block" style={{ color: "#E8E4DE" }}>BONDSMAN</span>
          <span className="block serif-accent normal-case font-normal text-accent-light">of</span>
          <span className="block" style={{ color: "#E8E4DE" }}>INDIA</span>
        </h2>
        <p className="max-w-xl font-sans text-base sm:text-lg text-cream/60 leading-relaxed">
          Bridging legal rights, clear statutory guidance, and software innovation for India&apos;s
          bail ecosystem.
        </p>
      </div>
    </section>
  );
}
