import React from "react";

interface MarqueeProps {
  items?: string[];
  speed?: number;
  direction?: "left" | "right";
  className?: string;
}

export default function Marquee({
  items = ["GIRISH LAKHOTYA", "THE BONDSMAN OF INDIA", "BOND SMART", "TRANSPARENCY & TRUST"],
  className = "",
}: MarqueeProps) {
  const doubled = [...items, ...items];

  return (
    <div className={`py-4 border-y border-ink/10 bg-cream overflow-hidden select-none marquee-row marquee-row-light ${className}`}>
      <div className="marquee-content-left">
        {doubled.map((item, idx) => (
          <span
            key={idx}
            className="font-display font-black uppercase tracking-tight text-sm sm:text-base text-ink/80 px-8 whitespace-nowrap"
          >
            {item}
            <span className="text-accent mx-8">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
