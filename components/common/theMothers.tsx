"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface MotherSectionProps {
  image: string;
  alt: string;
  name: string;
  role: string;
  text: string;
  reverse?: boolean;
}

function MotherSection({
  image,
  alt,
  name,
  role,
  text,
  reverse,
}: MotherSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      ref={sectionRef}
      className="mother-section container m-auto px-8 lg:px-34 py-8 sm:py-12"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        <div
          className={`order-1 lg:col-span-4 ${
            reverse ? "lg:order-2" : "lg:order-1"
          }`}
        >
          <Image
            src={image}
            alt={alt}
            width={500}
            height={500}
            className="w-full h-auto object-cover"
          />
        </div>

        <div
          className={`order-2 lg:col-span-8 ${
            reverse ? "lg:order-1 lg:text-right" : "lg:order-2 lg:text-left"
          }`}
        >
          <h1 className="text-2xl lg:text-5xl mb-4 font-guthenBloots">
            {name}{" "}
            <span className="text-xl lg:text-2xl text-gray-400">{role}</span>
          </h1>
          {mounted ? (
            <p
              className="font-productsFont text-lg lg:text-xl tracking-tight leading-relaxed"
              dangerouslySetInnerHTML={{ __html: text }}
            />
          ) : (
            <p className="font-productsFont text-lg lg:text-xl tracking-tight leading-relaxed" />
          )}
        </div>
      </div>
    </div>
  );
}


export default function TheMothers() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const sections = gsap.utils.toArray<HTMLElement>(".mother-section");

    gsap.fromTo(
      sections,
      { autoAlpha: 0, y: 50 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.4,
        scrollTrigger: {
          trigger: ".mother-section",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div className=" text-white space-y-20">
      <header className="border-b p-10 lg:p-16 flex justify-between items-center">
        <div className="lg:text-[70px] text-[40px] tracking-tight4 leading-0 font-guthenBloots text-gray-200">
          The Mothers
        </div>
      </header>
      <div className="container m-auto max-w-7xl">
        <p className="lg:text-center px-8 font-productsFont text-lg lg:text-2xl tracking-tight leading-relaxed">
          They are mothers, sisters, teachers, and daughters, women whose lives were forever altered by 
          the tragedy in Chibok. But this is not just a story of loss. It's a story of what happens after. 
          Each woman carries a different piece of this shared grief, and yet, through farming, teaching, 
          studying, and mothering, they also carry something else: an unshakable will to keep going.
          Together, their stories reveal not just the aftermath of abduction, but the quiet, 
          everyday acts of courage it takes to heal, to lead, and to hope — even when the world
          has stopped watching.
        </p>
      </div>
      <MotherSection
        image="/assets/images/yana-galang-moc.jpg"
        alt="Yana Galang Mothers of Chibok"
        name="Yana Galang"
        role="Farmer/Community Leader"
        text={`<p>
          Yana's story is one of unwavering belief, the kind that endures long after the headlines fade. 
          She is the heart of her community - a mother, a leader, and a woman who has refused to give up. 
          Her daughter, Rifkatu, was among the 276 girls kidnapped from Chibok in 2014. 
          And while others have returned, Yana is still waiting. And then, one day, she receives a phone call. 
          One that could change everything.
        </p>`}
      />

      <MotherSection
        image="/assets/images/lydia-yama-moc.jpg"
        alt="Lydia Yama Mothers of Chibok"
        name="Lydia Yama"
        role="Mother/Farmer"
        text={`<p>
          Lydia, calm and reserved, is raising her children with a quiet yet fierce sense of purpose. 
          Her younger sister was taken in the same school abduction, and the weight of that loss sits heavy on her. 
          She listens, she adapts, and she shows us that resilience doesn't always shout. Sometimes, it simply carries on.
        </p>`}
        reverse
      />

      <MotherSection
        image="/assets/images/ladi-lawan-moc.jpg"
        alt="Ladi Lawan Mothers of Chibok"
        name="Ladi Lawan"
        role="Mother/Teacher/Farmer"
        text={`<p>
          Ladi's daughter, Aisha, was taken in the Chibok school abduction, yet every morning, 
          Ladi shows up to teach other girls the value of education. She disciplines with love, 
          nurtures with intention, and works her fields so her youngest children can stay in school. 
          But grief lingers quietly beneath her strength, a shadow she carries through every lesson. 
          How long can she keep pouring into other daughters, while her own is still lost in the forest, somewhere beyond reach?
        </p>`}
      />

      <MotherSection
        image="/assets/images/maryam-ali-moc.jpg"
        alt="Maryam Ali Mothers of Chibok"
        name="Maryam Ali"
        role="Mother/Student"
        text={`<p>
          Maryam is one of the kidnapped Chibok girls who made it back. 
          She returned from captivity with a child, a boy named Ali, born of violence, rejection, and survival. 
          Now enrolled in university, Maryam is fighting to reclaim her future, one class, one exam, one dream at a time. 
          But back in the village, there's no one to care for Ali. 
          And so Maryam faces an impossible choice: Will she walk toward the life she's worked so hard to 
          build or return home to be the only mother her son has ever known?
        </p>`}
        reverse
      />
    </div>
  );
}
