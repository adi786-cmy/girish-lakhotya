"use client";

import React from "react";
import Link from "next/link";
import { bondSmartData } from "@/data/content";
import { trackEvent } from "@/lib/analytics";

export default function BondSmartLaunchSection() {
  const handleCtaClick = (label: string) => {
    trackEvent({
      eventName: "bond_smart_cta_click",
      location: "BondSmartLaunchSection",
      label,
    });
  };

  return (
    <section id="bond-smart-intro" className="section-padding bg-cream text-ink border-t border-ink/10">
      <div className="page-container space-y-16">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-8 border-b border-ink/15">
          <div className="space-y-3 max-w-2xl">
            <p className="font-mono text-[11px] uppercase tracking-widest text-tech">
              Bond Smart
            </p>
            <h2 className="heading-1">
              Meet Bond Smart.{" "}
              <span className="serif-accent normal-case font-normal">A smarter way forward.</span>
            </h2>
          </div>
          <p className="font-sans text-base text-warm max-w-md leading-relaxed">
            {bondSmartData.subheadline}
          </p>
        </div>

        <div className="border-t border-ink/15">
          <article className="grid grid-cols-1 md:grid-cols-12 gap-6 py-10 border-b border-ink/15">
            <p className="md:col-span-3 font-mono text-[11px] uppercase tracking-widest text-accent">
              01 — Problem
            </p>
            <div className="md:col-span-9 space-y-2">
              <h3 className="font-display font-black uppercase tracking-tight text-2xl sm:text-3xl">
                The traditional challenge
              </h3>
              <p className="font-sans text-sm sm:text-base text-warm leading-relaxed max-w-2xl">
                {bondSmartData.problemStatement}
              </p>
            </div>
          </article>
          <article className="grid grid-cols-1 md:grid-cols-12 gap-6 py-10 border-b border-ink/15">
            <p className="md:col-span-3 font-mono text-[11px] uppercase tracking-widest text-accent">
              02 — Vision
            </p>
            <div className="md:col-span-9 space-y-2">
              <h3 className="font-display font-black uppercase tracking-tight text-2xl sm:text-3xl">
                The Bond Smart approach
              </h3>
              <p className="font-sans text-sm sm:text-base text-warm leading-relaxed max-w-2xl">
                {bondSmartData.visionText}
              </p>
            </div>
          </article>
        </div>

        <ol>
          {bondSmartData.features.map((feature, idx) => (
            <li
              key={feature.id}
              className="grid grid-cols-1 md:grid-cols-12 gap-4 py-8 border-t border-ink/15 last:border-b"
            >
              <span className="md:col-span-1 font-mono text-[11px] text-warm">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <div className="md:col-span-8 space-y-2">
                <h3 className="font-display font-black uppercase tracking-tight text-xl sm:text-2xl">
                  {feature.title}
                </h3>
                <p className="font-sans text-sm text-warm leading-relaxed max-w-xl">
                  {feature.description}
                </p>
              </div>
              <div className="md:col-span-3 md:text-right font-mono text-[11px] uppercase tracking-widest text-warm">
                {feature.status === "active" ? "Active" : "Planned"}
              </div>
            </li>
          ))}
        </ol>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pt-4">
          <div className="max-w-xl space-y-2">
            <h3 className="font-display font-black uppercase tracking-tight text-2xl sm:text-3xl">
              Explore Bond Smart
            </h3>
            <p className="font-sans text-sm text-warm">{bondSmartData.overview}</p>
          </div>
          <div className="flex flex-wrap gap-6 font-mono text-[11px] uppercase tracking-widest">
            <Link
              href="/bond-smart"
              onClick={() => handleCtaClick("Explore Bond Smart Button")}
              className="text-ink hover:text-accent"
            >
              Open product →
            </Link>
            <Link
              href={bondSmartData.ctaUrl}
              onClick={() => handleCtaClick("Join Waitlist Button")}
              className="text-warm hover:text-ink"
            >
              Join waitlist →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
