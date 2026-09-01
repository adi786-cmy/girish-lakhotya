import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="pt-28 pb-24 bg-cream text-ink min-h-screen flex items-center">
      <div className="page-container max-w-3xl space-y-8">
        <p className="font-mono text-[11px] uppercase tracking-widest text-accent">
          404
        </p>
        <h1 className="heading-hero">Wrong turn.</h1>
        <p className="font-sans text-lg text-warm leading-relaxed max-w-xl">
          The page you were seeking might have moved. Return home, or continue through the
          notebook and Bond Smart.
        </p>
        <div className="flex flex-wrap gap-8 pt-2 font-mono text-[11px] uppercase tracking-widest">
          <Link href="/" className="text-ink hover:text-accent">
            Home →
          </Link>
          <Link href="/thoughts" className="text-ink hover:text-accent">
            Thoughts →
          </Link>
          <Link href="/bond-smart" className="text-ink hover:text-accent">
            Bond Smart →
          </Link>
        </div>
      </div>
    </div>
  );
}
