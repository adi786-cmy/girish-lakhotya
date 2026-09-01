"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { founderProfile } from "@/data/content";

export default function AuthorityIntroSection() {
  return (
    <section id="person" className="section-padding bg-cream text-ink border-t border-ink/10">
      <div className="page-container space-y-16">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-8 border-b border-ink/15">
          <div className="space-y-3 max-w-2xl">
            <p className="font-mono text-[11px] uppercase tracking-widest text-accent">
              The person
            </p>
            <h2 className="heading-1">
              Who is Girish Lakhotya?{" "}
              <span className="serif-accent normal-case font-normal">
                15+ years in finance and legal access.
              </span>
            </h2>
          </div>
          <p className="font-sans text-base text-warm max-w-md leading-relaxed">
            Founder of Prachay Group and head of Prachay Foundation. Known as &ldquo;The Bondsman of
            India&rdquo;, he is extending that work to legal bond accessibility with Bond Smart.
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
              />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-6">
              <h3 className="font-display font-black uppercase tracking-tight text-3xl sm:text-4xl leading-none">
                15+ Years Guiding Entrepreneurs &amp; Building Access
              </h3>
              <p className="font-sans text-base sm:text-lg text-warm leading-relaxed">
                {founderProfile.bioSummary}
              </p>
            </div>

            <ol>
              {founderProfile.threePillars.map((pillar, idx) => (
                <li
                  key={pillar.title}
                  className="grid grid-cols-1 md:grid-cols-12 gap-4 py-6 border-t border-ink/15 last:border-b"
                >
                  <span className="md:col-span-1 font-mono text-[11px] text-warm">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <div className="md:col-span-11 space-y-1">
                    <h4 className="font-display font-black uppercase tracking-tight text-xl">
                      {pillar.title}
                    </h4>
                    <p className="font-sans text-sm text-warm leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <Link
              href="/about"
              className="inline-block font-mono text-[11px] uppercase tracking-widest text-ink hover:text-accent"
            >
              Read the full story →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
