"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const DONATION_URL = "https://paystack.shop/pay/plant-a-seed";

export default function SupportSection() {

  const [donationOpen, setDonationOpen] = useState(false);

  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState("");


  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {

    event.preventDefault();

    setLoading(true);
    setSuccess("");


    const form = event.currentTarget; // store form reference BEFORE await

    const formData = new FormData(form);


    try {

      const response = await fetch("/api/contact", {

        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({

          name: formData.get("name"),

          email: formData.get("email"),

          contribution: formData.get("contribution"),

          message: formData.get("message"),

        }),

      });


      const result = await response.json();


      if (result.success) {

        setSuccess(
          "Thank you. Your interest has been submitted successfully."
        );

        form.reset(); // use saved reference

      } else {

        setSuccess(
          "Something went wrong. Please try again."
        );

      }


    } catch (error) {

      console.error(error);

      setSuccess(
        "Unable to send message. Please try again."
      );

    }


    setLoading(false);

  }



  return (
    <section
      id="support"
      className="relative min-h-screen overflow-hidden bg-neutral-950 px-5 pt-20 pb-8 text-white sm:px-8 lg:px-16"
    >

      <div
        className=" mt-3 mb-4 absolute inset-0 bg-cover bg-center opacity-35"
        style={{
          backgroundImage:
            "url('/assets/images/moc-background-dark.jpg')",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black" />


      <div className="relative mx-auto max-w-7xl">


        <div className="mb-12 max-w-4xl">

          <p className="font-productsFont text-xs uppercase tracking-[0.35em] text-[#B89C58]">
            Support
          </p>


          <h2 className="mt-3 font-guthenBloots text-6xl leading-none md:text-8xl">
            Plant a Seed
          </h2>


          <p className="mt-5 font-productsFont text-lg leading-relaxed text-white/75">
            Support the mothers of Chibok by donating directly, partnering with the project, or ordering products connected to the farming initiative.
          </p>

        </div>



        <div className=" grid gap-6 lg:grid-cols-[0.8fr_1.2fr]" >



          <div className="flex flex-col gap-6">
            {/* Ways to Contribute */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 sm:p-8">
              <h3 className="font-guthenBloots text-5xl leading-none">
                Ways to Contribute
              </h3>

              <p className="mt-4 font-productsFont text-white/75">
                Together, we're proving that farming funds education,
                strengthens families, and creates lasting opportunity.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
  {[
    "Make a One-Time Gift",
    "Become a Monthly Partner",
    "Sponsor a Farmer",
  ].map((item) => (
    <div
      key={item}
      className="group flex items-center gap-2 rounded-full border border-[#B89C58]/40 bg-black/30 px-4 py-2 transition-all duration-300 hover:border-[#D4AF37] hover:bg-[#B89C58]/10"
    >
      <span className="h-2 w-2 rounded-full bg-[#B89C58] transition-transform duration-300 group-hover:scale-125" />

      <span className="font-productsFont text-sm text-white/90">
        {item}
      </span>
    </div>
  ))}
</div>

             
            </div>

            {/* Donate */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-6 sm:p-8">
              <h3 className="font-guthenBloots text-5xl leading-none">
                Donate
              </h3>
              <p className=" font-productsFont text-white/75">
                Your contribution helps provide seeds, tools, training,
                processing support, and market access for women farmers.
              </p>

              <Button
                onClick={() => setDonationOpen(true)}
                className="mt-7 rounded-full bg-[#B89C58] px-7 py-6 font-productsFont text-sm font-bold uppercase tracking-[0.18em] text-black hover:bg-[#D4AF37]"
              >
                Open Donation Page
              </Button>

              <a
                href={DONATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 block font-productsFont text-sm text-[#D4AF37] underline underline-offset-4"
              >
                Or open donation link in a new tab
              </a>
            </div>
             <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 sm:p-8">
                <h4 className="font-guthenBloots text-3xl text-[#ffffff]">
                  Together, We Grow
                </h4>

                <p className=" font-productsFont text-white/80">
                  Every contribution helps more women build thriving farms,
                  stronger livelihoods, and brighter futures for their families.
                </p>

                <p className="mt-3 font-productsFont text-white/80">
                  Every harvest helps put food on the table. Every harvest helps
                  keep children in school.
                </p>

              </div>
          </div>

          <div
            id="partner-order-form"
            className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 sm:p-8"
          >

            <h3 className="font-guthenBloots text-5xl leading-none">
              How you can help
            </h3>


            <p className="mt-4 font-productsFont text-white/75">

              The Chibok Groundnut Initiative is built on a simple belief: when women thrive, families and communities thrive with them.

              Your support helps provide improved seed varieties, agricultural training, farming inputs, ongoing technical support, processing, and market opportunities, enabling more women to build sustainable livelihoods through agriculture.

              Together, we're proving that farming funds education, strengthens families, and creates lasting opportunity.

            </p>




            <form
              className="mt-8 grid gap-5"
              onSubmit={handleSubmit}
            >


              <div className="grid gap-5 sm:grid-cols-2">


                <Input

                  name="name"

                  aria-label="Name"

                  placeholder="Your name"

                  required

                  className="h-12 rounded-none border-white/20 bg-black/30 text-white placeholder:text-white/50"

                />



                <Input

                  name="email"

                  aria-label="Email"

                  type="email"

                  placeholder="Email address"

                  required

                  className="h-12 rounded-none border-white/20 bg-black/30 text-white placeholder:text-white/50"

                />

              </div>





              <div>

                <label
                  htmlFor="contribution"
                  className="mb-2 block font-productsFont text-sm text-white/75"
                >
                  How would you like to contribute?
                </label>



                <select

                  id="contribution"

                  name="contribution"

                  required

                  className="h-12 w-full rounded-none border border-white/20 bg-black/30 px-3 font-productsFont text-white/75 focus:border-[#B89C58] focus:outline-none"

                  defaultValue=""

                >

                  <option value="" disabled>
                    Select an option
                  </option>

                  <option value="Make a One-Time Gift">
                    Make a One-Time Gift
                  </option>

                  <option value="Become a Monthly Partner">
                    Become a Monthly Partner
                  </option>

                  <option value="Sponsor a Farmer">
                    Sponsor a Farmer
                  </option>

                </select>

              </div>





              <Textarea

                name="message"

                aria-label="How would you like to help?"

                placeholder="Tell us how you'd like to help (e.g. partner with us, stock our products, or support the initiative)"

                required

                className="min-h-36 rounded-none border-white/20 bg-black/30 text-white placeholder:text-white/50"

              />






              <Button

                disabled={loading}

                className="w-full rounded-full bg-[#B89C58] py-6 font-productsFont text-sm font-bold uppercase tracking-[0.18em] text-black hover:bg-[#D4AF37] sm:w-fit sm:px-10"

              >

                {loading ? "Sending..." : "Submit Interest"}

              </Button>




              {success && (

                <p className="font-productsFont text-sm text-[#B89C58]">

                  {success}

                </p>

              )}



            </form>


          </div>


        </div>
        <div className="mx-auto mt-3 mb-3 flex justify-center py-8">
          <div className="flex flex-col items-center text-center">
            <span className="font-guthenBloots text-4xl text-[#B89C58] md:text-5xl">
              Because in Chibok,
            </span>

            <span className="mt-2 font-productsFont text-lg uppercase tracking-[0.2em] text-white md:text-xl">
              Farming Funds Education.
            </span>
          </div>
        </div>

      </div>
      <AnimatePresence>

        {donationOpen && (

          <motion.div

            initial={{ opacity: 0 }}

            animate={{ opacity: 1 }}

            exit={{ opacity: 0 }}

            className="fixed inset-0 z-[70] flex items-center justify-center bg-black/85 px-4 backdrop-blur-sm"

          >


            <motion.div

              initial={{ opacity: 0, scale: 0.94 }}

              animate={{ opacity: 1, scale: 1 }}

              exit={{ opacity: 0, scale: 0.94 }}

              className="relative h-[86vh] w-full max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-neutral-950 p-4"

            >


              <button

                onClick={() => setDonationOpen(false)}

                className="absolute right-4 top-4 z-10 rounded-full bg-black/70 p-2 text-white hover:bg-white/20"

                aria-label="Close donation page"

              >

                <X className="h-5 w-5" />

              </button>


              <iframe

                src={DONATION_URL}

                width="100%"

                height="100%"

                allow="payment"

                className="rounded-2xl border-0"

              />


            </motion.div>


          </motion.div>

        )}

      </AnimatePresence>


    </section>

  );
}