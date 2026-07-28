"use client"
import Header from "@/components/common/Header";
import Navigation from "@/components/common/Navigation";
import TheMothers from "@/components/common/theMothers";
import { useState } from "react";

export default function TheMothersPage() {
  const [muted, setMuted] = useState(true);

  return (
    <main className="relative flex min-h-screen w-full overflow-hidden">
      {/* Fixed Image Background */}
      <div
        className="fixed top-0 left-0 w-full h-full bg-cover bg-center -z-10"
        style={{ backgroundImage: "url('/assets/images/moc-the-mothers-background.jpg')" }}
      />

      {/* Dark Overlay (for readability) */}
      <div className="fixed inset-0 bg-black/75 -z-10" />

      {/* Foreground Content */}
      <div className="relative flex w-full">
        {/* Sidebar Navigation */}
        <div className="w-[75px]">
          <Navigation muted={muted} setMuted={setMuted} />
        </div>

        {/* Page Content */}
        <div className="w-full">
          <Header />
          <TheMothers />
        </div>
      </div>
    </main>
  );
}
