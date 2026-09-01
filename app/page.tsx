import React from "react";
import dynamic from "next/dynamic";
import GlobalPreloader from "@/components/shared/GlobalPreloader";
import HeroSection from "@/components/sections/HeroSection";
import Marquee from "@/components/shared/Marquee";
import StartHereSection from "@/components/sections/StartHereSection";
import FounderScrollSection from "@/components/sections/FounderScrollSection";
import BeliefSection from "@/components/sections/BeliefSection";
import ThoughtsHighlightSection from "@/components/sections/ThoughtsHighlightSection";
import VideoHubHighlightSection from "@/components/sections/VideoHubHighlightSection";
import PodcastHighlightSection from "@/components/sections/PodcastHighlightSection";
import BondSmartTransitionSection from "@/components/sections/BondSmartTransitionSection";
import ContactCTASection from "@/components/sections/ContactCTASection";

const SignatureBrandMomentSection = dynamic(() => import("@/components/sections/SignatureBrandMomentSection"));

export default function HomePage() {
  return (
    <div className="relative bg-cream text-ink overflow-hidden">
      <GlobalPreloader />
      <HeroSection />
      <Marquee
        items={[
          "GIRISH LAKHOTYA",
          "THE BONDSMAN OF INDIA",
          "BOND SMART",
          "FINANCIAL & LEGAL EMPOWERMENT",
          "TRANSPARENCY & TRUST",
        ]}
      />
      <StartHereSection />
      <SignatureBrandMomentSection />
      <FounderScrollSection />
      <BeliefSection />
      <ThoughtsHighlightSection />
      <VideoHubHighlightSection />
      <PodcastHighlightSection />
      <BondSmartTransitionSection />
      <ContactCTASection />
    </div>
  );
}
