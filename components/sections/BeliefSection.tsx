import React from "react";
import { founderProfile } from "@/data/content";

export default function BeliefSection() {
  const beliefs = [
    { kicker: "01", quote: founderProfile.philosophy[0] },
    { kicker: "02", quote: founderProfile.philosophy[1] },
    { kicker: "03", quote: founderProfile.philosophy[2] },
    { kicker: "04", quote: founderProfile.philosophy[3] },
  ];

  return (
    <section id="belief" className="section-padding bg-cream text-ink border-t border-ink/10">
      <div className="page-container space-y-16">
        <div className="max-w-3xl space-y-4">
          <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-accent">Belief</p>
          <h2 className="heading-1">
            What Girish <span className="serif-accent normal-case font-normal">believes.</span>
          </h2>
        </div>

        <div>
          {beliefs.map((belief, idx) => (
            <blockquote
              key={idx}
              className="py-10 md:py-14 border-t border-ink/15 last:border-b"
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-warm mb-5">
                {belief.kicker}
              </p>
              <p className="font-serif text-2xl sm:text-3xl md:text-5xl leading-[1.15] text-ink max-w-5xl">
                {belief.quote}
              </p>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
