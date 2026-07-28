"use client";

import { useState } from "react";
import Link from "next/link";
import Partnership from "../theImpact/Partnership";
import { FaInstagram, FaXTwitter, FaLinkedin, FaThreads, FaYoutube } from "react-icons/fa6";

const socials = [
  { href: "https://www.instagram.com/mothersofchibok", Icon: FaInstagram, alt: "Instagram" },
  { href: "https://www.x.com/mothersofchibok", Icon: FaXTwitter, alt: "X (Twitter)" },
  { href: "https://www.linkedin.com/in/mothersofchibok", Icon: FaLinkedin, alt: "Linkedin" },
  { href: "https://www.threads.com/mothersofchibok", Icon: FaThreads, alt: "Threads" },
  { href: "https://youtube.com/@mothersofchibok?si=b1PaeYubmNtU7QbI", Icon: FaYoutube, alt: "YouTube" },
];

const ContactHero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col justify-between text-white font-productsFont">
      {/* Header */}
       <header className="border-b p-10 lg:p-16 flex justify-between items-center">
        <div className="lg:text-[70px] text-[40px] tracking-tight4 leading-0 font-guthenBloots text-gray-200">
          Contact us
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center flex-grow text-center px-8">
        <header className="relative w-full mt-10">
          <h2 className="font-guthenBloots text-[15vw] leading-none tracking-tight">
            Reach Out to Us
          </h2>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-[#B89C58] text-white px-4 py-1 absolute xl:top-20 lg:top-28 left-1/2 -translate-x-1/2"
          >
            Contact Us
          </button>
        </header>

        <section className="space-y-4 mt-10">
          <p className="text-base lg:text-lg">Want to learn more?</p>
          <a
            href="mailto:kachi.benson@jbmultimediagroup.com"
            className="text-[#B89C58] underline break-words"
          >
            connect@mothersofchibok.com
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full flex flex-col lg:flex-row items-center justify-between text-center gap-6 lg:gap-0 pt-16 pb-7 px-8 lg:px-24">
        <p className="text-sm">All rights reserved.</p>

        <div className="flex flex-col items-center justify-center gap-3 text-sm max-w-sm">
          <p>
            We encourage you to share on social media using the hashtag:{" "}
            <span className="font-semibold">#mothersofchibok</span>
          </p>
          <div className="flex justify-center gap-6">
            {socials.map(({ href, Icon, alt }) => (
              <Link
                key={alt}
                href={href}
                aria-label={alt}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className="w-6 h-6" />
              </Link>
            ))}
          </div>
        </div>

        <p className="text-sm">© {new Date().getFullYear()} Mothers of Chibok</p>
      </footer>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-cover bg-center px-8"
          style={{
            backgroundImage: "url('/assets/images/moc-background-dark.jpg')",
          }}
        >
          <div className="w-full max-w-lg px-6 py-10 bg-black/70 rounded-lg">
            <h2 className="text-center text-3xl lg:text-5xl font-guthenBloots mb-8">
              SEND US A MESSAGE
            </h2>

            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full bg-slate-600 text-white px-4 py-3 outline-none"
              />
              <textarea
                placeholder="Enter your message"
                rows={4}
                className="w-full bg-slate-600 text-white px-4 py-3 outline-none"
              />
              <button
                type="submit"
                className="w-full bg-[#B89C58] hover:bg-yellow-800 text-white px-8 py-3"
              >
                Submit
              </button>
            </form>

            <div className="flex flex-col items-center justify-center mt-10">
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-white flex flex-col items-center text-sm hover:opacity-70"
              >
                <span className="text-2xl">×</span>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactHero;
