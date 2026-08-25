import { motion } from "framer-motion";
import profile from "../../assets/images/profile.jpg";

export default function PolaroidCard() {
  return (
    <motion.div
      initial={{ opacity: 0, rotate: 8, scale: 0.9 }}
      animate={{ opacity: 1, rotate: 3, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      {/* Tape */}

      <div
        className="
        absolute
        -top-3
        left-1/2
        -translate-x-1/2
        w-36
        h-7
        bg-purple-300/70
        rotate-2
        rounded-sm
        backdrop-blur-sm
        z-20
        "
      />

      {/* Paper Clip */}

      <div className="absolute right-2 -top-2 text-4xl rotate-12 z-30">
        📎
      </div>

      {/* Polaroid */}

      <div
        className="
        bg-white
        p-5
        pb-24
        shadow-2xl
        rotate-2
        border
        border-[#ece3d4]
        "
      >
        <img
          src={profile}
          alt="profile"
          className="w-85 object-cover"
        />
      </div>
    </motion.div>
  );
}