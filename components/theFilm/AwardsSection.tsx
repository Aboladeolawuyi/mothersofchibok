"use client";

import Image from "next/image";

const awards = [
  {
    src: "/assets/images/awards/DOCNYC24_Laurels_OfficialSelection_Black.png",
    invert: true,
  },
  {
    src: "/assets/images/awards/Laurel1 2025.png",
    invert: true,
  },
    {
    src: "/assets/images/awards/Laurels - Black.png",
    invert: true,
  },
  {
    src: "/assets/images/awards/laurel-encounters-2025-Official-Selection-black.png",
    invert: true,
  },
  {
    src: "/assets/images/awards/IDA 41 Best Feature Special Mention Laurel.png",
    invert: true,
  },
  {
    src: "/assets/images/awards/IDA 41 Best Short Special Mention Laurel.png",
    invert: true,
  },
  {
    src: "/assets/images/awards/IDA 41 Pare Lorentz Honorable Mention Laurel.png",
    invert: true,
  },
  {
    src: "/assets/images/awards/OFFICIALSELECTION-22.AfrikaFilmFestivalKln-2025.png",
    invert: false,
  },
  {
    src: "/assets/images/awards/laurels_officialselection_black.png",
    invert: true,
  },
  {
    src: "/assets/images/awards/SELECTIONOFFICIELLE-NollywoodWeekNOWFilmFestival-PARIS2026-white.png",
    invert: false,
  },
  {
    src: "/assets/images/awards/FEATURE DOCUMENTARY_2026 FINALIST LAUREL.png",
    invert: true,
  },
  {
    src: "/assets/images/awards/_SELECTION-OFFICIELLE_EN_BLANC@3x.png",
    invert: false,
  },
  {
    src: "/assets/images/awards/solelunaPA25_laurel_white_01.png",
    invert: false,
  },
];

export default function AwardsSection() {
  return (
    <section
      id="awards"
      className="relative overflow-hidden bg-black px-4 py-16 text-white sm:px-8 lg:px-16"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.04),transparent_45%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="font-productsFont text-[10px] uppercase tracking-[0.35em] text-white/60 sm:text-xs">
            Recognition
          </p>

          <h2 className="mt-3 font-guthenBloots text-4xl leading-none sm:text-5xl md:text-6xl">
            Awards & Selections
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {awards.map((award, index) => (
            <div
              key={`${award.src}-${index}`}
              className="group flex aspect-square items-center justify-center rounded-2xl border border-white/10 bg-black p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#B89C58]/50 hover:shadow-[0_0_20px_rgba(184,156,88,0.25)]"
            >
              <div className="relative h-full w-full">
                <Image
                  src={award.src}
                  alt={`Award ${index + 1}`}
                  fill
                  className={`object-contain transition-transform duration-300 group-hover:scale-105 ${
                    award.invert ? "invert brightness-[3] contrast-[2]" : ""
                  }`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}