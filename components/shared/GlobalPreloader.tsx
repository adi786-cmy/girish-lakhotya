"use client";

import React, { useEffect, useState } from "react";
import { useReducedMotion } from "@/lib/useReducedMotion";

const words = ["GIRISH LAKHOTYA", "THE BONDSMAN OF INDIA", "BOND SMART", "WELCOME"];

export default function GlobalPreloader() {
  const [index, setIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [exiting, setExiting] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    const finish = () => {
      (window as Window & { __preloaderDone?: boolean }).__preloaderDone = true;
      window.dispatchEvent(new Event("preloaderComplete"));
    };

    if (reduced) {
      setIsLoading(false);
      finish();
      return;
    }

    const wordInterval = setInterval(() => {
      setIndex((prev) => {
        if (prev < words.length - 1) return prev + 1;
        clearInterval(wordInterval);
        return prev;
      });
    }, 200);

    const exitTimer = setTimeout(() => {
      setExiting(true);
      finish();
    }, 1200);

    const unmountTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      clearInterval(wordInterval);
      clearTimeout(exitTimer);
      clearTimeout(unmountTimer);
    };
  }, [reduced]);

  if (reduced || !isLoading) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-cream text-ink flex flex-col items-center justify-center select-none overflow-hidden ${
        exiting ? "preloader-exit" : ""
      }`}
    >
      <div className="space-y-4 text-center px-4">
        <p
          key={index}
          className="preloader-word font-display text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight"
        >
          {words[index]}
        </p>
        <div className="w-32 h-px bg-ink/15 mx-auto overflow-hidden">
          <div className="preloader-line h-full bg-accent" />
        </div>
      </div>
    </div>
  );
}
