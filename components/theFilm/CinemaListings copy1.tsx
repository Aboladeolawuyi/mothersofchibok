"use client";
import Image from "next/image";
const showtimesData = [
  { image: "/assets/images/showtimes.png", alt: "Showtimes - Cinema Listings" },
  {
    image: "/assets/images/showtimes-2.png",
    alt: "Showtimes - Cinema Listings 2",
  },
  {
    image: "/assets/images/showtimes-3.png",
    alt: "Showtimes - Cinema Listings 3",
  },
];
export default function CinemaListings() {
  return (
    <section className="bg-neutral-950 text-white py-16">
      {" "}
      <div className="max-w-full mx-auto px-2">
        {" "}
        {/* Section Header */}{" "}
        <header className="mb-12 text-center">
          {" "}
          <h2 className="lg:text-5xl text-3xl tracking-tight font-guthenBloots text-gray-200">
            {" "}
            Cinema <span className="text-[#B89C58]">Listings</span>{" "}
          </h2>{" "}
          <div className="mt-4 h-1 w-24 bg-amber-600 mx-auto"></div>{" "}
          <p className="mt-4 text-gray-400 font-productsFont text-lg">
            {" "}
            Catch "Mothers of Chibok" at a cinema near you{" "}
          </p>{" "}
        </header>{" "}
        {/* Showtimes Grid - Full width to show complete images */}{" "}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {" "}
          {showtimesData.map((showtime, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg border border-neutral-700 hover:border-amber-600/50 transition-all duration-500"
            >
              {" "}
              <div className="relative w-full aspect-[3/4]">
                {" "}
                <Image
                  src={showtime.image}
                  alt={showtime.alt}
                  fill
                  className="object-contain bg-neutral-900 transition-transform duration-500 group-hover:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={index < 2}
                />{" "}
              </div>{" "}
            </div>
          ))}{" "}
        </div>{" "}
        {/* Additional Info */}{" "}
        <div className="mt-12 text-center">
          {" "}
          <p className="text-gray-500 font-productsFont text-sm">
            {" "}
            For group bookings and private screenings, please contact the cinema
            directly{" "}
          </p>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}
