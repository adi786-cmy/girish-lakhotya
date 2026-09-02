"use client";

import React from "react";
import EditorialPhotograph from "@/components/shared/EditorialPhotograph";

export default function AboutFemmiconSection() {
  return (
    <section className="space-y-6">
      <p className="font-mono text-[11px] uppercase tracking-widest text-accent">
        Prachay Group
      </p>
      <EditorialPhotograph
        src="/images/girish/girish-femmicon.jpg"
        alt="Girish Lakhotya, speaker at FEMMICon 2026"
        width={1018}
        height={1280}
        sizes="(max-width: 768px) 100vw, min(72vw, 896px)"
        reveal="from-bottom-soft"
        fit="contain"
        figureClassName="w-full max-w-4xl mx-auto"
        className="w-full aspect-[1018/1280]"
      />
    </section>
  );
}
