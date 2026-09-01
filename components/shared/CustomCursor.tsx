"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";
import { usePathname } from "next/navigation";
import { useReducedMotion } from "@/lib/useReducedMotion";

export default function CustomCursor() {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorOutlineRef = useRef<HTMLDivElement>(null);
  const cursorTextRef = useRef<HTMLDivElement>(null);
  const [cursorText, setCursorText] = useState<string>("");
  const [enabled, setEnabled] = useState<boolean>(false);
  const pathname = usePathname();
  const reduced = useReducedMotion();

  useEffect(() => {
    const isTouch = typeof window !== "undefined" && ("ontouchstart" in window || navigator.maxTouchPoints > 0 || window.innerWidth < 768);
    if (isTouch || reduced) return;
    setEnabled(true);
  }, [reduced]);

  useEffect(() => {
    if (!enabled) return;
    document.body.classList.add("custom-cursor-active");
    return () => {
      document.body.classList.remove("custom-cursor-active");
    };
  }, [enabled]);

  useEffect(() => {
    if (!enabled) return;

    const cursorDot = cursorDotRef.current;
    const cursorOutline = cursorOutlineRef.current;
    const cursorTextEl = cursorTextRef.current;
    if (!cursorDot || !cursorOutline || !cursorTextEl) return;

    const onMouseMove = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;

      gsap.to(cursorDot, {
        x,
        y,
        duration: 0.1,
        ease: "power2.out",
      });

      gsap.to(cursorOutline, {
        x,
        y,
        duration: 0.35,
        ease: "power2.out",
      });

      // Check if hovering an element with data-cursor
      const target = e.target as HTMLElement | null;
      const cursorTarget = target?.closest("[data-cursor]") as HTMLElement | null;

      if (cursorTarget) {
        const text = cursorTarget.getAttribute("data-cursor") || "EXPLORE";
        setCursorText(text);

        gsap.to(cursorOutline, {
          scale: 2.8,
          backgroundColor: "rgba(196, 93, 62, 0.15)",
          borderColor: "rgba(196, 93, 62, 0.6)",
          duration: 0.3,
        });
        gsap.to(cursorTextEl, {
          opacity: 1,
          scale: 1,
          duration: 0.2,
        });
        gsap.to(cursorDot, {
          opacity: 0,
          duration: 0.2,
        });
      } else {
        setCursorText("");
        gsap.to(cursorOutline, {
          scale: 1,
          backgroundColor: "transparent",
          borderColor: "rgba(196, 93, 62, 0.4)",
          duration: 0.3,
        });
        gsap.to(cursorTextEl, {
          opacity: 0,
          scale: 0.8,
          duration: 0.2,
        });
        gsap.to(cursorDot, {
          opacity: 1,
          duration: 0.2,
        });
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, [enabled, pathname]);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Small Precision Center Dot */}
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 w-2 h-2 -ml-1 -mt-1 rounded-full bg-accent pointer-events-none transition-opacity"
      />

      {/* Outer Dynamic Ring */}
      <div
        ref={cursorOutlineRef}
        className="fixed top-0 left-0 w-8 h-8 -ml-4 -mt-4 rounded-full border border-accent/40 pointer-events-none flex items-center justify-center transition-all duration-200"
      >
        <span
          ref={cursorTextRef}
          className="font-sans text-[9px] font-bold tracking-widest text-accent uppercase opacity-0 transition-opacity whitespace-nowrap"
        >
          {cursorText}
        </span>
      </div>
    </div>
  );
}
