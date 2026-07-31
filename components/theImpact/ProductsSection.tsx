"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { X, ZoomIn } from "lucide-react";

const productImages = [
  "/assets/images/productpictures/9D4A0801.jpg.jpeg",
  "/assets/images/productpictures/9d4a1920.jpg",
  "/assets/images/productpictures/9D4A3205.jpg",
  "/assets/images/productpictures/9D4A4519.jpg",
  "/assets/images/productpictures/9D4A0822.jpg.jpeg",
  "/assets/images/productpictures/9d4a1945.jpg",
  "/assets/images/productpictures/9D4A3233.jpg",
  "/assets/images/productpictures/9D4A4521.jpg",
  // "/assets/images/productpictures/9D4A0824.jpg.jpeg",
  "/assets/images/productpictures/9d4a1949.jpg",
  "/assets/images/productpictures/9D4A3208.jpg",
  "/assets/images/productpictures/9D4A4523.jpg",
  "/assets/images/productpictures/9D4A0828.jpg.jpeg",
  "/assets/images/productpictures/9d4a1956.jpg",
  "/assets/images/productpictures/9D4A3241.jpg",
  "/assets/images/productpictures/9D4A4538.jpg",
  "/assets/images/productpictures/9D4A0834.jpg.jpeg",
  "/assets/images/productpictures/9d4a1958.jpg",
  "/assets/images/productpictures/9D4A3214.jpg",
  "/assets/images/productpictures/9d4a3237.jpg",
  "/assets/images/productpictures/9D4A0845.jpg.jpeg",
  "/assets/images/productpictures/9d4a1959.jpg",
  "/assets/images/productpictures/9D4A3247.jpg",
  "/assets/images/productpictures/9D4A3206.jpg",
  "/assets/images/productpictures/9D4A0876.jpg.jpeg",
  "/assets/images/productpictures/9d4a1974.jpg",
  "/assets/images/productpictures/9D4A3216.jpg",
  "/assets/images/productpictures/9D4A0885.jpg.jpeg",
  "/assets/images/productpictures/9d4a1980.jpg",
  "/assets/images/productpictures/9D4A3229.jpg",
  "/assets/images/productpictures/9D4A1040.jpg.jpeg",
  "/assets/images/productpictures/9d4a1994.jpg",
  "/assets/images/productpictures/9D4A3234.jpg",
  "/assets/images/productpictures/9D4A3254.jpg",
  "/assets/images/productpictures/9d4a1996.jpg",
  "/assets/images/productpictures/9D4A3236.jpg",
  "/assets/images/productpictures/9D4A3256.jpg",
  "/assets/images/productpictures/9D4A3257.jpg",
  "/assets/images/productpictures/9D4A3248.jpg",
  "/assets/images/productpictures/9D4A3263.jpg",
  "/assets/images/productpictures/9D4A3269.jpg",
  "/assets/images/productpictures/9D4A3275.jpg",
  "/assets/images/productpictures/9D4A3279.jpg",
  "/assets/images/productpictures/9d4a3291.jpg",
  "/assets/images/productpictures/9d4a3297.jpg",
  "/assets/images/productpictures/9D4A3303.jpg",

  "/assets/images/productpictures/sap_events_mothersofchibokpremiere_108.jpg",
];

const productCards = [
  {
    title: "Chibok Groundnut Initiative",
    description:
      `The Chibok Groundnut Initiative brings together groundnut farming, processing, and branding with improved seed varieties, agricultural training, farming inputs, and ongoing technical support to help women build sustainable livelihoods.
What began in 2025 with nine women farmers has grown to 50 women in 2026, with harvest proceeds already helping put food on family tables and return children to school.
`,
  },
  {
    title: "Chibok Groundnut Products",
    description:
      "Made from premium groundnuts grown by women farmers in Chibok, our products reflect the care, quality, and resilience behind every harvest. From Peanut Butter and roasted groundnuts to groundnut oil and chocolate-coated peanuts, every purchase supports a growing women-led enterprise rooted in quality, dignity, and community.",
  },
  //   {
  //  title: "How you can Help",
  // description:
  //   `The Chibok Groundnut Initiative is built on a simple belief: when women thrive, families and communities thrive with them.
  // Your support helps provide improved seed varieties, agricultural training, farming inputs, ongoing technical support, processing, and market opportunities—enabling more women to build sustainable livelihoods through agriculture.
  // Together, we're proving that farming funds education, strengthens families, and creates lasting opportunity.
  // `,
  //   },
];

function ProductImageDialog({
  image,
  onClose,
}: {
  image: string;
  onClose: () => void;
}) {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/90 p-3 backdrop-blur-md sm:p-6"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close product image"
        className="absolute right-4 top-4 z-[1000] rounded-full bg-white p-2 text-black shadow-lg transition hover:bg-[#B89C58] sm:right-6 sm:top-6"
      >
        <X className="h-5 w-5" />
      </button>

      <div
        className="relative h-[78svh] w-full max-w-6xl overflow-hidden rounded-[24px] border border-white/15 bg-neutral-950 shadow-2xl sm:h-[84svh] sm:rounded-[32px]"
        onClick={(event) => event.stopPropagation()}
      >
        <Image
          src={image}
          alt="Product enlarged view"
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
}

export default function ProductsSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section
      id="products"
      className="relative overflow-hidden bg-black px-5 py-20 text-white sm:px-8 lg:px-16"
    >
      <style>{`
        @keyframes productMarqueeLeft {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        @keyframes productMarqueeRight {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
      `}</style>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(184,156,88,0.14),transparent_38%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-12 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="font-productsFont text-xs uppercase tracking-[0.35em] text-[#B89C58]">
              Products
            </p>

            <h2 className="mt-3 font-guthenBloots text-5xl leading-none sm:text-6xl md:text-8xl">
              From Harvest to Home
            </h2>
          </div>

          <p className="font-productsFont text-xl font-semibold leading-relaxed text-white lg:text-2xl">
            Every successful harvest creates an opportunity to do more.
          </p>
        </div>
        <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          {/* Left: Story */}
          <div className="max-w-4xl">

            <p className="mt-6 font-productsFont text-base leading-8 text-white/75 lg:text-lg">
              Every successful harvest creates an opportunity to do more and our ambition is more than just selling raw groundnuts. Working with leading manufacturers of premium groundnut products we are transforming raw groundnut harvests into a range of beautifully crafted premium products. Every purchase ensures that farming continues to fund education.
            </p>


          </div>

          {/* Right: Video */}
          <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] shadow-2xl">
            {/* Replace with your preferred video source */}

            {/* YouTube */}

            {/* <iframe
              className="aspect-video w-full"
              src="https://www.youtube.com/embed/gVeL2mDMO34"
              title="Chibok Groundnut Initiative"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            /> */}


            {/* Local MP4 */}
            <video
              controls
              playsInline
              preload="metadata"
              className="aspect-video w-full object-cover"
              poster="/assets/images/video-poster.jpg"
            >
              <source
                src="https://res.cloudinary.com/davm498td/video/upload/v1785525199/Mothers_of_Chibok_Factory_visit_2_d7apt0.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.035] py-5">
          <div className="flex w-max gap-4 px-4 [animation:productMarqueeLeft_150s_linear_infinite] hover:[animation-play-state:paused]">
            {[...productImages, ...productImages].map((image, index) => (
              <button
                type="button"
                key={`row-one-${image}-${index}`}
                onClick={() => setSelectedImage(image)}
                className="group relative h-44 w-36 shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 outline-none transition hover:border-[#B89C58]/70 focus-visible:ring-2 focus-visible:ring-[#B89C58] sm:h-56 sm:w-44 lg:h-64 lg:w-52"
              >
                <Image
                  src={image}
                  alt={`Product image ${index + 1}`}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                <span className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-black/60 text-white opacity-0 backdrop-blur-sm transition group-hover:opacity-100">
                  <ZoomIn className="h-4 w-4" />
                </span>
              </button>
            ))}
          </div>

          <div className="mt-4 flex w-max gap-4 px-4 [animation:productMarqueeRight_150s_linear_infinite] hover:[animation-play-state:paused]">
            {[...productImages.slice().reverse(), ...productImages.slice().reverse()].map(
              (image, index) => (
                <button
                  type="button"
                  key={`row-two-${image}-${index}`}
                  onClick={() => setSelectedImage(image)}
                  className="group relative h-36 w-44 shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 outline-none transition hover:border-[#B89C58]/70 focus-visible:ring-2 focus-visible:ring-[#B89C58] sm:h-44 sm:w-56 lg:h-52 lg:w-72"
                >
                  <Image
                    src={image}
                    alt={`Product gallery image ${index + 1}`}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />

                  <span className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-black/60 text-white opacity-0 backdrop-blur-sm transition group-hover:opacity-100">
                    <ZoomIn className="h-4 w-4" />
                  </span>
                </button>
              )
            )}
          </div>
        </div>
        <div className="mx-auto mt-16 max-w-5xl text-center">
          <div className="space-y-8 font-productsFont text-base leading-8 text-white/75 lg:text-lg">


            <p>
              To taste, buy and share, order here or visit
              <span className="text-[#D4AF37]">
                {" "}
                Gather House, Ikoyi, Lagos.
              </span>
            </p>

            <p className="font-guthenBloots text-3xl leading-none text-[#D4AF37] sm:text-4xl">
              Taste the story.

              Share the story.

              Help it grow.
            </p>
          </div>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {productCards.map((card) => (
            <article
              key={card.title}
              className="flex min-h-[150px] flex-col rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:border-[#B89C58]/60 hover:bg-white/[0.06]"
            >
              <h3 className="font-guthenBloots text-4xl leading-none text-center">
                {card.title}
              </h3>

              <p className="mt-4 flex-1 font-productsFont text-1xl leading-7 text-white/70 text-justify">
                {card.description}
              </p>


            </article>
          ))}
        </div>
        <div className="mt-6 flex justify-center">
          <a
            href="#partner-order-form"
            className="mt-7 rounded-full bg-[#B89C58] px-7 py-6 font-productsFont text-sm font-bold uppercase tracking-[0.18em] text-black hover:bg-[#D4AF37]"
          >
            Partner / Order
          </a>
        </div>
      </div>

      {selectedImage && (
        <ProductImageDialog
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </section>
  );
}