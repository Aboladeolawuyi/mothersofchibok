"use client"
import Header from "@/components/common/Header";
import Navigation from "@/components/common/Navigation";
import TheFilm from "@/components/common/theFilm";
import { useState } from "react";

export default function TheFilmPage() {
  const [muted, setMuted] = useState(true);

  return (
    <main className="relative flex min-h-screen w-full overflow-hidden">
      {/* 🔹 Fixed Video Background */}
      <video
        autoPlay
        loop
        muted={muted}
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src="/assets/video/moc-the-film.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🔹 Dark Overlay (optional for readability) */}
      <div className="fixed inset-0 bg-black/40 -z-10" />

      {/* 🔹 Foreground Content */}
      <div className="relative flex w-full">
        {/* Sidebar Navigation */}
        <div className="w-[75px]">
          <Navigation muted={muted} setMuted={setMuted} />
        </div>

        {/* Page Content */}
        <div className="w-full">
          <Header />
          <TheFilm />
        </div>
      </div>
    </main>
  );
}