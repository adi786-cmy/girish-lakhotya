import React from "react";
import Link from "next/link";

const pathways = [
  {
    n: "01",
    title: "Thoughts & notes",
    description: "Essays on bail bond procedures, citizen rights, and progressive financing.",
    href: "/thoughts",
    label: "Read",
  },
  {
    n: "02",
    title: "Video perspectives",
    description: "Commentary on how bail bonds work and why Bond Smart is being built.",
    href: "/videos",
    label: "Watch",
  },
  {
    n: "03",
    title: "Podcast series",
    description: "Conversations on bail bond access and legal reform in India.",
    href: "/podcast",
    label: "Listen",
  },
  {
    n: "04",
    title: "Bond Smart",
    description: "The software platform being built to streamline legal bond access.",
    href: "/bond-smart",
    label: "Explore",
  },
];

export default function StartHereSection() {
  return (
    <section id="start-here" className="section-padding bg-cream text-ink border-t border-ink/10">
      <div className="page-container space-y-12">
        <div className="max-w-3xl space-y-4">
          <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-accent">Start here</p>
          <h2 className="heading-2">
            New here? <span className="serif-accent normal-case font-normal">Begin.</span>
          </h2>
          <p className="font-sans text-base text-warm leading-relaxed">
            Welcome to Girish Lakhotya&apos;s platform. Choose a pathway — background, thought
            leadership, or Bond Smart.
          </p>
        </div>

        <ol>
          {pathways.map((p) => (
            <li key={p.n} className="border-t border-ink/15 last:border-b">
              <Link
                href={p.href}
                className="group grid grid-cols-12 gap-4 py-8 items-baseline"
              >
                <span className="col-span-2 md:col-span-1 font-mono text-[11px] text-warm">{p.n}</span>
                <div className="col-span-8 md:col-span-8">
                  <h3 className="font-display font-black uppercase tracking-tight text-xl sm:text-2xl group-hover:text-accent transition-colors">
                    {p.title}
                  </h3>
                  <p className="font-sans text-sm text-warm mt-2 max-w-xl">{p.description}</p>
                </div>
                <span className="col-span-2 md:col-span-3 text-right font-mono text-[11px] uppercase tracking-widest text-warm group-hover:text-ink">
                  {p.label} →
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
