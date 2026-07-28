"use client";

import { useRef } from "react";
import { useTheFilmAnimations } from "./useTheFilmAnimations";
import Section from "./Section";
import ScreeningGrid from "./ScreeningGrid";
import { filmSections } from "@/data/theFilmSections";

export default function TheFilm() {
  const containerRef = useRef<HTMLDivElement>(null!);

  useTheFilmAnimations(containerRef);

  return (
    <div ref={containerRef} className="space-y-20">
      {filmSections.map((section) => (
        <Section key={section.id} {...section} />
      ))}
      <ScreeningGrid />
    </div>
  );
}
