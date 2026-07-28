import { motion } from "framer-motion";
// import Image from "next/image";
import Link from "next/link";

const Logo = () => (
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="fixed top-4 z-40 right-6"
  >
    <Link href="#landing-section" aria-label="Go to the homepage">
      <img
        src="/assets/images/moc-logo.png"
        alt="Mothers of Chibok"
        className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain"
      />
    </Link>
  </motion.div>
);

export default Logo;
