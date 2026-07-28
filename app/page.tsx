"use client";

import { useRef, useState } from "react";

import Navigation from "@/components/common/Navigation";
import LandingSection from "@/components/LandingSection";
import NewsPopup from "@/components/common/NewsPopup";
import SectionWithBackground from "@/components/SectionBackground";
import MovieBento from "@/components/mocMovie";

import TheFilmBox from "@/components/common/theFilm";
import PostersSection from "@/components/theFilm/PostersSection";
import FilmmakersSection from "@/components/theFilm/FilmmakersSection";
import AwardsSection from "@/components/theFilm/AwardsSection";

import TheHeadline from "@/components/theImpact/TheHeadline";
import BeneContent from "@/components/theImpact/BeneContent";
import GoalsTimeline from "@/components/theImpact/GoalsTimeline";
import ProductsSection from "@/components/theImpact/ProductsSection";
import Partnership from "@/components/theImpact/Partnership";
import PressMentions from "@/components/theImpact/PressMentions";

import SupportSection from "@/components/SupportSection";
import ContactHero from "@/components/contacts/ContactHero";

const LANDING_VIDEO_URL =
  "https://res.cloudinary.com/davm498td/video/upload/v1772587358/moc-video02_ngoz5o.mp4";

const THE_FILM_VIDEO_URL =
  "https://res.cloudinary.com/davm498td/video/upload/v1772587419/moc-the-film_ktbemz.mp4";

export default function LandingPage() {
  const [muted, setMuted] = useState(true);
  const trailerRef = useRef<HTMLDivElement>(null);

  const scrollToTrailer = () => {
    trailerRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="w-full overflow-x-hidden bg-black text-white">
      <Navigation muted={muted} setMuted={setMuted} />
      <NewsPopup />

      {/* HERO */}
      <section
        id="landing-section"
        className="relative h-[100svh] min-h-[560px] w-full overflow-hidden sm:min-h-[640px]"
      >
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          loop
          muted={muted}
          playsInline
          preload="auto"
        >
          <source src={LANDING_VIDEO_URL} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/45" />

        <LandingSection onWatchTrailer={scrollToTrailer} />
      </section>

      {/* FILM */}
      <section id="film" className="w-full overflow-hidden bg-neutral-950 text-white">
        <div
          ref={trailerRef}
          id="trailer-section"
          className="w-full scroll-mt-20 py-10 sm:scroll-mt-24 sm:py-14"
        >
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-0">
            <MovieBento
              trailerId="TGJ3ZQPos0A"
              showTrailer
              showPosters={false}
            />
          </div>
        </div>

        <SectionWithBackground
          id="about-the-film"
          videoSrc={THE_FILM_VIDEO_URL}
          overlay
          className="relative z-10 w-full overflow-hidden"
        >
          <div className="w-full min-h-[auto] overflow-hidden sm:min-h-[80vh] lg:min-h-[90vh]">
            <TheFilmBox />
          </div>
        </SectionWithBackground>

        <section
          id="film-characters"
          className="w-full overflow-hidden bg-neutral-950 py-10 text-white sm:py-12"
        >
          <header className="border-y border-white/10 px-5 py-8 sm:px-6 sm:py-10 lg:px-16">
            <p className="font-productsFont text-[10px] uppercase tracking-[0.28em] text-[#B89C58] sm:text-xs sm:tracking-[0.35em]">
              Film Characters
            </p>

            <h2 className="mt-3 font-guthenBloots text-4xl leading-none text-gray-100 sm:text-5xl md:text-7xl">
              The Mothers
            </h2>
          </header>

          <div className="w-full overflow-hidden">
            <PostersSection />
          </div>
        </section>

        <div className="w-full overflow-hidden">
          <FilmmakersSection />
        </div>

        <div className="w-full overflow-hidden">
          <AwardsSection />
        </div>
      </section>

      {/* IMPACT */}
      <section id="impact" className="w-full overflow-hidden bg-neutral-950 text-white">
        <TheHeadline />
        <BeneContent />
        <GoalsTimeline />
      </section>

      {/* PRODUCTS + SUPPORT + PARTNERSHIP */}
      <section id="products" className="w-full overflow-hidden bg-black text-white">
        <ProductsSection />

        <section
          id="support"
          className="w-full overflow-hidden bg-cover bg-center"
          style={{
            backgroundImage: "url('/assets/images/moc-background-dark.jpg')",
          }}
        >
          <SupportSection />
        </section>

        <Partnership />
      </section>
      {/* <div className="w-full overflow-hidden">
          <PressMentions />
        </div> */}

      {/* FOOTER / CONTACT */}
      <footer
        id="contact"
        className="w-full overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/images/moc-background-dark.jpg')",
        }}
      >
        <ContactHero />
      </footer>
    </main>
  );
}