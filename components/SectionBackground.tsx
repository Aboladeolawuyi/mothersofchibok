"use client";

import React from "react";

export type SectionWithBackgroundProps = {
  id?: string;
  children?: React.ReactNode;
  backgroundImage?: string;
  videoSrc?: string;
  overlay?: boolean;
  className?: string;
};

export default function SectionWithBackground({
  id,
  children,
  backgroundImage,
  videoSrc,
  overlay = false,
  className = "",
}: SectionWithBackgroundProps) {
  return (
    <section
      id={id}
      className={`relative flex items-center justify-center  bg-cover bg-center ${className}`}
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
      }}
    >
      {/* Background Video */}
      {videoSrc && (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute h-full w-full inset-0 object-cover -z-10"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}

      {/* Overlay */}
      {overlay && (
        <div className="absolute inset-0 bg-black opacity-50 transition-opacity duration-1000 -z-10" />
      )}

      {/* Foreground content */}
      <div className="relative w-full">{children}</div>
    </section>
  );
}
