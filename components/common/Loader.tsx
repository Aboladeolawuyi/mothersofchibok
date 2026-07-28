"use client";

import gsap from "gsap";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";

interface LoaderProps {
  onFinish: () => void;
}

// Cloudinary Video URL
const LOADER_VIDEO_URL = "https://res.cloudinary.com/davm498td/video/upload/v1772587361/moc-loader-background_yvvokx.mp4";

export default function Loader({ onFinish }: LoaderProps) {
  const lineRef = useRef<HTMLDivElement | null>(null);
  const paragraphRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const logoRef = useRef<HTMLImageElement | null>(null);
  const loadingTextRef = useRef<HTMLSpanElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const paragraphs = [
    "In a small village in Northeast Nigeria, a community of mothers forge a path forward after the tragic events of April 2014 when their daughters were kidnapped by Boko Haram. The film follows four mothers over a farming season as they fight for their children and their futures.",
    "The media may have moved on from this once global topic, but the women continue to persevere in the face of great tragedy. Mothers of Chibok paints a visceral portrait of courage, faith, and the enduring power of hope.",
  ];

  useEffect(() => {
    const tl = gsap.timeline({
      onUpdate: () => {
        const progress = tl.progress();
        if (lineRef.current) {
          gsap.set(lineRef.current, { scaleY: progress });
        }
        if (loadingTextRef.current) {
          gsap.set(loadingTextRef.current, { opacity: 1 - progress });
        }
      },
    });

    // Logo in
    tl.fromTo(
      logoRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1, ease: "back.out(1.7)" }
    );

    // Pulse effect
    tl.to(logoRef.current, {
      scale: 1.1,
      duration: 0.8,
      yoyo: true,
      repeat: 2,
      ease: "power1.inOut",
    });

    // Logo out
    tl.to(logoRef.current, {
      opacity: 0,
      duration: 0.8,
      ease: "power2.inOut",
    });

    // Animate paragraphs
    const els = paragraphRefs.current.filter(Boolean) as HTMLParagraphElement[];
    tl.fromTo(
      els,
      { opacity: 0, y: 10 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        stagger: 1.2,
      }
    );

    // Button in
    tl.fromTo(
      buttonRef.current,
      { y: 20, opacity: 0, scale: 0.9 },
      { y: 0, opacity: 1, duration: 1.2, ease: "back.out(1.7)" }
    );
  }, []);

  const handleExit = () => {
    if (!containerRef.current) {
      onFinish();
      return;
    }
    gsap.to(containerRef.current, {
      opacity: 0,
      duration: 1,
      ease: "power2.inOut",
      onComplete: onFinish,
    });
  };

  return (
    <div
      ref={containerRef}
      className="relative w-screen h-screen overflow-hidden"
    >
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src={LOADER_VIDEO_URL}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Line + Loading */}
      <div className="absolute left-5 lg:left-8 top-0 bottom-0 flex flex-col items-center px-4">
        <div
          ref={lineRef}
          className="w-px h-full bg-white origin-bottom scale-y-0"
        />
        <span
          ref={loadingTextRef}
          className="absolute px-2 -left-12 bottom-7 -translate-y-1/2 -rotate-90 font-hahmlet font-thin text-[13px] text-gray-300"
        >
          Loading
        </span>
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-white">
        {/* Logo */}
        <div
          ref={logoRef}
          className="absolute inset-0 flex items-center justify-center opacity-0 z-20"
        >
          <Image
            src="/assets/images/moc-logo.png"
            alt="Mothers of Chibok Awards"
            width={50}
            height={50}
          />
        </div>

        {/* Paragraphs */}
        <div className="max-w-4xl text-center text-[11px] lg:text-[16px] text-white font-hahmlet font-thin leading-relaxed tracking-tight space-y-4 px-8">
          {paragraphs.map((text, i) => (
            <p
              key={i}
              ref={(el) => {
                paragraphRefs.current[i] = el;
              }}
              className="opacity-0"
            >
              {text}
            </p>
          ))}
        </div>

        {/* Button */}
        <div className="absolute bottom-2 flex flex-col items-center z-30">
          <button
            ref={buttonRef}
            onClick={handleExit}
            className="relative px-6 py-3 flex items-center gap-3 text-md text-white transition-opacity opacity-0 font-productsFont tracking-tight4 group"
          >
            Enter the site{" "}
            <ArrowRight className="w-4 h-4 bg-white rounded-full text-black" />
            <span className="absolute left-6 right-6 bottom-4 h-0 bg-white transition-all duration-300 origin-bottom group-hover:h-[1px] group-hover:w-[94px]"></span>
          </button>
        </div>
      </div>
    </div>
  );
}