"use client";

import React, { useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap, useGSAP } from "@/lib/gsap";
import { SplitText } from "@/lib/splitText";
import AnimatedButton from "@/components/ui/AnimatedButton";
import Magnetic from "@/components/ui/Magnetic";
import { EASE } from "@/lib/motion";
import { founderProfile } from "@/data/content";
import { useReducedMotion } from "@/lib/useReducedMotion";

const HERO_PHOTO = "/images/girish/banner2.png";

type SplitLike = { chars: HTMLElement[]; revert: () => void };

function manualCharSplit(line: HTMLElement, charsClass: string): SplitLike {
  const text = line.textContent ?? "";
  line.textContent = "";
  const chars: HTMLElement[] = [];
  Array.from(text).forEach((ch) => {
    const span = document.createElement("span");
    span.className = charsClass;
    span.style.display = "inline-block";
    span.textContent = ch === " " ? "\u00A0" : ch;
    line.appendChild(span);
    chars.push(span);
  });
  return {
    chars,
    revert: () => {
      line.textContent = text;
    },
  };
}

function splitHeroLine(line: HTMLElement): SplitLike {
  try {
    const split = SplitText.create(line, { type: "chars", charsClass: "hero-char" });
    return {
      chars: split.chars as HTMLElement[],
      revert: () => split.revert(),
    };
  } catch {
    return manualCharSplit(line, "hero-char");
  }
}

const StampBadge = ({ onClick }: { onClick: () => void }) => (
  <Magnetic strength={0.35}>
    <button
      type="button"
      onClick={onClick}
      aria-label="Scroll to Bond Smart"
      className="group relative w-28 h-28 lg:w-36 lg:h-36 rounded-full grid place-items-center select-none"
    >
      <svg viewBox="0 0 200 200" className="stamp-disc absolute inset-0 w-full h-full" aria-hidden="true">
        <defs>
          <path id="stamp-circle" d="M100,100 m-78,0 a78,78 0 1,0 156,0 a78,78 0 1,0 -156,0" />
        </defs>
        <text
          className="fill-ink font-mono uppercase"
          style={{ fontSize: "14.5px", letterSpacing: "0.22em" }}
        >
          <textPath href="#stamp-circle">THE BONDSMAN OF INDIA • BOND SMART • </textPath>
        </text>
      </svg>
      <span className="grid place-items-center w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-accent text-white transition-transform duration-300 ease-out group-hover:scale-110 group-hover:-rotate-45">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M7 7l10 10M17 7v10H7" />
        </svg>
      </span>
    </button>
  </Magnetic>
);

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const innerContentRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const stampRef = useRef<HTMLDivElement>(null);
  const photoDesktopRef = useRef<HTMLDivElement>(null);
  const photoMobileRef = useRef<HTMLDivElement>(null);
  const splitsRef = useRef<SplitLike[]>([]);
  const hasPlayedRef = useRef(false);
  const reduced = useReducedMotion();

  const photoEls = () =>
    [photoDesktopRef.current, photoMobileRef.current].filter((el): el is HTMLDivElement => Boolean(el));

  const playIntro = useCallback(() => {
    if (reduced || !nameRef.current || hasPlayedRef.current) return;
    hasPlayedRef.current = true;

    const lines = nameRef.current.querySelectorAll<HTMLElement>("[data-hero-line]");
    const chars: HTMLElement[] = [];
    splitsRef.current.forEach((s) => s.revert());
    splitsRef.current = [];
    lines.forEach((line) => {
      const split = splitHeroLine(line);
      splitsRef.current.push(split);
      chars.push(...split.chars);
    });

    gsap.set(chars, {
      yPercent: 125,
      rotateX: -70,
      opacity: 0,
      transformPerspective: 900,
      transformOrigin: "50% 100%",
    });
    gsap.set(paragraphRef.current, { y: 34, opacity: 0 });
    gsap.set(buttonsRef.current?.children ?? [], { y: 26, opacity: 0, scale: 0.96 });
    gsap.set(stampRef.current, { scale: 0, rotate: -30, opacity: 0 });
    gsap.set(photoEls(), { clipPath: "inset(100% 0 0 0)", opacity: 0.4 });

    const tl = gsap.timeline({ defaults: { ease: EASE.outQuart }, delay: 0.05 });
    tl.to(photoEls(), {
      clipPath: "inset(0% 0 0 0)",
      opacity: 1,
      duration: 1.15,
      ease: EASE.outCubic,
    })
      .to(
        chars,
        {
          yPercent: 0,
          rotateX: 0,
          opacity: 1,
          duration: 1,
          stagger: { each: 0.026, from: "start" },
        },
        "-=0.85"
      )
      .to(paragraphRef.current, { y: 0, opacity: 1, duration: 0.75, ease: EASE.outCubic }, "-=0.55")
      .to(
        buttonsRef.current?.children ?? [],
        { y: 0, opacity: 1, scale: 1, duration: 0.6, stagger: 0.08, ease: "back.out(1.6)" },
        "-=0.45"
      )
      .to(stampRef.current, { scale: 1, rotate: 0, opacity: 1, duration: 0.9, ease: "elastic.out(1, 0.55)" }, "-=0.6");
  }, [reduced]);

  useEffect(() => {
    if (reduced || !nameRef.current) return;

    const alreadyDone =
      typeof window !== "undefined" &&
      (window as Window & { __preloaderDone?: boolean }).__preloaderDone === true;

    if (alreadyDone) {
      playIntro();
      return;
    }

    const lines = nameRef.current.querySelectorAll<HTMLElement>("[data-hero-line]");
    const chars: HTMLElement[] = [];
    splitsRef.current.forEach((s) => s.revert());
    splitsRef.current = [];
    lines.forEach((line) => {
      const split = splitHeroLine(line);
      splitsRef.current.push(split);
      chars.push(...split.chars);
    });

    gsap.set(chars, {
      yPercent: 125,
      rotateX: -70,
      opacity: 0,
      transformPerspective: 900,
      transformOrigin: "50% 100%",
    });
    gsap.set(paragraphRef.current, { y: 34, opacity: 0 });
    gsap.set(buttonsRef.current?.children ?? [], { y: 26, opacity: 0, scale: 0.96 });
    gsap.set(stampRef.current, { scale: 0, rotate: -30, opacity: 0 });
    gsap.set(photoEls(), { clipPath: "inset(100% 0 0 0)" });

    const fallback = window.setTimeout(() => playIntro(), 1400);
    return () => window.clearTimeout(fallback);
  }, [reduced, playIntro]);

  useEffect(() => {
    const handlePreloaderComplete = () => playIntro();
    window.addEventListener("preloaderComplete", handlePreloaderComplete);
    return () => window.removeEventListener("preloaderComplete", handlePreloaderComplete);
  }, [playIntro]);

  useGSAP(
    () => {
      if (reduced || !sectionRef.current || !innerContentRef.current) return;
      const trigger = gsap.to(innerContentRef.current, {
        y: "-12vh",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
      return () => trigger.kill();
    },
    { scope: sectionRef, dependencies: [reduced] }
  );

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (!section) return;
    const lenis = (window as unknown as { __lenis?: { scrollTo: (el: Element, opts: object) => void } }).__lenis;
    if (lenis) {
      lenis.scrollTo(section, { offset: 0, duration: 1.2 });
    } else {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100dvh] w-full overflow-hidden bg-cream text-ink"
    >
      {/* DESKTOP overlapping cover plane — hidden below lg (1024px) */}
      <div
        ref={photoDesktopRef}
        className="hero-photo-plane hidden lg:block absolute z-[2] top-0 right-0 h-[100dvh] w-[min(50vw,740px)] overflow-hidden"
      >
        <Image
          src={HERO_PHOTO}
          alt="Girish Lakhotya"
          fill
          priority
          sizes="(max-width: 1023px) 0px, min(50vw, 740px)"
          className="object-cover"
          style={{ objectPosition: "22% 8%" }}
        />
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-[28%] bg-gradient-to-r from-cream via-cream/40 to-transparent"
          aria-hidden="true"
        />
      </div>

      <div
        ref={innerContentRef}
        className="relative z-10 w-full max-w-[92rem] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 pt-28 pb-10 md:pt-24 md:min-h-[100dvh] md:flex md:flex-col md:justify-center"
      >
        <div className="relative">
          <h1
            ref={nameRef}
            aria-label={founderProfile.name}
            className="w-full select-none leading-none cursor-default mb-8 md:mb-6 text-ink"
          >
            <span aria-hidden="true" className="block">
              <span
                data-hero-line
                className="block font-display font-black uppercase text-hero tracking-tight overflow-hidden"
              >
                GIRISH
              </span>
              <span
                data-hero-line
                className="serif-accent block text-hero-sm leading-[0.85] md:ml-[3vw] overflow-hidden"
              >
                Lakhotya
              </span>
            </span>
          </h1>

        </div>

        <div className="max-w-xl md:max-w-[min(36rem,36vw)] relative z-10">
          <p
            ref={paragraphRef}
            className="text-warm font-sans text-base sm:text-lg md:text-xl leading-relaxed mb-8 md:mb-10"
          >
            {founderProfile.positioning}. {founderProfile.tagline} Building Bond Smart to bring
            clarity and digital coordination to India&apos;s bail bond proceedings.
          </p>

          <div ref={buttonsRef} className="flex flex-row items-center gap-2.5 sm:gap-4 flex-wrap">
            <AnimatedButton
              onClick={() => handleScroll("person")}
              topText="THE WORK"
              bottomText="MEET GIRISH →"
              variant="primary"
            />
            <AnimatedButton
              as={Link}
              href="/bond-smart"
              topText="BOND SMART"
              bottomText="THE PLATFORM →"
              variant="light"
            />
          </div>

          {/* Stamp on cream column only — must not cover the face */}
          <div ref={stampRef} className="hidden sm:block mt-10 opacity-0 z-10">
            <StampBadge onClick={() => handleScroll("bond-smart")} />
          </div>
        </div>
      </div>

      {/* MOBILE in-flow photo — hidden from lg up */}
      <div
        ref={photoMobileRef}
        className="hero-photo-plane lg:hidden relative w-full h-[52vh] overflow-hidden"
      >
        <Image
          src={HERO_PHOTO}
          alt="Girish Lakhotya"
          fill
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "22% 8%" }}
        />
      </div>
    </section>
  );
}
