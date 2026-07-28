"use client";

import Image from "next/image";

const mothersData = [
  {
    image: "/assets/images/posters/YANA.jpeg",
    name: "Yana Galang",
    role: "Farmer/Community Leader",
    text: `Yana's story is one of unwavering belief, the kind that endures long after the headlines fade. She is the heart of her community - a mother, a leader, and a woman who has refused to give up. Her daughter, Rifkatu, was among the 276 girls kidnapped from Chibok in 2014. And while others have returned, Yana is still waiting. And then, one day, she receives a phone call. One that could change everything.`,
  },
  {
    image: "/assets/images/posters/lydia.jpeg",
    name: "Lydia Yama",
    role: "Mother/Farmer",
    text: `Lydia, calm and reserved, is raising her children with a quiet yet fierce sense of purpose. Her younger sister was taken in the same school abduction, and the weight of that loss sits heavy on her. She listens, she adapts, and she shows us that resilience doesn't always shout. Sometimes, it simply carries on.`,
  },
  {
    image: "/assets/images/posters/Ladi.jpeg",
    name: "Ladi Lawan",
    role: "Mother/Teacher/Farmer",
    text: `Ladi's daughter, Aisha, was taken in the Chibok school abduction, yet every morning, Ladi shows up to teach other girls the value of education. She disciplines with love, nurtures with intention, and works her fields so her youngest children can stay in school. But grief lingers quietly beneath her strength, a shadow she carries through every lesson. How long can she keep pouring into other daughters, while her own is still lost in the forest, somewhere beyond reach?`,
  },
  {
    image: "/assets/images/posters/MARYAM.jpeg",
    name: "Maryam Ali",
    role: "Mother/Student",
    text: `Maryam is one of the kidnapped Chibok girls who made it back. She returned from captivity with a child, a boy named Ali, born of violence, rejection, and survival. Now enrolled in university, Maryam is fighting to reclaim her future, one class, one exam, one dream at a time. But back in the village, there's no one to care for Ali. And so Maryam faces an impossible choice: Will she walk toward the life she's worked so hard to build or return home to be the only mother her son has ever known?`,
  },
];

export default function PostersSection() {
  return (
    <section className="bg-neutral-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Grid of 4 posters with hover effect */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {mothersData.map((mother, index) => (
            <div
              key={index}
              className="relative group overflow-hidden cursor-pointer"
            >
              <Image
                src={mother.image}
                alt={mother.name}
                width={300}
                height={600}
                className="w-full h-[600px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Overlay with text on hover */}
              <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-center p-6">
                <h3 className="text-5xl font-guthenBloots font-semibold underline mb-2">
                  {mother.name}
                </h3>
                <p className="text-sm text-gray-300 mb-3">{mother.role}</p>
                <p className="text-lg leading-snug">{mother.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
