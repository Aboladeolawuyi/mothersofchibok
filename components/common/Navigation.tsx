"use client";

import gsap from "gsap";
import { Volume2, VolumeX, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import PressMentions from "@/components/theImpact/PressMentions";

interface NavigationProps {
  muted: boolean;
  setMuted: (value: boolean) => void;
}

type LinkMenuItem = {
  label: string;
  eyebrow: string;
  image: string;
  href: string;
  type: "link";
};

type DialogMenuItem = {
  label: string;
  eyebrow: string;
  image: string;
  type: "press-dialog";
};

type MenuItem = LinkMenuItem | DialogMenuItem;

const MENU_ITEMS: MenuItem[] = [
  {
    label: "About the Film",
    eyebrow: "Trailer, story, characters and filmmakers",
    image: "/assets/images/moc-the-film-bckground.png",
    href: "#film",
    type: "link",
  },
  {
    label: "About the Impact",
    eyebrow: "Beneficiaries, goals and farming cycle",
    image: "/assets/images/moc-the-impact-bckground.png",
    href: "#impact",
    type: "link",
  },
  {
    label: "Explore the Products",
    eyebrow: "Products, support and partners",
    image: "/assets/images/moc-donate-bckground.png",
    href: "#products",
    type: "link",
  },
  {
    label: "Awards",
    eyebrow: "Recognition and honours",
    image: "/assets/images/moc-web-image-2.jpg",
    href: "#awards",
    type: "link",
  },
  {
    label: "Support",
    eyebrow: "Donate, partner or order",
    image: "/assets/images/productlaunch/9d4a3698.jpg",
    href: "#support",
    type: "link",
  },
  {
    label: "Contact",
    eyebrow: "Reach the team",
    image: "/assets/images/moc-web-image-2.jpg",
    href: "#contact",
    type: "link",
  },
  {
    label: "Press Mentions",
    eyebrow: "Media coverage and interviews",
    image: "/assets/images/lydia-yama-moc.jpg",
    type: "press-dialog",
  },
];

export default function Navigation({ muted, setMuted }: NavigationProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [pressDialogOpen, setPressDialogOpen] = useState(false);

  const overlayRef = useRef<HTMLDivElement | null>(null);
  const itemsRef = useRef<(HTMLElement | null)[]>([]);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    document.body.style.overflow = menuOpen || pressDialogOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen, pressDialogOpen]);

  useEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay) return;

    gsap.killTweensOf(overlay);

    if (menuOpen) {
      gsap.set(overlay, { y: "-100%", autoAlpha: 1 });

      gsap.to(overlay, {
        y: "0%",
        duration: 0.65,
        ease: "power3.out",
      });

      gsap.fromTo(
        itemsRef.current.filter(Boolean),
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.55,
          stagger: 0.07,
          ease: "power3.out",
          delay: 0.12,
        }
      );
    } else {
      gsap.to(overlay, {
        y: "-100%",
        duration: 0.5,
        ease: "power3.inOut",
        onComplete: () => {
          gsap.set(overlay, { autoAlpha: 0 });
        },
      });
    }
  }, [menuOpen]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = muted;
    }
  }, [muted]);

  useEffect(() => {
    const handleInteraction = () => {
      audioRef.current?.play().catch(() => undefined);
      document.removeEventListener("click", handleInteraction);
    };

    document.addEventListener("click", handleInteraction);

    return () => {
      document.removeEventListener("click", handleInteraction);
    };
  }, []);

  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setPressDialogOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  const openPressDialog = () => {
    setMenuOpen(false);
    setPressDialogOpen(true);
  };

  const closePressDialog = () => {
    setPressDialogOpen(false);
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/assets/audio/mothersofchibok.mp3"
        loop
        autoPlay
        playsInline
        muted={muted}
      />

      <div className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-5 py-4 text-white sm:px-8 lg:px-14">
        <a
          href="#landing-section"
          className="font-productsFont text-xs font-medium tracking-[-0.02em] drop-shadow transition hover:text-[#D4AF37] sm:text-sm"
        >
          Mothers of Chibok
        </a>

        <button
          type="button"
          onClick={() => setMenuOpen((value) => !value)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="group flex items-center gap-2 rounded-full border border-white/20 bg-black/25 px-4 py-2 font-productsFont text-xs font-medium text-white backdrop-blur-md transition hover:border-[#D4AF37]/60 hover:bg-black/45 sm:text-sm"
        >
          <span>Menu</span>

          {menuOpen ? (
            <X size={18} />
          ) : (
            <Image
              src="/assets/images/menu-icon.png"
              alt=""
              width={18}
              height={18}
              className="invert"
            />
          )}
        </button>

        <div className="flex items-center gap-2">
          <a
            href="#support"
            className="rounded-full bg-[#B89C58] px-5 py-2.5 font-productsFont text-xs font-semibold text-black transition hover:bg-white sm:px-6 sm:text-sm"
          >
            Support
          </a>

          <button
            type="button"
            onClick={() => setMuted(!muted)}
            aria-label={muted ? "Unmute sound" : "Mute sound"}
            className="hidden rounded-full border border-white/20 bg-black/25 p-2.5 text-white backdrop-blur-md transition hover:border-[#D4AF37]/60 hover:bg-black/45 sm:inline-flex"
          >
            {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
          </button>
        </div>
      </div>

     <div
  ref={overlayRef}
  className="fixed inset-0 z-40 min-h-screen overflow-y-auto overscroll-contain bg-neutral-950 opacity-0 [-webkit-overflow-scrolling:touch]"
>
  <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top_left,rgba(184,156,88,0.28),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_35%)]" />

  <nav className="relative grid min-h-screen grid-cols-1 pt-20 pb-10 sm:grid-cols-2 lg:grid-cols-3 lg:h-screen lg:pb-0">
    {MENU_ITEMS.map((item, index) => {
      if (item.type === "press-dialog") {
        return (
          <button
            key={item.label}
            type="button"
            onClick={openPressDialog}
            ref={(el) => {
              itemsRef.current[index] = el;
            }}
            className="group relative flex min-h-[140px] w-full items-end overflow-hidden border border-white/10 p-6 text-left opacity-0 sm:min-h-[220px] lg:min-h-0 lg:p-10"
          >
            <Image
              src={item.image}
              alt=""
              fill
              className="object-cover opacity-70 transition duration-700 group-hover:scale-105 group-hover:opacity-90"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/15 transition group-hover:via-black/35" />

            <div className="relative z-10">
              <p className="mb-3 font-productsFont text-xs uppercase tracking-[0.28em] text-[#D4AF37]">
                {item.eyebrow}
              </p>

              <h2 className="font-guthenBloots text-5xl leading-none text-white sm:text-6xl lg:text-7xl">
                {item.label}
              </h2>
            </div>
          </button>
        );
      }

      return (
        <a
          key={item.label}
          href={item.href}
          onClick={() => setMenuOpen(false)}
          ref={(el) => {
            itemsRef.current[index] = el;
          }}
          className="group relative flex min-h-[140px] items-end overflow-hidden border border-white/10 p-6 opacity-0 sm:min-h-[220px] lg:min-h-0 lg:p-10"
        >
          <Image
            src={item.image}
            alt=""
            fill
            className="object-cover opacity-70 transition duration-700 group-hover:scale-105 group-hover:opacity-90"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/15 transition group-hover:via-black/35" />

          <div className="relative z-10">
            <p className="mb-3 font-productsFont text-xs uppercase tracking-[0.28em] text-[#D4AF37]">
              {item.eyebrow}
            </p>

            <h2 className="font-guthenBloots text-5xl leading-none text-white sm:text-6xl lg:text-7xl">
              {item.label}
            </h2>
          </div>
        </a>
      );
    })}
  </nav>
</div>

      {pressDialogOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Press Mentions"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              closePressDialog();
            }
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 px-3 py-4 backdrop-blur-sm sm:px-6"
        >
          <div className="relative h-[94vh] w-full max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-neutral-950 shadow-2xl shadow-black/60">
            <div className="sticky top-0 z-30 flex items-center justify-between border-b border-white/10 bg-neutral-950/95 px-4 py-4 backdrop-blur sm:px-6">
              <div>
                <p className="font-productsFont text-xs uppercase tracking-[0.25em] text-[#D4AF37]">
                  Mothers of Chibok
                </p>
                <h2 className="font-productsFont text-lg font-bold text-white sm:text-xl">
                  Press Mentions
                </h2>
              </div>

              <button
                type="button"
                onClick={closePressDialog}
                aria-label="Close Press Mentions"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-black shadow-lg transition hover:scale-105 hover:bg-[#D4AF37]"
              >
                <X size={22} />
              </button>
            </div>

            <div className="h-[calc(94vh-81px)] overflow-y-auto overscroll-contain">
              <PressMentions inDialog />
            </div>
          </div>
        </div>
      )}
    </>
  );
}