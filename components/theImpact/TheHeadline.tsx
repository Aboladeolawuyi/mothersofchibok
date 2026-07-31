"use client";
import { greatVibes } from "@/app/fonts";
import { dancingScript } from "@/app/fonts";

const stats = [
  { value: "9", label: "Women supported in the 2025 pilot" },
  { value: "50", label: "Women supported in 2026" },
  { value: "140%+", label: "Projected harvest increase" },
];

export default function TheHeadline() {
  return (
    <section className="relative overflow-hidden bg-neutral-950 px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(184,156,88,0.1),transparent_40%)]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="max-w-4xl">
          <p className="font-productsFont text-xs uppercase tracking-[0.32em] text-[#B89C58]">
            About the Impact
          </p>

          <h2 className="mt-4 font-guthenBloots text-5xl leading-none sm:text-6xl md:text-7xl">
            The Impact
          </h2>

          <p className="mt-6 font-productsFont text-base leading-8 text-white/75 sm:text-lg sm:leading-9">
            When the headlines faded, the mothers of Chibok were left with
            their memories, their farms, and a strong belief in the value of
            education. For them, sending their children to school is more than a
            goal — it is a commitment to a better future.
          </p>
        </div>

        <div className="mt-9 grid grid-cols-3 gap-2 sm:gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-[18px] border border-white/10 bg-white/[0.035] p-3 text-center sm:rounded-[22px] sm:p-5"
            >
              <h3
                className={`${dancingScript.className} font-black italic text-3xl sm:text-4xl md:text-3xl [-webkit-text-stroke:1px_currentColor]`}
              >
                {stat.value}
              </h3>

              <p className="mt-3 font-guthenBloots text-xl leading-6 text-white/70 sm:mt-4 sm:text-2xl sm:leading-7 md:text-3xl md:leading-8">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <article className="rounded-[24px] border border-white/10 bg-white/[0.03] p-6 sm:p-7">
            <h3 className="font-guthenBloots text-4xl leading-none sm:text-5xl">
              The Chibok Groundnut Initiative
            </h3>

            <p className="mt-5 font-productsFont text-base leading-8 text-white/72">
              The Chibok Groundnut Initiative was created to support that
              commitment. By helping women farmers improve their harvests and
              earn more from their work, the initiative aims to increase
              household income, support children&apos;s education, and create
              long-term economic opportunities.
            </p>
          </article>

          <article className="rounded-[24px] border border-white/10 bg-white/[0.03] p-6 sm:p-7">
            <h4 className="text-4xl leading-none sm:text-5xl">
              <span className="font-guthenBloots">From </span>

              <span
                className={`${dancingScript.className} font-black italic text-5xl sm:text-5xl md:text-4xl [-webkit-text-stroke:1.2px_currentColor]`}
              >
                9
              </span>

              <span className="font-guthenBloots"> to </span>

              <span
                className={`${dancingScript.className} font-black italic text-5xl sm:text-5xl md:text-4xl [-webkit-text-stroke:1.2px_currentColor]`}
              >
                50
              </span>

              <span className="font-guthenBloots"> Women</span>

            </h4>

            <p className="mt-5 font-productsFont text-base leading-8 text-white/72">
              In 2025, the pilot phase supported nine women farmers in Chibok
              with improved seeds, fertilizers, herbicides, mechanized farming
              tools, and agricultural training. In 2026, the initiative expanded
              from 9 to 50 women farmers.
            </p>
          </article>
        </div>

        <div className="mt-5 rounded-[24px] border border-white/10 bg-black/30 p-6 sm:p-7">
          <h3 className="font-productsFont text-xs uppercase tracking-[0.28em] text-[#B89C58]">
            Pilot Result
          </h3>

          <p className="mt-4 font-productsFont text-base leading-8 text-white/72">
            During the baseline assessment, the women harvested 88 bags of groundnuts from 465.2 kg of seed planted across 8.56 hectares. For the 2025 farming season, the harvest target was 214 bags from 342.4 kg of seed planted across the same 8.56 hectares. By the end of the harvest season, the women had harvested 176.25 bags, achieving 82% of the target while doubling the baseline harvest.
          </p>
        </div>
      </div>
    </section>
  );
}