import React from "react";
import Link from "next/link";
import { founderProfile } from "@/data/content";

const chapters = [
  {
    id: "person",
    kicker: "01",
    label: "THE PERSON",
    title: founderProfile.name,
    body: founderProfile.bioSummary,
  },
  {
    id: "work",
    kicker: "02",
    label: "THE WORK",
    title: founderProfile.prachayGroup.title,
    body: founderProfile.prachayGroup.description,
  },
  {
    id: "experience",
    kicker: "03",
    label: "THE EXPERIENCE",
    title: founderProfile.prachayFoundation.title,
    body: founderProfile.prachayFoundation.description,
  },
  {
    id: "perspective",
    kicker: "04",
    label: "THE PERSPECTIVE",
    title: "Transparency, trust, practical guidance.",
    body: founderProfile.philosophy[1] + " " + founderProfile.philosophy[2],
  },
  {
    id: "vision",
    kicker: "05",
    label: "THE VISION",
    title: "Bond Smart",
    body: founderProfile.visionStatement,
  },
];

export default function FounderScrollSection() {
  return (
    <section id="person" className="bg-cream text-ink section-padding border-t border-ink/10">
      <div className="page-container space-y-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-accent">
          Founder
        </p>
        <h2 className="heading-1 max-w-5xl">
          The person. <span className="serif-accent normal-case font-normal">The work.</span>
        </h2>
      </div>

      <div className="page-container mt-16 md:mt-24">
        {chapters.map((ch, i) => (
          <article
            key={ch.id}
            id={ch.id}
            className={`grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 py-12 md:py-16 ${
              i < chapters.length - 1 ? "border-b border-ink/15" : ""
            }`}
          >
            <div className="md:col-span-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-warm">
                {ch.kicker} — {ch.label}
              </p>
            </div>
            <div className="md:col-span-8 space-y-4">
              <h3 className="font-display font-black uppercase tracking-tight text-3xl sm:text-4xl md:text-5xl leading-[0.95]">
                {ch.title}
              </h3>
              <p className="font-sans text-base sm:text-lg text-warm leading-relaxed max-w-2xl">
                {ch.body}
              </p>
            </div>
          </article>
        ))}

        <div className="pt-12">
          <Link
            href="/about"
            className="inline-flex items-center justify-center rounded-full bg-ink text-cream text-xs tracking-widest uppercase px-8 py-3"
          >
            Biography
          </Link>
        </div>
      </div>
    </section>
  );
}
