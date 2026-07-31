"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Calendar } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

type Screening = {
  date: string;
  label: string;
  image: string;
};

const screenings: Screening[] = [
  {
    date: "February 27, 2026",
    label: "Africa Premiere (Nigeria and Ghana)",
    image: "/assets/images/moc-lagos-screening.png",
  },
 
];

const ScreeningGrid = () => (
  <div className="mt-16 px-4 md:px-8 max-w-6xl mx-auto">
    <h3 className="text-white text-4xl md:text-5xl lg:text-6xl font-guthenBloots mb-8 text-left">
      Cinema Listings
    </h3>

    {/* Full width cards on mobile, 2 columns on desktop (card pushed to right half) */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
      {/* Empty first column to push card to right half on desktop only */}
      <div className="hidden md:block"></div>
      
      {/* Card in the second column (right half of page) - horizontal layout */}
      <div className="screening-card bg-white/5 overflow-hidden flex h-36 md:h-48 relative ">
        {/* Left: Date block */}
        <div className="w-1/3 bg-white font-productsFont tracking-tight3 flex flex-col text-center items-center justify-center p-2 md:p-4">
          <Calendar className="w-4 h-4 md:w-6 md:h-6 text-black mb-1 md:mb-2" />
          <p className="text-xs md:text-sm text-black">{screenings[0].date}</p>
        </div>

        {/* Right: Image + label */}
        <div className="w-2/3 relative">
          <Image
            src={screenings[0].image}
            alt={screenings[0].label}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-2 md:p-3">
            <p className="text-white text-sm md:text-lg font-productsFont text-center leading-snug">
              {screenings[0].label}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default function TheFilmBox() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate film paragraph (once)
      const sentences = gsap.utils.toArray<HTMLElement>(".film-sentence");
      gsap.fromTo(
        sentences,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: ".film-paragraph",
            start: "top 85%",
            toggleActions: "play none none none", // plays once
          },
        }
      );

      // Animate screening cards
      gsap.utils.toArray<HTMLElement>(".screening-card").forEach((card, i) => {
        gsap.fromTo(
          card,
          { y: 40, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            delay: i * 0.1,
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none none", // plays once
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef}>
      <header className="border-b p-10 lg:p-16 flex justify-between items-center">
        <div className="lg:text-[70px] text-[40px] tracking-tight4 leading-0 font-guthenBloots text-gray-200">
          About The Film
        </div>
      </header>

      <div className="m-auto lg:space-y-56">
        {/* Animated paragraph */}
<div className="mx-auto mt-10 mb-20 max-w-5xl px-8 text-center lg:mt-28 lg:px-28">
  {/* Opening statement */}
  <p className="film-paragraph mb-10 font-productsFont text-2xl font-bold leading-relaxed text-white lg:text-3xl">
    {"The world came to know Chibok because of what was taken. This film is about what remains."
      .match(/[^.!?]+[.!?]/g)
      ?.map((sentence, i) => (
        <span key={i} className="film-sentence opacity-0">
          {sentence.trim()}{" "}
        </span>
      ))}
  </p>

  {/* Synopsis */}
  <p className="film-paragraph mb-8 font-productsFont text-base leading-8 text-white/85 lg:text-xl">
    {`A decade after the Chibok school abduction shook the world, four mothers embark on a quiet but extraordinary journey to rebuild their lives. Over the course of a single farming season, they work the land, provide for their families, and discover that every seed planted is also an act of hope.`
      .match(/[^.!?]+[.!?]/g)
      ?.map((sentence, i) => (
        <span key={i} className="film-sentence opacity-0">
          {sentence.trim()}{" "}
        </span>
      ))}
  </p>

  {/* Closing */}
  <p className="film-paragraph font-productsFont text-base leading-8 text-white/85 lg:text-xl">
    {`Intimate, deeply human, and quietly powerful, Mothers of Chibok is a portrait of resilience, faith, and the enduring strength of motherhood. The film is the feature-length spiritual sequel to the Venice Lion-winning VR documentary Daughters of Chibok.`
      .match(/[^.!?]+[.!?]/g)
      ?.map((sentence, i) => (
        <span key={i} className="film-sentence opacity-0">
          {sentence.trim()}{" "}
        </span>
      ))}
  </p>
</div>

        {/* <ScreeningGrid /> */}
      </div>
    </section>
  );
}
