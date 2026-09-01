"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    if (isMobileMenuOpen) window.addEventListener("keydown", handleKeyDown);
    document.body.classList.toggle("menu-open", isMobileMenuOpen);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.classList.remove("menu-open");
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Start Here", href: "/#start-here" },
    { name: "About", href: "/about" },
    { name: "Thoughts", href: "/thoughts" },
    { name: "Videos", href: "/videos" },
    { name: "Podcast", href: "/podcast" },
    { name: "Media", href: "/media" },
    { name: "Contact", href: "/contact" },
  ];

  const handleCtaClick = () => {
    trackEvent({
      eventName: "bond_smart_cta_click",
      location: "Navbar",
      label: "BOND SMART Nav Button",
    });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-cream border-b border-ink/10 ${
        isScrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="page-container flex items-center justify-between">
        <Link href="/" className="group flex flex-col text-ink">
          <span className="font-display text-lg sm:text-xl font-black uppercase tracking-tight group-hover:text-accent transition-colors">
            GIRISH LAKHOTYA
          </span>
          <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-warm -mt-0.5">
            The Bondsman of India
          </span>
        </Link>

        <nav className="hidden lg:flex items-center space-x-7">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`font-sans text-xs tracking-widest uppercase transition-colors relative py-1 ${
                  isActive ? "text-accent font-semibold" : "text-warm hover:text-ink"
                }`}
              >
                {link.name}
                {isActive && <span className="absolute bottom-0 left-0 right-0 h-px bg-accent" />}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/bond-smart"
          onClick={handleCtaClick}
          className="hidden lg:inline-flex rounded-full bg-accent text-white text-xs tracking-widest uppercase px-5 py-2.5"
        >
          Bond Smart
        </Link>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-ink p-2"
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[64px] bg-cream z-50 lg:hidden flex flex-col justify-between p-8 border-t border-ink/10">
          <div className="flex flex-col space-y-5 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-display text-3xl font-black uppercase tracking-tight text-ink hover:text-accent transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <Link
            href="/bond-smart"
            onClick={() => {
              setIsMobileMenuOpen(false);
              handleCtaClick();
            }}
            className="w-full flex items-center justify-center py-4 bg-accent text-white font-display font-bold tracking-widest uppercase text-sm"
          >
            Bond Smart
          </Link>
        </div>
      )}
    </header>
  );
}
