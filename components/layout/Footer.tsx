import React from "react";
import Link from "next/link";
import { founderProfile } from "@/data/content";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-cream text-ink border-t border-ink/15 pt-16 pb-12">
      <div className="page-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-ink/15">
          <div className="lg:col-span-2 space-y-5">
            <div>
              <h3 className="font-display text-2xl font-black uppercase tracking-tight text-ink">
                GIRISH LAKHOTYA
              </h3>
              <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-warm mt-1">
                The Bondsman of India
              </p>
            </div>
            <p className="font-sans text-sm text-warm leading-relaxed max-w-md">
              Establishing statutory clarity, transparency, and dignity in India&apos;s bail bonds
              space. Founder of Bond Smart.
            </p>
            <div className="flex items-center gap-5 pt-1 font-mono text-[11px] uppercase tracking-widest text-warm">
              <a href={founderProfile.socialLinks.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                YouTube
              </a>
              <a href={founderProfile.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                LinkedIn
              </a>
              <a href={founderProfile.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                X
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-mono text-[11px] uppercase tracking-widest text-ink">Navigate</h4>
            <ul className="space-y-2.5 font-sans text-sm text-warm">
              <li><Link href="/about" className="hover:text-ink">About Girish</Link></li>
              <li><Link href="/thoughts" className="hover:text-ink">Thoughts</Link></li>
              <li><Link href="/videos" className="hover:text-ink">Videos</Link></li>
              <li><Link href="/podcast" className="hover:text-ink">Podcast</Link></li>
              <li><Link href="/media" className="hover:text-ink">Media</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-mono text-[11px] uppercase tracking-widest text-ink">Bond Smart</h4>
            <ul className="space-y-2.5 font-sans text-sm text-warm">
              <li><Link href="/bond-smart" className="hover:text-ink">Overview</Link></li>
              <li><Link href="/bond-smart#features" className="hover:text-ink">Product pillars</Link></li>
              <li><Link href="/bond-smart#faq" className="hover:text-ink">FAQ</Link></li>
              <li><Link href="/contact?subject=BondSmartWaitlist" className="hover:text-ink">Early access</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-mono text-[11px] uppercase tracking-widest text-ink">Connect</h4>
            <p className="font-sans text-sm text-warm">
              Speaking, press, or Bond Smart partnership.
            </p>
            <Link href="/contact" className="inline-block font-mono text-[11px] uppercase tracking-widest text-accent hover:text-ink">
              Write →
            </Link>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-warm gap-4">
          <p>© {currentYear} Girish Lakhotya. All rights reserved.</p>
          <div className="flex items-center gap-4 font-mono uppercase tracking-widest text-[10px]">
            <span>Girish Lakhotya</span>
            <span>The Bondsman of India</span>
            <Link href="/bond-smart" className="hover:text-ink">Bond Smart</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
