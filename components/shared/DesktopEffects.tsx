"use client";

import React, { useEffect, useState } from "react";

export default function DesktopEffects() {
  const [Cursor, setCursor] = useState<React.ComponentType | null>(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine) and (min-width: 1024px)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!finePointer || reduced) return;

    let cancelled = false;
    import("./CustomCursor").then((mod) => {
      if (!cancelled) setCursor(() => mod.default);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  if (!Cursor) return null;
  return <Cursor />;
}
