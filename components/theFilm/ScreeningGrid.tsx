import Image from "next/image";
import { Calendar } from "lucide-react";

const screenings = [
  // { date: "November 2026", label: "World Premiere", image: "/assets/images/moc-world-screening.png" },
  { date: "February 27 2026", label: "Africa Premiere Lagos", image: "/assets/images/moc-lagos-screening.png" },
  // { date: "February 2026", label: "Cape Town, South Africa", image: "/assets/images/moc-sa-screening.png" },
  // { date: "February 2026", label: "Johannesburg, South Africa", image: "/assets/images/moc-ja-screening.png" },
  // { date: "September 2026", label: "Kolne, Germany", image: "/assets/images/moc-ko-screening.png" },
];

export default function ScreeningGrid() {
  return (
    <div className="mt-16 px-6 max-w-6xl mx-auto pl-16 md:pl-20 lg:pl-6">
      <h3 className="text-white text-2xl font-semibold mb-8 text-left">
        Screening Dates
      </h3>

      {/* Grid with single card pushed to the right */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Empty first column to push card to the right */}
        <div></div>
        <div></div>
        
        {/* Card in the third column (right side) */}
        <div className="screening-card bg-white/5 overflow-hidden flex flex-col h-80">
          {/* Top: Image + Label */}
          <div className="flex-1 relative">
            {screenings[0].image && (
              <Image
                src={screenings[0].image}
                alt={screenings[0].label}
                fill
                className="object-cover"
              />
            )}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-4">
              <p className="text-white text-xl font-productsFont text-center leading-snug">
                {screenings[0].label}
              </p>
            </div>
          </div>

          {/* Bottom: Date */}
          <div className="bg-white font-productsFont tracking-tight3 flex flex-row items-center justify-center gap-3 p-5">
            <Calendar className="w-6 h-6 text-black" />
            <p className="text-lg text-black font-semibold">{screenings[0].date}</p>
          </div>
        </div>
      </div>

      {/* Press Mentions */}
      <div className="mt-8 mb-10">
        <div className="text-white text-base items-center flex gap-2">
          Press mentions
          <Image
            src="/assets/images/forward-arrow.png"
            alt="Mothers of Chibok"
            width={15}
            height={15}
            className="animate-pulse-custom"
          />
        </div>
      </div>
    </div>
  );
}
