"use client";

import { useState } from "react";
import VideoBackground from "@/components/theFilm/VideoBackground";
import Header from "@/components/common/Header";
import TheFilmContent from "@/components/theFilm/TheFilmContent";
import TheFilmBox from "./common/theFilm";

function TheFilmSection() {
  // const [muted, setMuted] = useState(true);
  return (
    <main className="relative flex min-h-screen w-full overflow-hidden">
      <VideoBackground src="/assets/video/moc-the-film.mp4" muted/>
       <div className="absolute inset-0 bg-black/50 z-10" />
      <div>
          <TheFilmBox />
      </div>
    </main>
  );
}

export default TheFilmSection;
