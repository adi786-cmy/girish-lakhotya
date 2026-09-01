import React from "react";
import Link from "next/link";
import { bondSmartData } from "@/data/content";

export default function BondSmartTransitionSection() {
  return (
    <section id="bond-smart" className="section-padding bg-ink text-cream relative">
      <div className="page-container space-y-16 relative z-10">
        <div className="max-w-3xl space-y-5">
          <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-tech">Bond Smart</p>
          <h2 className="font-display font-black uppercase tracking-tight text-section-xl leading-none text-cream">
            The vision for <span className="serif-accent normal-case font-normal text-tech">Bond Smart.</span>
          </h2>
          <p className="font-sans text-lg text-cream/65 leading-relaxed">
            {bondSmartData.subheadline}
          </p>
        </div>

        <ol className="border-t border-cream/15">
          {bondSmartData.features.map((feature, idx) => (
            <li
              key={feature.id}
              id={idx === 0 ? "features" : undefined}
              className="grid grid-cols-1 md:grid-cols-12 gap-4 py-8 md:py-10 border-b border-cream/15"
            >
              <span className="md:col-span-1 font-mono text-[11px] text-tech">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <div className="md:col-span-7 space-y-2">
                <h3 className="font-display font-black uppercase tracking-tight text-2xl text-cream">
                  {feature.title}
                </h3>
                <p className="font-sans text-sm text-cream/60 leading-relaxed max-w-xl">
                  {feature.description}
                </p>
              </div>
              <div className="md:col-span-4 md:text-right font-mono text-[11px] uppercase tracking-widest text-tech/80">
                {feature.status === "active" ? "Active" : "Roadmap"}
              </div>
            </li>
          ))}
        </ol>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pt-4">
          <div className="max-w-xl space-y-2">
            <h3 className="font-display font-black uppercase tracking-tight text-2xl sm:text-3xl">
              Explore the architecture
            </h3>
            <p className="font-sans text-sm text-cream/60">
              {bondSmartData.overview}
            </p>
          </div>
          <Link
            href="/bond-smart"
            className="inline-flex items-center justify-center rounded-full border border-cream text-cream text-xs tracking-widest uppercase px-8 py-3"
          >
            Bond Smart
          </Link>
        </div>
      </div>
    </section>
  );
}
