"use client";

import { motion } from "framer-motion";

const partners = [
  {
    name: "Impact Partners",
    logo: "/assets/images/impactLogo_white.png",
    description:
      "Impact Partners funds and supports documentary filmmakers, providing the creative partnerships and producer development that help important stories reach the world.",
    featured: true,
  },
  {
    name: "Uwaosi Rhoda Foundation",
    logo: "/assets/images/uwaosi-foundation-logo.png",
    description:
      "The Uwaosi Rhoda Foundation empowers women, children, and underserved communities through education and livelihood programmes, including the Chibok Groundnut Initiative, which helps women farmers in Chibok scale their farming and fund their children's education.",
    featured: true,
  },
  {
    name: "Artemis Rising Foundation",
    logo: "/assets/images/artemis.jpeg",
    description:
      "Artemis Rising Foundation supports media, arts, and education projects that influence culture, backing documentary films and initiatives that drive meaningful change in public policy, education, and society.",
    featured: true,
    darkenLogo: true,
  },
  {
    name: "Hunting Lane",
    logo: "/assets/images/hl-box-logo.png",
    description:
      "Hunting Lane is a film production company dedicated to developing and producing stories with genuine cultural and social resonance.",
    featured: false,
  },
  {
    name: "JB Multimedia Studios",
    logo: "/assets/images/Jb-multimedia-logo.png",
    description:
      "JB Multimedia Studios is an Emmy award-winning production studio based in Lagos, Nigeria, dedicated to telling African stories that drive social impact.",
    featured: false,
  },
  {
    name: "Zenfix",
    logo: "/assets/images/zenfix-logo.png",
    description:
      "Zenfix transforms locally sourced Nigerian groundnuts into nutritious, great-tasting snacks, creating value for consumers and farmers alike.",
    featured: false,
  },
  {
    name: "Nutzy",
    logo: "/assets/images/nutzy1.jpg",
    description:
      "One of Nigeria's most beloved groundnut butter brands, Nutzy crafts nutritious groundnut butter and snack products from locally sourced ingredients, with quality and community at its core.",
    featured: false,
  },
  {
    name: "Nutri Cabin",
    logo: "/assets/images/black.jpg",
    description:
      "Nutri Cabin is a Nigerian healthy food brand offering a range of natural snacks and drinks made with clean, wholesome ingredients and no artificial additives.",
    featured: false,
  },
];

export default function Partnership() {
  return (
    <section
      id="partners"
      className="relative overflow-hidden bg-black py-20 text-white font-productsFont sm:py-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(184,156,88,0.08),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.04),transparent_30%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          {/* <p className="text-xs uppercase tracking-[0.45em] text-[#B89C58]">
            Partnership
          </p> */}

          <h2 className="mt-4 font-guthenBloots text-5xl leading-none sm:text-6xl md:text-8xl">
            Partners
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {partners.map((partner, index) => (
            <motion.article
              key={partner.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.55,
                delay: index * 0.06,
              }}
              className={`
                group
                relative
                overflow-hidden
                rounded-[28px]
                border
                border-white/10
                bg-white/[0.035]
                backdrop-blur-sm
                transition-all
                duration-500
                hover:-translate-y-1
                hover:border-[#B89C58]/60
                hover:bg-[#111111]
                hover:shadow-[0_20px_60px_rgba(0,0,0,0.55)]
                ${partner.featured
                  ? "min-h-[320px] lg:min-h-[360px]"
                  : "min-h-[260px]"
                }
              `}
            >
              <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.16),transparent_42%)]" />

              <div className="absolute inset-0 flex items-center justify-center p-8 transition-all duration-500 group-hover:opacity-0 group-hover:scale-90">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className={`
  object-contain
  ${partner.darkenLogo ? "brightness-75 contrast-110" : "brightness-200 contrast-125"}
  transition-all
  duration-500
  ${partner.featured ? "max-h-[140px] max-w-[80%]" : "max-h-[100px] max-w-[75%]"
                    }
`}
                />
              </div>

              <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center opacity-0 translate-y-6 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                <h3
                  className={`
                    font-guthenBloots
                    leading-none
                    text-white
                    ${partner.featured
                      ? "text-4xl md:text-5xl"
                      : "text-3xl md:text-4xl"
                    }
                  `}
                >
                  {partner.name}
                </h3>

                <div className="mt-4 h-[1px] w-16 bg-[#B89C58]" />

                <p className="mt-5 max-w-md text-sm leading-7 text-white/75">
                  {partner.description}
                </p>
              </div>
              
            </motion.article>
            
          ))}
          
        </div>
      </div>
    </section>
  );
}
