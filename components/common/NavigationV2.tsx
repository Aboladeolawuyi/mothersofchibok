"use client";

import gsap from "gsap";
import { Volume2, VolumeX, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface NavigationProps {
  muted: boolean;
  setMuted: (value: boolean) => void;
}

const MENU_ITEMS = [
  { label: "The Film", image: "/assets/images/moc-the-film-bckground.png", href: "#the-film-section", audio: "/assets/audio/the-film.mp3" },
  { label: "The Mothers", image: "/assets/images/moc-the-mothers-bckground.png", href: "#the-mothers", audio: "/assets/audio/the-mothers.mp3" },
  { label: "The Impact", image: "/assets/images/moc-the-impact-bckground.png", href: "#the-impact", audio: "/assets/audio/the-impact.mp3" },
  { label: "Plant a Seed", image: "/assets/images/moc-contact-bckground.png", href: "#plant-a-seed", audio: "/assets/audio/plant-a-seed.mp3" },
  { label: "Donate", image: "/assets/images/moc-donate-bckground.png", href: "#donate", audio: "/assets/audio/donate.mp3" },
];

export default function Navigation({ muted, setMuted }: NavigationProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const itemsRef = useRef<(HTMLElement | null)[]>([]);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // GSAP Menu Animation
  useEffect(() => {
    if (menuOpen) {
      gsap.set(overlayRef.current, { x: "-100%", autoAlpha: 1 });
      gsap.to(overlayRef.current, { x: "0%", duration: 0.6, ease: "power2.out" });
      gsap.fromTo(
        itemsRef.current,
        { x: -30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, stagger: 0.15, ease: "power3.out", delay: 0.2 }
      );
    } else {
      gsap.to(overlayRef.current, {
        x: "-100%",
        duration: 0.5,
        ease: "power3.inOut",
        onComplete: () => {
          gsap.set(overlayRef.current, { autoAlpha: 0 });
        },
      });
    }
  }, [menuOpen]);

  // Setup IntersectionObserver for sections
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting);
        if (visible) {
          setActiveSection(visible.target.id);
        }
      },
      { threshold: 0.6 } // 60% of section in view = active
    );

    MENU_ITEMS.forEach((item) => {
      const section = document.querySelector(item.href) as HTMLElement;
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // Switch audio track based on active section
  useEffect(() => {
    if (!audioRef.current || !activeSection) return;

    const track = MENU_ITEMS.find((item) => item.href === `#${activeSection}`)?.audio;
    if (track) {
      audioRef.current.src = track;
      audioRef.current.muted = muted;
      audioRef.current.play().catch(() => {
        console.warn("Playback blocked until user interacts.");
      });
    }
  }, [activeSection, muted]);

  return (
    <>
      {/* Audio Player */}
      <audio ref={audioRef} loop playsInline />

      {/* Vertical Navigation (Left side) */}
      <div className="fixed inset-y-0 left-0 flex flex-col items-center justify-between py-6 px-4 text-white text-xs tracking-wide border-r-2 border-[#818181] z-40 max-w-full">
        {/* Top Text */}
        <a href="https://jbmultimedia.com" target="_blank">
          <span className="rotate-180 font-productsFont tracking-tight3 text-[16px] [writing-mode:vertical-rl]">
            By Kachi Benson
          </span>
        </a>

        {/* Menu Icon */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 hover:text-yellow-500 transition cursor-pointer">
          {menuOpen ? (
            <X size={20} />
          ) : (
            <Image src="/assets/images/menu-icon.png" alt="Mother of Chibok Menu Icon" width={20} height={20} />
          )}
        </button>

        {/* Bottom Text + Sound Toggle */}
        <div className="flex flex-col items-center space-y-4">
          <span className="rotate-180 font-productsFont tracking-tight3 text-[16px] [writing-mode:vertical-rl]">
            Hope, resilience, and healing
          </span>
          <button onClick={() => setMuted(!muted)} className="hover:text-yellow-500 transition">
            {muted ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </button>
        </div>
      </div>

      {/* Fullscreen Navigation Overlay */}
      <div ref={overlayRef} className="fixed inset-0 flex flex-col z-30 items-center min-h-screen opacity-0">
        <nav className="flex flex-col w-full h-full ml-[140px]">
          {/* First 3 full-width items */}
          {MENU_ITEMS.slice(0, 3).map((item, i) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              ref={(el) => {
                itemsRef.current[i] = el;
              }}
              className="flex-1 relative flex items-center opacity-0 group"
              style={{ backgroundImage: `url(${item.image})`, backgroundSize: "cover", backgroundPosition: "center" }}
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300" />
              <span className="relative z-10 font-afolkalips px-10 py-5 text-center tracking-tight4 text-white leading-0 text-4xl sm:text-5xl md:text-[130px]">
                {item.label}
              </span>
            </a>
          ))}

          {/* Last row: 2-column grid */}
          <div className="flex flex-1 w-full">
            {MENU_ITEMS.slice(3).map((item, i) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                ref={(el) => {
                  itemsRef.current[i + 3] = el;
                }}
                className="flex-1 relative flex items-center text-center opacity-0 group"
                style={{ backgroundImage: `url(${item.image})`, backgroundSize: "cover", backgroundPosition: "center" }}
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300" />
                <span className="relative z-10 font-afolkalips tracking-tight4 text-center text-white text-4xl sm:text-5xl md:text-[130px] px-10 py-5">
                  {item.label}
                </span>
              </a>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
}
