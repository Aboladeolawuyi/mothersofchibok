import { motion } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const JourneyModal = ({ onClose }: { onClose: () => void }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
  >
    <div className="absolute inset-0 -z-10">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      >
        <source
          src="/assets/moc-loader-background.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 bg-black/50" />
    </div>

    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 40, scale: 0.95 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="relative w-full max-w-2xl bg-transparent p-8 sm:p-12"
    >
      <p className="text-gray-200 mb-10 font-hahmlet text-[18px]">
        <span className="ml-20">The headlines may have faded...</span>
        <br />
        <span className="ml-10">
          But in Chibok, the mothers still carry faith...
        </span>
        <br />
        <span className="ml-24">Send them a short message of hope.</span>
      </p>

      <div className="space-y-4">
        <Input
          type="email"
          placeholder="Enter your email"
          className="p-3 bg-gray-800/80 text-white"
        />
        <Textarea
          placeholder="Enter your message"
          className="p-3 bg-gray-800/80 text-white"
        />
        <Button className="bg-[#B89C58] hover:bg-yellow-600 w-full">
          Join the journey
        </Button>
      </div>

      <div className="text-center mt-32">
        <Button onClick={onClose} className="mt-4 text-white gap-2">
          Close <X className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </motion.div>
  </motion.div>
);

export default JourneyModal;
