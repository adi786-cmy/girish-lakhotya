"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useReducedMotion } from "@/lib/useReducedMotion";

const TransitionContext = createContext<{ isTransitioning: boolean }>({ isTransitioning: false });

export const useTransitionState = () => useContext(TransitionContext);

export default function PageTransitionProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const reduced = useReducedMotion();
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  useEffect(() => {
    if (reduced) return;
    setIsTransitioning(true);
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 450);

    return () => clearTimeout(timer);
  }, [pathname, reduced]);

  return (
    <TransitionContext.Provider value={{ isTransitioning }}>
      <div
        className={`transition-opacity duration-500 ease-out ${
          isTransitioning ? "opacity-90" : "opacity-100"
        }`}
      >
        {children}
      </div>
    </TransitionContext.Provider>
  );
}
