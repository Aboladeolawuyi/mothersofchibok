"use client";

import React, { useRef, useState } from "react";
import {
  ExternalLink,
  ChevronDown,
  ChevronUp,
  PlayCircle,
  Newspaper,
  Radio,
  Tv,
  Megaphone,
} from "lucide-react";

interface PressMentionsProps {
  inDialog?: boolean;
}

interface PressLink {
  id: number;
  url: string;
  label: string;
  category: "article" | "radio" | "television";
}

const creators = [
  {
    id: 1,
    name: "Aproko Doctor",
    video:
      "https://res.cloudinary.com/davm498td/video/upload/v1781242853/0612_1_cfnvsw.mp4",
  },
  {
    id: 2,
    name: "Daniel Ochuko",
    video:
      "https://res.cloudinary.com/davm498td/video/upload/v1781653410/Daniel_Ochuko_yfoxdt.mp4",
  },
];

const pressLinks: PressLink[] = [
  {
    id: 1,
    url: "https://thesun.ng/mothers-of-chibok-tells-the-story-the-world-forgot/",
    label: "The Sun",
    category: "article",
  },
  {
    id: 2,
    url: "https://lifestyle.thecable.ng/emmy-winning-filmmaker-kachi-bensons-mothers-of-chibok-hits-cinema-feb-27/",
    label: "The Cable",
    category: "article",
  },
  {
    id: 3,
    url: "https://www.thisdaylive.com/2026/02/04/emmy-winning-filmmaker-kachi-bensons-mothers-of-chibok-goes-to-cinema/",
    label: "This Day Live",
    category: "article",
  },
  {
    id: 4,
    url: "https://whatkeptmeup.com/nigerian-film-news/mothers-of-chibok-and-the-return-of-nigerian-documentaries-to-cinemas/",
    label: "What Kept Me Up",
    category: "article",
  },
  {
    id: 5,
    url: "https://news.broadcastmediaafrica.com/2026/02/13/mothers-of-chibok-to-premiere-in-cinemas-on-february-27/",
    label: "Broadcast Media Africa",
    category: "article",
  },
  {
    id: 6,
    url: "https://www.france24.com/en/across-africa-the-mothers-of-chibok-s-story-of-sadness-and-strength",
    label: "France24",
    category: "article",
  },
  {
    id: 7,
    url: "https://www.sinemafocus.com/mothers-of-chibok-film-review/",
    label: "Sinema Focus",
    category: "article",
  },
  {
    id: 8,
    url: "https://www.bellanaija.com/2026/02/mothers-of-chibok-cinema-release/",
    label: "Bellanaija",
    category: "article",
  },
  {
    id: 9,
    url: "https://afrocritik.com/joke-silva-joins-joel-kachi-benson-as-executive-producer-mothers-of-chibok/",
    label: "Afrocritik",
    category: "article",
  },
  {
    id: 10,
    url: "https://thenollywoodreporter.com/film/mothers-of-chibok-opens-in-cinemas-february-27/",
    label: "The Nollywood Reporter",
    category: "article",
  },
  {
    id: 11,
    url: "https://independent.ng/architect-of-impact-why-chibok-story-belongs-on-big-screen-joel-kachi-benson/",
    label: "The Independent",
    category: "article",
  },
  {
    id: 12,
    url: "https://www.premiumtimesng.com/entertainment/movies/784333-ahead-of-11th-anniversary-joel-kachis-mothers-of-chibok-screens-in-lagos.html",
    label: "Premium Times",
    category: "article",
  },
  {
    id: 13,
    url: "https://guardian.ng/life/mothers-of-chibok-a-tale-of-hope-resilience/",
    label: "The Guardian Nigeria",
    category: "article",
  },
  {
    id: 14,
    url: "https://www.vanguardngr.com/2025/03/mothers-of-chibok-shines-at-irep-2025/amp/",
    label: "Vanguard Newspaper",
    category: "article",
  },
  {
    id: 15,
    url: "https://afrocritik.com/joel-kachi-benson-mothers-of-chibok-review/",
    label: "Afrocritik",
    category: "article",
  },
  {
    id: 16,
    url: "https://thenollywoodreporter.com/news/mothers-of-chibok-wins-al-jazeera-award-for-best-documentary/",
    label: "The Nollywood Reporter",
    category: "article",
  },
  {
    id: 17,
    url: "https://www.thisdaylive.com/2025/03/26/mothers-of-chibok-to-open-irep-2025/",
    label: "This Day Live",
    category: "article",
  },
  {
    id: 18,
    url: "https://afrocritik.com/mothers-of-chibok-win-top-awards-at-encounters-documentary-film-festival/",
    label: "Afrocritik",
    category: "article",
  },
  {
    id: 19,
    url: "https://www.thisdaylive.com/2025/03/28/mothers-of-chibok-receives-great-reviews-at-irep-2025/",
    label: "This Day Live",
    category: "article",
  },
  {
    id: 20,
    url: "https://thenollywoodreporter.com/news/kachi-benson-brings-mothers-of-chibok-to-south-africa/",
    label: "The Nollywood Reporter",
    category: "article",
  },
  {
    id: 21,
    url: "https://www.tvcnews.tv/joel-kachi-bensons-mothers-of-chibok-premieres-in-new-york/",
    label: "TVC News",
    category: "television",
  },
  {
    id: 22,
    url: "https://thenationonlineng.net/mothers-of-chibok-premiere-at-doc-nyc-festival/amp/",
    label: "The Nation",
    category: "article",
  },
  {
    id: 23,
    url: "https://www.forbes.com/sites/lipiroy/2024/11/29/film-mothers-of-chibok-10-years-after-boko-haram-kidnaps-nigerian-girls/",
    label: "Forbes",
    category: "article",
  },
  {
    id: 24,
    url: "https://www.tekedia.com/forum/topic/mothers-of-chibok-documentary-a-powerful-account-of-resilience-and-the-fight-for-justice/",
    label: "Tekedia",
    category: "article",
  },
  {
    id: 25,
    url: "https://leadership.ng/joel-kachi-bensons-mothers-of-chibok-set-for-cinema-release-feb-27/",
    label: "Leadership Newspaper",
    category: "article",
  },
  {
    id: 26,
    url: "https://www.modernghana.com/news/1476477/nigerias-mothers-of-chibok-go-from-farm-to-fact.html",
    label: "Modern Ghana",
    category: "article",
  },
  {
    id: 27,
    url: "https://www.france24.com/fr/info-en-continu/20260306-du-champ-%C3%A0-l-usine-au-nigeria-les-m%C3%A8res-de-chibok-leurs-cacahu%C3%A8tes-et-l-%C3%A9ducation-des-enfants",
    label: "France 24",
    category: "article",
  },
];

const categoryIcon = {
  article: Newspaper,
  radio: Radio,
  television: Tv,
};

const categoryLabel = {
  article: "Article",
  radio: "Radio",
  television: "Television",
};

export default function PressMentions({ inDialog = false }: PressMentionsProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [activeCreator, setActiveCreator] = useState(creators[0]);
  const [showAll, setShowAll] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [videoError, setVideoError] = useState(false);

  const initialDisplayCount = 9;
  const displayedLinks = showAll
    ? pressLinks
    : pressLinks.slice(0, initialDisplayCount);

  const remainingCount = pressLinks.length - initialDisplayCount;

  const handleChangeCreator = (creator: (typeof creators)[number]) => {
    setActiveCreator(creator);
    setIsVideoPlaying(false);
    setVideoError(false);

    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.load();
    }
  };

  const handlePlayVideo = async () => {
    const video = videoRef.current;
    if (!video) return;

    try {
      setVideoError(false);
      await video.play();
      setIsVideoPlaying(true);
    } catch (error) {
      console.error("Video could not play:", error);
      setVideoError(true);
    }
  };

  return (
    <section
      id="press-mentions"
      className={`relative overflow-hidden px-4 sm:px-6 lg:px-8 ${
        inDialog ? "py-10 sm:py-12" : "py-20"
      }`}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-[#B89C58]/10 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-56 w-56 rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#B89C58]/40 bg-[#B89C58]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
            <Megaphone className="h-4 w-4" />
            Media Recognition
          </span>

          <h2 className="font-productsFont text-4xl font-bold text-white md:text-5xl">
            Press Mentions
          </h2>
        </div>

        <div className="mb-14 rounded-[2rem] border border-white/10 bg-white/[0.035] p-4 shadow-2xl shadow-black/25 backdrop-blur md:p-6 lg:p-8">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="font-productsFont text-xs uppercase tracking-[0.3em] text-[#B89C58]">
                Social Features
              </p>

              <h3 className="mt-2 font-productsFont text-2xl font-bold text-white md:text-3xl">
                Product Spotlights
              </h3>
            </div>

            <div className="flex gap-2 overflow-x-auto">
              {creators.map((creator) => (
                <button
                  key={creator.id}
                  type="button"
                  onClick={() => handleChangeCreator(creator)}
                  className={`shrink-0 rounded-full border px-4 py-2 font-productsFont text-xs font-bold uppercase tracking-[0.16em] transition ${
                    activeCreator.id === creator.id
                      ? "border-[#B89C58] bg-[#B89C58] text-black"
                      : "border-white/15 bg-white/5 text-white/70 hover:border-white/40 hover:text-white"
                  }`}
                >
                  {creator.name}
                </button>
              ))}
            </div>
          </div>

          <div className="grid items-center gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-full max-w-[360px] rounded-[2rem] border border-white/15 bg-black p-3 shadow-2xl shadow-black/40">
                <div className="relative overflow-hidden rounded-[1.5rem] bg-black">
                  <video
                    key={activeCreator.video}
                    ref={videoRef}
                    className="block aspect-[9/16] h-full w-full bg-black object-cover"
                    controls={isVideoPlaying}
                    playsInline
                    preload="metadata"
                    onPlay={() => setIsVideoPlaying(true)}
                    onPause={() => setIsVideoPlaying(false)}
                    onEnded={() => setIsVideoPlaying(false)}
                    onError={() => setVideoError(true)}
                  >
                    <source src={activeCreator.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  {!isVideoPlaying && !videoError && (
                    <button
                      type="button"
                      onClick={handlePlayVideo}
                      className="absolute inset-0 z-10 flex items-center justify-center bg-black/65 transition hover:bg-black/75"
                      aria-label={`Play ${activeCreator.name} video`}
                    >
                      <span className="grid h-20 w-20 place-items-center rounded-full bg-[#B89C58] text-black shadow-2xl transition hover:scale-105">
                        <PlayCircle className="h-12 w-12" />
                      </span>
                    </button>
                  )}

                  {videoError && (
                    <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/90 px-6 text-center text-white">
                      <p className="font-productsFont text-sm font-bold text-[#D4AF37]">
                        Video unavailable
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-black/30 p-6 md:p-8">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white">
                <PlayCircle className="h-5 w-5 text-[#D4AF37]" />
                Featured Creator
              </div>

              <h3 className="font-productsFont text-3xl font-bold leading-tight text-white md:text-5xl">
                {activeCreator.name}
              </h3>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/70 md:text-base">
                Watch the featured product spotlight for the Mothers of Chibok
                impact products.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {displayedLinks.map((link) => {
            const Icon = categoryIcon[link.category];

            return (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-[92px] items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/50 hover:bg-white/[0.08] hover:shadow-xl hover:shadow-black/20"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-black/30 text-[#D4AF37] transition-colors duration-300 group-hover:border-[#D4AF37]/50">
                    <Icon className="h-5 w-5" />
                  </div>

                  <div>
                    <span className="font-productsFont text-sm font-semibold text-white transition-colors duration-300 group-hover:text-[#D4AF37]">
                      {link.label}
                    </span>

                    <p className="mt-1 text-xs text-white/45">
                      {categoryLabel[link.category]}
                    </p>
                  </div>
                </div>

                <ExternalLink className="h-4 w-4 shrink-0 text-white/45 transition-colors duration-300 group-hover:text-[#D4AF37]" />
              </a>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center">
          {!showAll && remainingCount > 0 && (
            <button
              type="button"
              onClick={() => setShowAll(true)}
              className="flex items-center gap-2 rounded-full bg-[#B89C58] px-8 py-3 font-productsFont font-semibold text-neutral-950 transition-all duration-300 hover:bg-[#D4AF37]"
            >
              Load More

              <span className="rounded-full bg-neutral-950/15 px-2 py-0.5 text-xs">
                {remainingCount}
              </span>

              <ChevronDown className="h-4 w-4" />
            </button>
          )}

          {showAll && (
            <button
              type="button"
              onClick={() => setShowAll(false)}
              className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-8 py-3 font-productsFont font-semibold text-white transition-all duration-300 hover:bg-white/20"
            >
              Show Less
              <ChevronUp className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}