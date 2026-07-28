"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const SHOWTIMES_DATA: Record<string, string[]> = {
  "Week 1": [
    "/assets/images/showtimes.png",
    "/assets/images/showtimes-2.png",
    "/assets/images/showtimes-3.png",
  ],
  "Week 2": [

    "/assets/images/sh1.png",
    "/assets/images/sh2.png",
   
  ],
  // "Week 3": [

  //   "/assets/images/showtimes-3.png",
  //   "/assets/images/showtimes.png",
  //   "/assets/images/showtimes-2.png"

  // ],
};

export default function CinemaListings() {
  const weeks = Object.keys(SHOWTIMES_DATA);
  const [activeWeek, setActiveWeek] = useState<string>(weeks[0]);

  return (
    <section className="bg-neutral-950 text-white py-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <header className="mb-16 text-center">
          <h2 className="lg:text-5xl text-3xl tracking-tight font-guthenBloots text-gray-200">
            Cinema <span className="text-[#B89C58]">Listings</span>
          </h2>
          <div className="mt-4 h-1 w-24 bg-[#B89C58] mx-auto"></div>
          <p className="mt-6 text-gray-400 font-productsFont text-lg">
            Catch "Mothers of Chibok" at a cinema near you
          </p>
        </header>

        {/* Week Buttons */}
        <div className="flex justify-center gap-4 mb-16 flex-wrap">
          {weeks.map((week) => (
            <button
              key={week}
              onClick={() => setActiveWeek(week)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${activeWeek === week
                  ? "bg-[#B89C58] text-black"
                  : "bg-neutral-800 text-gray-300 hover:bg-neutral-700 border border-neutral-700"
                }`}
            >
              {week}
            </button>
          ))}
        </div>

        {/* Listings Grid */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeWeek}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              {SHOWTIMES_DATA[activeWeek].map((image, index) => (
                <div
                  key={index}
                  className="relative group overflow-hidden rounded-xl border border-neutral-800 hover:border-[#B89C58]/60 transition-all duration-500"
                >
                  <div className="relative w-full aspect-[3/4] bg-neutral-900">
                    <Image
                      src={image}
                      alt={`${activeWeek} listing ${index + 1}`}
                      fill
                      className="object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>

                  {/* Subtle gold glow on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-[#B89C58]/10 via-transparent to-transparent" />
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Footer Info */}
        <div className="mt-20 text-center">
          <p className="text-gray-500 font-productsFont text-sm">
            For group bookings and private screenings, please contact the cinema directly.
          </p>
        </div>
      </div>

      {/* Very subtle cinematic background accent */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#B89C58] via-transparent to-transparent" />
      </div>
    </section>
  );
}