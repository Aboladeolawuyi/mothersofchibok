"use client";

import { motion, Variants } from "framer-motion";
import { ArrowDown } from "lucide-react";

type Props = {
  onOpen: () => void;
  onWatchTrailer: () => void;
};

const wordAnimation: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.045 + 0.25, duration: 0.45 },
  }),
};

const heroAnchors = [
  { label: "About the Film", href: "#film" },
  { label: "About the Impact", href: "#impact" },
  { label: "Explore the Products", href: "#products" },
];

const marqueeWords = [
  "STORY",
  "IMPACT",
  "RESILIENCE",
  "HARVEST",
  "HOPE",
  "LEGACY",
];

export default function HeroSection({ onWatchTrailer }: Props) {
  const slogan = {
  first: "The world came to know Chibok",
  second: "Because of what was taken.",
  third:"This film is about what remains.",
};

  return (
    <div className="relative z-10 flex h-full min-h-[560px] flex-col items-center justify-center px-5 pt-12 pb-0 text-center text-white sm:px-8 lg:px-12">
      {/* SIMA-inspired moving headline layer: bold, cinematic, but kept inside the existing rounded hero-card style. */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-[28px] sm:rounded-[32px]">
        <motion.div
          aria-hidden="true"
          initial={{ x: "0%" }}
          animate={{ x: "-50%" }}
          transition={{ duration: 28, ease: "linear", repeat: Infinity }}
          className="absolute left-0 top-1/2 flex w-[240vw] -translate-y-1/2 items-center gap-10 whitespace-nowrap opacity-[0.22] sm:gap-16 md:opacity-[0.26]"
        >
          {[...marqueeWords, ...marqueeWords, ...marqueeWords].map((word, index) => (
            <span
              key={`${word}-${index}`}
              className="font-productsFont text-[clamp(5rem,18vw,17rem)] font-black uppercase leading-none tracking-[-0.08em] text-white drop-shadow-[0_12px_45px_rgba(0,0,0,0.45)]"
            >
              {word}
            </span>
          ))}
        </motion.div>
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/55 to-transparent" />
      </div>
      <div className="relative z-10 flex max-w-5xl flex-col items-center">
        <h1 className="mx-auto max-w-4xl text-center font-productsFont text-[clamp(1.5rem,4.5vw,6rem)] font-normal leading-tight tracking-[-0.03em] text-white drop-shadow-[0_10px_38px_rgba(0,0,0,0.62)]">
  <div className="mb-2">
    {slogan.first.split(" ").map((word, index) => (
      <motion.span
        key={`first-${word}-${index}`}
        custom={index}
        variants={wordAnimation}
        initial="hidden"
        animate="visible"
        className="mr-2 inline-block"
      >        
        {word}
      </motion.span>
    ))}
  </div>

  <div>
    {slogan.second.split(" ").map((word, index) => (
      <motion.span
        key={`second-${word}-${index}`}
        custom={index + slogan.first.split(" ").length}
        variants={wordAnimation}
        initial="hidden"
        animate="visible"
        className="mr-2 inline-block"
      >
        {word}
      </motion.span>
    ))}
  </div>
  <div>
    {slogan.third.split(" ").map((word, index) => (
      <motion.span
        key={`second-${word}-${index}`}
        custom={index + slogan.first.split(" ").length}
        variants={wordAnimation}
        initial="hidden"
        animate="visible"
        className="mr-2 inline-block"
      >
        {word}
      </motion.span>
    ))}
  </div>
</h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-5 max-w-2xl font-productsFont text-sm leading-relaxed text-white/90 sm:text-base md:text-lg"
        >
          Story · Impact · Products — from field to lasting change
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.05 }}
          className="mt-7 flex w-full max-w-2xl flex-col items-center justify-center gap-3 sm:flex-row"
        >
          {heroAnchors.map((anchor) => (
            <a
              key={anchor.href}
              href={anchor.href}
              className="group inline-flex min-w-[190px] items-center justify-center gap-2 rounded-full bg-[#B89C58] px-6 py-3 font-productsFont text-xs font-semibold text-black shadow-[0_12px_35px_rgba(0,0,0,0.18)] backdrop-blur transition hover:bg-white hover:text-neutral-950 sm:min-w-0"
            >
              {anchor.label}
              <ArrowDown className="h-3.5 w-3.5 transition group-hover:translate-y-0.5" />
            </a>
          ))}

          <button type="button" onClick={onWatchTrailer} className="sr-only">
            Watch trailer
          </button>
        </motion.div>
      </div>
    </div>
  );
}
