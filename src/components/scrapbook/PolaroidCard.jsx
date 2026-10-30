import { motion } from "framer-motion";
import profile from "../../assets/images/profile.jpg";

export default function PolaroidCard() {
  return (
    <motion.div
      initial={{ opacity: 0, rotate: 6, scale: 0.96 }}
      animate={{ opacity: 1, rotate: 2, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      <div className="absolute -top-3 left-1/2 z-20 h-7 w-36 -translate-x-1/2 rotate-2 rounded-sm bg-purple-300/70 backdrop-blur-sm" />

      <div className="absolute -right-1 -top-3 z-30 rotate-12 text-4xl" aria-hidden="true">
        📎
      </div>

      <div className="rotate-1 border border-[#ece3d4] bg-white p-4 pb-20 shadow-2xl sm:p-5 sm:pb-22">
        <img
          src={profile}
          alt="Aishwarya A Poojary"
          className="h-[290px] w-full object-cover object-center sm:h-[320px] lg:h-[335px]"
        />
      </div>
    </motion.div>
  );
}
