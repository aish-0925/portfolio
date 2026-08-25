import { motion } from "framer-motion";
import {
  FaJava,
  FaReact,
  FaPython,
  FaDatabase,
} from "react-icons/fa";

export default function FloatingIcons() {
  return (
    <>
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute -right-17.5 top-12"
      >
        <FaJava className="text-5xl text-orange-500" />
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute -left-12 top-24"
      >
        <FaPython className="text-5xl text-blue-500" />
      </motion.div>

      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute right-10 bottom-16"
      >
        <FaReact className="text-5xl text-cyan-500" />
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute -left-8 bottom-20"
      >
        <FaDatabase className="text-5xl text-gray-500" />
      </motion.div>
    </>
  );
}