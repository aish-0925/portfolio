import { motion } from "framer-motion";

export default function Doodles() {
  return (
    <>
      {/* Heart */}
      <motion.div
        className="absolute left-10 top-5 text-3xl text-pink-500"
        animate={{ y: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
      >
        ♡
      </motion.div>

      {/* Flower */}
      <motion.div
        className="absolute right-8 bottom-16 text-4xl"
        animate={{ rotate: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 5 }}
      >
        🌼
      </motion.div>

      {/* Star */}
      <div className="absolute left-5 bottom-32 text-2xl">
        ✦
      </div>

      {/* Sparkle */}
      <div className="absolute right-20 top-20 text-2xl">
        ✨
      </div>
    </>
  );
}