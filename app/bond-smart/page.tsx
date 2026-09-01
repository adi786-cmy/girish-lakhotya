import React from "react";
import Link from "next/link";
import { bondSmartData } from "@/data/content";
import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata({
  title: "Bond Smart — The Digital Future of Bail Bonds in India",
  description: "Bond Smart is the digital platform initiative designed by Girish Lakhotya to make India's bail bond process clear, structured, and fast.",
  canonical: "/bond-smart",
});

function statusLabel(status: string) {
  if (status === "active") return "ACTIVE";
  if (status === "roadmap") return "PLANNED";
  return "NOT YET AVAILABLE";
}

export default function BondSmartPage() {
  return (
    <div className="pt-28 pb-24 bg-cream text-ink min-h-screen">
      <div className="page-container space-y-20">
        <div className="max-w-4xl space-y-6 border-b border-ink/15 pb-12">
          <p className="font-mono text-[11px] uppercase tracking-widest text-accent">
            Bond Smart
          </p>
          <h1 className="heading-hero">
            BOND SMART.
            <br />
            A smarter way forward.
          </h1>
          <p className="font-sans text-lg sm:text-xl text-warm leading-relaxed">
            {bondSmartData.overview}
          </p>
          <p className="font-sans text-base text-warm leading-relaxed max-w-3xl">
            {bondSmartData.subheadline}
          </p>
          <div className="pt-2">
            <Link
              href="/contact?subject=BondSmartEarlyAccess"
              className="font-mono text-[11px] uppercase tracking-widest text-ink hover:text-accent"
            >
              Join waitlist →
            </Link>
          </div>
        </div>

        <div className="space-y-0 border-t border-ink/15">
          <article className="grid grid-cols-1 md:grid-cols-12 gap-6 py-12 border-b border-ink/15">
            <p className="md:col-span-3 font-mono text-[11px] uppercase tracking-widest text-accent">
              01 — Problem
            </p>
            <div className="md:col-span-9 space-y-3">
              <h2 className="font-display font-black uppercase tracking-tight text-3xl sm:text-4xl leading-none">
                The traditional challenge
              </h2>
              <p className="font-sans text-base sm:text-lg text-warm leading-relaxed max-w-2xl">
                {bondSmartData.problemStatement}
              </p>
            </div>
          </article>

          <article className="grid grid-cols-1 md:grid-cols-12 gap-6 py-12 border-b border-ink/15">
            <p className="md:col-span-3 font-mono text-[11px] uppercase tracking-widest text-accent">
              02 — Vision
            </p>
            <div className="md:col-span-9 space-y-3">
              <h2 className="font-display font-black uppercase tracking-tight text-3xl sm:text-4xl leading-none">
                The Bond Smart approach
              </h2>
              <p className="font-sans text-base sm:text-lg text-warm leading-relaxed max-w-2xl">
                {bondSmartData.visionText}
              </p>
            </div>
          </article>
        </div>

        <div id="features" className="space-y-8">
          <div className="space-y-2">
            <p className="font-mono text-[11px] uppercase tracking-widest text-accent">
              Capabilities
            </p>
            <h2 className="heading-2">What it does</h2>
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
                  <h3 className="font-display font-black uppercase tracking-tight text-xl sm:text-2xl leading-tight">
                    {feature.title}
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-warm leading-relaxed max-w-2xl">
                    {feature.description}
                  </p>
                </div>
                <div className="md:col-span-3 md:text-right font-mono text-[11px] uppercase tracking-widest text-warm">
                  {statusLabel(feature.status)}
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div id="faq" className="space-y-8">
          <div className="space-y-2">
            <p className="font-mono text-[11px] uppercase tracking-widest text-accent">
              Questions
            </p>
            <h2 className="heading-2">Understanding Bond Smart</h2>
          </div>

          <ol className="max-w-4xl">
            {bondSmartData.faq.map((item, idx) => (
              <li
                key={item.question}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 py-8 border-t border-ink/15 last:border-b"
              >
                <span className="md:col-span-1 font-mono text-[11px] text-warm">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <div className="md:col-span-11 space-y-2">
                  <h3 className="font-display font-black uppercase tracking-tight text-xl sm:text-2xl leading-tight">
                    {item.question}
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-warm leading-relaxed max-w-2xl">
                    {item.answer}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="border-t border-ink/15 pt-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <p className="font-mono text-[11px] uppercase tracking-widest text-accent">
              Early access
            </p>
            <h2 className="font-display font-black uppercase tracking-tight text-3xl sm:text-4xl leading-none">
              Join the waitlist
            </h2>
            <p className="font-sans text-sm sm:text-base text-warm leading-relaxed">
              Updates and early release announcements from Girish Lakhotya.
            </p>
          </div>
          <Link
            href="/contact?subject=BondSmartWaitlist"
            className="font-mono text-[11px] uppercase tracking-widest text-ink hover:text-accent"
          >
            Register interest →
          </Link>
        </div>
      </div>
    </div>
  );
}
