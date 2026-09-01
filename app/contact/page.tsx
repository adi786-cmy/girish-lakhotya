import React from "react";
import { founderProfile } from "@/data/content";
import { generatePageMetadata } from "@/lib/seo";
import ContactCTASection from "@/components/sections/ContactCTASection";

export const metadata = generatePageMetadata({
  title: "Contact Girish Lakhotya",
  description: "Get in touch with Girish Lakhotya for speaking, media interviews, thought leadership, or Bond Smart platform inquiries.",
  canonical: "/contact",
});

const social = [
  { label: "YouTube", href: founderProfile.socialLinks.youtube },
  { label: "LinkedIn", href: founderProfile.socialLinks.linkedin },
  { label: "X", href: founderProfile.socialLinks.twitter },
  { label: "Instagram", href: founderProfile.socialLinks.instagram },
  { label: "Facebook", href: founderProfile.socialLinks.facebook },
  { label: "Calendly", href: founderProfile.socialLinks.calendly },
  { label: "Website", href: founderProfile.socialLinks.website },
];

export default function ContactPage() {
  return (
    <div className="pt-28 pb-24 bg-cream text-ink min-h-screen">
      <div className="page-container space-y-16">
        <div className="space-y-6 max-w-4xl">
          <p className="font-mono text-[11px] uppercase tracking-widest text-accent">
            Contact
          </p>
          <h1 className="heading-hero">Write to Girish.</h1>
          <p className="font-sans text-lg sm:text-xl text-warm leading-relaxed max-w-2xl">
            Speaking, press, or Bond Smart. Reach Girish directly — no switchboard, no desk.
          </p>
        </div>

        <ol className="max-w-3xl">
          {social.map((item, idx) => (
            <li key={item.label} className="border-t border-ink/15 last:border-b">
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid grid-cols-12 gap-4 py-6 items-baseline"
              >
                <span className="col-span-2 md:col-span-1 font-mono text-[11px] text-warm">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span className="col-span-8 font-display font-black uppercase tracking-tight text-2xl sm:text-3xl text-ink group-hover:text-accent transition-colors">
                  {item.label}
                </span>
                <span className="col-span-2 text-right font-mono text-[11px] uppercase tracking-widest text-ink group-hover:text-accent">
                  →
                </span>
              </a>
            </li>
          ))}
        </ol>
      </div>

      <ContactCTASection />
    </div>
  );
}
