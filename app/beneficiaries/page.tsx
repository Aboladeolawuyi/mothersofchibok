"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { dancingScript } from "@/app/fonts";
import { BeneficiaryDialog, allBeneficiaries, Beneficiary } from "@/components/theImpact/BeneContent";

export default function AllBeneficiariesPage() {
  const [selected, setSelected] = useState<Beneficiary | null>(null);

  return (
    <main className="min-h-screen bg-[#f7f5ef] px-3 py-4 text-neutral-950 sm:px-6 sm:py-6 lg:px-12">
      <section className="mx-auto max-w-[1480px] overflow-hidden rounded-[28px] bg-neutral-950 text-white sm:rounded-[34px]">
        <div className="relative px-5 py-9 sm:px-10 lg:px-16 lg:py-16">
          <div
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage: "url('/assets/images/moc-background-dark.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          <div className="relative z-10">
            <Link
              href="/#beneficiaries"
              className="font-productsFont text-sm text-[#D4AF37] underline underline-offset-4"
            >
              ← Back to main website
            </Link>

            <header className="mt-10 flex justify-center text-center">
              <div className="max-w-3xl">
                <p className="font-productsFont italic text-3xl sm:text-3xl md:text-2xl">
                  Stories of Resilience and Hope
                </p>

                <h3 className="mt-5 text-4xl leading-tight sm:text-5xl md:text-6xl">
                  
                    <span className="font-guthenBloots">From </span>
                  
                  <span
                    className={`${dancingScript.className} font-black italic text-5xl sm:text-6xl md:text-6xl [-webkit-text-stroke:1.2px_currentColor]`}
                  >
                    9
                  </span>
                  
                  <span className="font-guthenBloots"> to </span>
                  
                  <span
                    className={`${dancingScript.className} font-black italic text-5xl sm:text-6xl md:text-6xl [-webkit-text-stroke:1.2px_currentColor]`}
                  >
                   50
                  </span>
                  
                    <span className="font-guthenBloots"> Women</span>
                </h3>
              </div>
            </header>
          </div>
        </div>

        <div className="grid gap-4 px-5 pb-10 sm:grid-cols-2 sm:px-10 lg:grid-cols-4 lg:px-16 lg:pb-16">
          {allBeneficiaries.map((beneficiary) => (
            <button
              key={beneficiary.id}
              onClick={() => setSelected(beneficiary)}
              className="group overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.04] text-left transition hover:-translate-y-1 hover:border-[#B89C58]/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B89C58]"
            >
              <div className="relative h-72 overflow-hidden sm:h-80">
                <Image
                  src={beneficiary.src}
                  alt={beneficiary.name}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="font-productsFont text-[10px] uppercase tracking-[0.28em] text-[#D4AF37]">
                    Beneficiary {String(beneficiary.id).padStart(2, "0")}
                  </p>

                  <h2 className="mt-2 font-productsFont text-lg font-bold text-white">
                    {beneficiary.name}
                  </h2>

                  <span className="mt-4 inline-flex rounded-full bg-white/90 px-4 py-2 font-productsFont text-xs font-semibold text-black transition group-hover:bg-[#B89C58]">
                    Read story
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {selected && (
        <BeneficiaryDialog
          beneficiary={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </main>
  );
}