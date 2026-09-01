import React from "react";
import Image from "next/image";
import Link from "next/link";
import { founderProfile } from "@/data/content";
import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata({
  title: "About Girish Lakhotya — The Bondsman of India",
  description: "Learn about Girish Lakhotya's 15+ years of experience in financial leadership, Prachay Group, and his vision for Bond Smart.",
  canonical: "/about",
});

export default function AboutPage() {
  return (
    <div className="pt-28 pb-24 bg-cream text-ink min-h-screen">
      <div className="page-container space-y-20">
        <div className="space-y-4 max-w-4xl border-b border-ink/15 pb-10">
          <p className="font-mono text-[11px] uppercase tracking-widest text-accent">
            Biography
          </p>
          <h1 className="heading-hero">ABOUT GIRISH LAKHOTYA.</h1>
          <p className="font-serif text-2xl sm:text-3xl italic text-ink">
            The Bondsman of India
          </p>
          <p className="font-sans text-lg text-warm leading-relaxed max-w-3xl">
            Financial leader, founder of Prachay Group, head of Prachay Foundation, and pioneer
            building Bond Smart to simplify bail bond access across India.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/images/girish/banner2.png"
                alt="Girish Lakhotya"
                fill
                className="object-cover"
                style={{ objectPosition: "22% 8%" }}
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-10">
            <h2 className="heading-1">
              15+ Years Guiding Business Growth &amp; Legal Access
            </h2>

            <div
              className="font-sans text-base sm:text-lg text-warm leading-relaxed space-y-6"
              dangerouslySetInnerHTML={{ __html: founderProfile.fullBioHtml }}
            />

            <div className="border-t border-ink/15">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 py-8 border-b border-ink/15">
                <span className="md:col-span-3 font-mono text-[11px] uppercase tracking-widest text-accent">
                  Prachay Group
                </span>
                <div className="md:col-span-9 space-y-2">
                  <h3 className="font-display font-black uppercase tracking-tight text-xl">
                    CEO &amp; Founder
                  </h3>
                  <p className="font-sans text-sm text-warm leading-relaxed">
                    {founderProfile.prachayGroup.description}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 py-8 border-b border-ink/15">
                <span className="md:col-span-3 font-mono text-[11px] uppercase tracking-widest text-accent">
                  Prachay Foundation
                </span>
                <div className="md:col-span-9 space-y-2">
                  <h3 className="font-display font-black uppercase tracking-tight text-xl">
                    Foundation Chair
                  </h3>
                  <p className="font-sans text-sm text-warm leading-relaxed">
                    {founderProfile.prachayFoundation.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="space-y-2">
            <p className="font-mono text-[11px] uppercase tracking-widest text-accent">
              Methodology
            </p>
            <h2 className="heading-2">Identify. Understand. Articulate.</h2>
          </div>

          <ol>
            {founderProfile.threePillars.map((pillar, idx) => (
              <li
                key={pillar.title}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 py-8 border-t border-ink/15 last:border-b"
              >
                <span className="md:col-span-1 font-mono text-[11px] text-warm">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <div className="md:col-span-11 space-y-2">
                  <h3 className="font-display font-black uppercase tracking-tight text-2xl sm:text-3xl">
                    {pillar.title}
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-warm leading-relaxed max-w-2xl">
                    {pillar.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="border-t border-ink/15 pt-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <p className="font-mono text-[11px] uppercase tracking-widest text-accent">
              Bond Smart
            </p>
            <h3 className="font-display font-black uppercase tracking-tight text-3xl sm:text-4xl leading-none">
              The vision for Bond Smart
            </h3>
            <p className="font-sans text-sm sm:text-base text-warm leading-relaxed">
              {founderProfile.visionStatement}
            </p>
          </div>
          <Link
            href="/bond-smart"
            className="font-mono text-[11px] uppercase tracking-widest text-ink hover:text-accent"
          >
            Explore Bond Smart →
          </Link>
        </div>
      </div>
    </div>
  );
}
