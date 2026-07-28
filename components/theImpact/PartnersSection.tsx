"use client";

import { motion } from "framer-motion";

const partners = [
  {
    name: "Impact Partners",
    logo: "/assets/images/impactLogo_white.png",
    description:
      "Impact Partners supports documentary filmmakers through funding, creative partnerships, and producer development, championing stories that inspire dialogue and drive social change.",
  },
  {
    name: "Hunting Lane",
    logo: "/assets/images/hl-box-logo.png",
    description:
      "Hunting Lane is a film production company focused on developing and producing documentary and narrative stories with cultural and social impact.",
  },
  {
    name: "JB Multimedia Studios",
    logo: "/assets/images/Jb-multimedia-logo.png",
    description:
      "Nigeria's first Emmy winner and Africa's first Venice Lion winner, JB Multimedia Studios uses immersive storytelling to drive real social impact.",
  },
  {
    name: "Uwaosi Rhoda Foundation",
    logo: "/assets/images/uwaosi-foundation-logo.png",
    description:
      "The Uwaosi Rhoda Foundation empowers women, children, and underserved communities through education and livelihood programmes, including the Chibok Groundnut Initiative, which helps women farmers scale their farming and fund their children's education.",
  },
  {
    name: "Zenfix",
    logo: "/assets/images/zenfix-logo.png",
    description:
      "Zenfix is a Nigerian food company transforming locally sourced groundnuts into nutritious, great-tasting snacks, creating value for consumers and impact across the entire farming and food value chain.",
  },
  {
    name: "Nutzy",
    logo: "/assets/images/nutzy-logo.png",
    description:
      "One of Nigeria's most beloved groundnut butter brands, Nutzy crafts nutritious groundnut butter and snack products from locally sourced ingredients, with quality and community impact at its core.",
  },
  {
    name: "Nutri Cabin",
    logo: "/assets/images/nutri-cabin-logo.png",
    description:
      "Nutri Cabin is a Nigerian healthy food brand dedicated to clean, wholesome eating, offering a range of natural snacks and drinks made with no artificial additives, sweeteners, or colouring.",
  },
];

export default function PartnersSection() {
  return (
    <section
      id="partners"
      className="relative overflow-hidden bg-black py-24 text-white font-productsFont"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(184,156,88,0.08),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.04),transparent_30%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.45em] text-[#B89C58]">
            Partnership
          </p>

          <h2 className="mt-4 font-guthenBloots text-6xl leading-none md:text-8xl">
            Impact Partners
          </h2>

          <p className="mt-6 text-base leading-8 text-white/65 md:text-lg">
            Organisations supporting the story, the farming cycle,
            product development, and long-term community impact.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {partners.map((partner, index) => (
            <motion.article
              key={partner.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.06,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-[32px]
                border
                border-white/10
                bg-white/[0.03]
                backdrop-blur-sm
                min-h-[280px]
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-[#B89C58]/60
                hover:bg-[#111111]
                hover:shadow-[0_20px_60px_rgba(0,0,0,0.55)]
              "
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.18),transparent_40%)]" />

              {/* Logo View */}
              <div
                className="
                  absolute
                  inset-0
                  flex
                  items-center
                  justify-center
                  transition-all
                  duration-500
                  group-hover:opacity-0
                  group-hover:scale-90
                "
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="
                    max-h-24
                    max-w-[200px]
                    object-contain
                    grayscale
                    brightness-200
                    contrast-125
                  "
                />
              </div>

              {/* Content View */}
              <div
                className="
                  absolute
                  inset-0
                  flex
                  flex-col
                  items-center
                  justify-center
                  px-6
                  text-center
                  opacity-0
                  translate-y-6
                  transition-all
                  duration-500
                  group-hover:opacity-100
                  group-hover:translate-y-0
                "
              >
                <h3 className="font-guthenBloots text-4xl leading-none text-white">
                  {partner.name}
                </h3>

                <div className="mt-4 h-[1px] w-16 bg-[#B89C58]" />

                <p className="mt-5 text-sm leading-7 text-white/75">
                  {partner.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom Note */}
        <p className="mx-auto mt-10 max-w-3xl text-center text-sm text-white/40">
          Hover on desktop or tap on mobile to reveal each partner description.
        </p>
      </div>
    </section>
  );
}