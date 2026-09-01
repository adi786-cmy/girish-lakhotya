import React from "react";
import { cn } from "@/lib/utils";

interface EditorialCoverProps {
  kicker: string;
  title: string;
  index?: string | number;
  meta?: string;
  className?: string;
}

export default function EditorialCover({
  kicker,
  title,
  index,
  meta,
  className,
}: EditorialCoverProps) {
  const indexLabel =
    typeof index === "number" ? String(index).padStart(2, "0") : index;

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden bg-ink text-cream min-h-[40vh] aspect-[2/1]",
        className
      )}
    >
      <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-8 md:p-12">
        <div className="flex items-start justify-between gap-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-accent">
            {kicker}
          </p>
          {indexLabel ? (
            <p className="font-mono text-[11px] uppercase tracking-widest text-cream/40">
              {indexLabel}
            </p>
          ) : null}
        </div>

        <div className="min-w-0 space-y-3 sm:space-y-4">
          <p className="font-display font-black uppercase tracking-tight leading-[0.85] text-cream text-[clamp(2.25rem,9vw,6.5rem)] line-clamp-3">
            {title}
          </p>
          {meta ? (
            <p className="font-serif italic text-cream/70 text-base sm:text-lg">
              {meta}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
