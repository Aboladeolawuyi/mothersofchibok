"use client";

import Image from "next/image";
import { FaPlay, FaFilm } from "react-icons/fa";

const filmmakers = [
  {
    name: "Joel 'Kachi Benson",
    role: "Director",
    image: "/assets/images/joel-kachi.jpeg",
    bio: "Joel 'Kachi' Benson is an award-winning documentary filmmaker whose work sits at the intersection of storytelling and social impact. Africa's first Venice Lion recipient for Immersive Storytelling, and Nigeria's first Emmy-winning documentary filmmaker, Benson is internationally recognized for elevating African stories to the global stage. Mothers of Chibok is his second feature film.",
    videoUrl: "https://youtu.be/meeSw0mlPzM",
  },
  {
    name: "Joke Silva, MFR",
    role: "Executive Producer",
    image: "/assets/images/joke-silva.jpeg",
    bio: "Joke Silva, MFR, is one of Nigeria's most distinguished actors and cultural leaders, with a career spanning over four decades across stage and screen. A five-time Africa Movie Academy Award (AMAA) winner and co-founder of the Lufodo Group,a premier entertainment solutions group, she has played a defining role in shaping Nigeria's creative industry. She also serves as Executive Producer on Mothers of Chibok.                 ",
    videoUrl: "https://youtube.com/shorts/sVzu_T3SZ44?feature=share",
  },
];

const FilmmakersSection = () => {
  return (
    <section 
      id="filmmakers" 
      className="relative py-24 bg-fixed bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/images/moc-web-image-1.jpg')" }}
    >
      {/* Subtle overlay - more transparent to show background */}
      <div className="absolute inset-0 bg-black/75" />
      
      {/* Gradient overlays for depth */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-neutral-950 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-neutral-950 to-transparent" />
      
      {/* Subtle gold accent lines */}
      <div className="absolute left-8 md:left-16 top-1/4 w-px h-24 bg-gradient-to-b from-[#B89C58]/40 to-transparent" />
      <div className="absolute right-8 md:right-16 top-1/3 w-px h-24 bg-gradient-to-b from-[#B89C58]/40 to-transparent" />
      
      <div className="container mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#B89C58]/60" />
            <FaFilm className="text-[#B89C58] text-lg" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#B89C58]/60" />
          </div>
          <h2 className="text-5xl md:text-6xl font-guthenBloots text-white mb-3">
            From the <span className="text-[#B89C58]">Filmmakers</span>
          </h2>
          <p className="text-gray-400 font-productsFont">
            Meet the visionary creators behind Mothers of Chibok
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {filmmakers.map((filmmaker, index) => (
            <div 
              key={index}
              className="group relative"
            >
              {/* Subtle card glow */}
              <div className="absolute -inset-px bg-gradient-to-r from-[#B89C58]/20 via-[#D4AF37]/10 to-[#B89C58]/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative bg-neutral-900/80 backdrop-blur-md rounded-xl p-5">
                <div className="flex flex-col md:flex-row gap-5">
                  {/* Image Container */}
                  <div className="relative flex-shrink-0 mx-auto md:mx-0">
                    <div className="relative w-36 h-36 md:w-40 md:h-40 overflow-hidden rounded-full border-3 border-[#B89C58]/60 shadow-lg group-hover:shadow-[0_0_25px_rgba(184,156,88,0.25)] transition-shadow duration-500">
                      <Image
                        src={filmmaker.image}
                        alt={filmmaker.name}
                         fill
  className="object-cover object-[center_10%] group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 flex flex-col text-center md:text-left">
                    <h3 className="text-3xl md:text-4xl font-guthenBloots text-white mb-0.5 group-hover:text-[#D4AF37] transition-colors duration-300">
                      {filmmaker.name}
                    </h3>
                    
                    <p className="text-[#B89C58] font-productsFont font-medium mb-3">
                      {filmmaker.role}
                    </p>
                    
                    <p className="text-gray-300 font-productsFont text-sm leading-relaxed mb-4 flex-1">
                      {filmmaker.bio}
                    </p>
                    
                    {/* CTA Button */}
                    <a
                      href={filmmaker.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#B89C58] hover:bg-[#D4AF37] text-neutral-900 px-6 py-2.5 rounded-full transition-all duration-300 font-productsFont font-semibold text-sm group-hover:shadow-[0_0_20px_rgba(184,156,88,0.3)]"
                    >
                      <FaPlay className="text-xs" />
                      Watch Message
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom decorative element */}
        <div className="flex justify-center mt-12">
          <div className="flex items-center gap-3">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#B89C58]/40" />
            <div className="w-1.5 h-1.5 rotate-45 bg-[#B89C58]/60" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#B89C58]/40" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilmmakersSection;
