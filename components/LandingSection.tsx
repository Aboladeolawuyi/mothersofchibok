"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import HeroSection from "@/components/landing/HeroSection";
import JourneyModal from "@/components/landing/JourneyModal";

type LandingSectionProps = {
  onWatchTrailer: () => void;
};

export default function LandingSection({ onWatchTrailer }: LandingSectionProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative h-full w-full overflow-hidden rounded-[28px] sm:rounded-[34px] lg:rounded-[42px]">
      <HeroSection onOpen={() => setOpen(true)} onWatchTrailer={onWatchTrailer} />
      <AnimatePresence>{open && <JourneyModal onClose={() => setOpen(false)} />}</AnimatePresence>
    </div>
  );
}
