import { motion } from "framer-motion";

export default function StickyNote() {
  return (
    <motion.div
      animate={{
        y: [0, -6, 0],
        rotate: [-6, -5, -6],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
      }}
      className="
      absolute
      -bottom-10
      -right-10
      bg-[#F7DD79]
      p-5
      w-60
      rotate-6
      shadow-xl
      border border-yellow-300
      rounded-sm
      z-20
      "
    >
      <h3 className="caveat text-3xl font-bold">
        Currently Exploring
      </h3>

      <ul className="mt-3 space-y-2 text-sm">
        <li>• Data Engineering</li>
        <li>• Cloud Technologies</li>
        <li>• System Design</li>
      </ul>
    </motion.div>
  );
}