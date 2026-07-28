import { motion } from "framer-motion";

const ScrollIndicator = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{
      duration: 2,
      delay: 2.2,
      repeat: Infinity,
      repeatType: "reverse",
      repeatDelay: 1,
    }}
    className="absolute bottom-0 left-1/2 -translate-x-1/2 text-white z-10"
  >
    <a 
      href="#trailer-section" 
      className="flex flex-col items-center px-10 py-5 transition-all duration-300 group"
    >
      <span className="text-2xl font-productsFont font-bold bg-black rounded-lg px-8 py-4 tracking-wide text-white border-2 border-white/30 shadow-[0_0_30px_rgba(255,255,255,0.3)] group-hover:scale-110 group-hover:shadow-[0_0_50px_rgba(255,255,255,0.5)] transition-all duration-300 flex items-center gap-3">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
        </svg>
        Watch Trailer
      </span>
      <span className="mt-3 text-3xl animate-bounce text-white drop-shadow-lg">↓</span>
    </a>
  </motion.div>
);

export default ScrollIndicator;
