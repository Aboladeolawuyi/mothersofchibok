import { useEffect, RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useTheFilmAnimations(containerRef: RefObject<HTMLDivElement>) {
  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Animate sentences
      gsap.utils.toArray<HTMLElement>(".section-text").forEach((p) => {
        const sentences = p.querySelectorAll<HTMLElement>(".sentence");
        const count = sentences.length;
        const stagger = count > 6 ? 0.08 : 0.15;

        gsap.fromTo(
          sentences,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            stagger,
            scrollTrigger: {
              trigger: p,
              start: "top 85%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      });

      // Fade+scale images
      gsap.utils.toArray<HTMLElement>(".section-image").forEach((img) => {
        gsap.fromTo(
          img,
          { opacity: 0, scale: 0.95 },
          {
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: img,
              start: "top 90%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      });

      // Section cascade
      gsap.utils.toArray<HTMLElement>(".section-block").forEach((section, i) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            delay: i * 0.3,
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      });

      // Fade in screening cards
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
              toggleActions: "play reverse play reverse",
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, [containerRef]);
}
