import { motion } from "framer-motion";

export default function StickyNote() {
  return (
    <motion.div
      animate={{ y: [0, -4, 0], rotate: [-2, -1, -2] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="w-48 rounded-sm border border-yellow-300 bg-[#F7DD79] p-4 shadow-lg sm:w-52 sm:p-5"
    >
      <h3 className="caveat text-2xl font-bold text-[#29251d] sm:text-3xl">
        My Focus
      </h3>
      <ul className="mt-2 space-y-1.5 text-xs leading-5 text-[#393326] sm:text-sm">
        <li>• Software Development</li>
        <li>• Backend Engineering</li>
        <li>• AI & Machine Learning</li>
      </ul>
    </motion.div>
  );
}
