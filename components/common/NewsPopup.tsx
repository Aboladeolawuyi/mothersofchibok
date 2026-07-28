"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useState } from "react";

const POPUP_NEWS = {
  eyebrow: "Award news",
  title: "Mothers of Chibok wins the Willy Brandt Documentary Film Award",
  description:
    "Directed by Joel 'Kachi Benson and executive produced by Joke Silva and Uzo Aduba, the film was recognised at the Human Rights Film Festival in Berlin for its powerful storytelling and real-world impact on the Chibok community.",
  href: "https://www.thisdaylive.com/2026/04/28/mothers-of-chibok-wins-willy-brandt-documentary-award/",
  cta: "Read more",
};

export default function NewsPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const openTimer = window.setTimeout(() => setVisible(true), 700);
    const closeTimer = window.setTimeout(() => setVisible(false), 8500);

    return () => {
      window.clearTimeout(openTimer);
      window.clearTimeout(closeTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: -24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -24, scale: 0.98 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="
            fixed
            left-3
            right-3
            top-16
            z-[999]
            max-h-[72vh]
            overflow-y-auto
            rounded-2xl
            border
            border-white/15
            bg-black/40
            p-4
            text-white
            shadow-[0_18px_70px_rgba(0,0,0,0.55)]
            backdrop-blur-2xl

            sm:left-1/2
            sm:right-auto
            sm:top-20
            sm:w-[min(680px,calc(100vw-48px))]
            sm:-translate-x-1/2
            sm:rounded-3xl
            sm:p-6
          "
        >
          <button
            type="button"
            onClick={() => setVisible(false)}
            aria-label="Close news banner"
            className="
              absolute
              right-3
              top-3
              z-10
              rounded-full
              bg-white/15
              p-2
              text-white
              transition
              hover:bg-white/25
            "
          >
            <X className="h-4 w-4" />
          </button>

          <div className="pr-10">
            <p className="font-productsFont text-[10px] uppercase tracking-[0.26em] text-[#D4AF37] sm:text-xs sm:tracking-[0.35em]">
              {POPUP_NEWS.eyebrow}
            </p>

            <h2 className="mt-2 font-guthenBloots text-[34px] leading-[0.95] text-white sm:text-5xl">
              {POPUP_NEWS.title}
            </h2>
          </div>

          <p className="mt-3 font-productsFont text-[13px] leading-6 text-white/85 sm:text-base sm:leading-relaxed">
            {POPUP_NEWS.description}
          </p>

          <a
            href={POPUP_NEWS.href}
            onClick={() => setVisible(false)}
            target="_blank"
            rel="noopener noreferrer"
            className="
              mt-4
              inline-flex
              rounded-full
              bg-[#B89C58]
              px-4
              py-2
              font-productsFont
              text-xs
              font-bold
              text-black
              transition
              hover:bg-[#D4AF37]
              sm:mt-5
              sm:px-5
              sm:text-sm
            "
          >
            {POPUP_NEWS.cta}
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}