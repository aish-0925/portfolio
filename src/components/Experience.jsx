import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section
      id="experience"
      className="max-w-6xl mx-auto px-6 py-24"
    >
      <h2
        className="
        text-5xl
        font-bold
        text-center
        mb-16
        "
      >
        Experience
      </h2>

      <motion.div
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
        }}
        viewport={{ once: true }}
        whileHover={{
          scale: 1.02,
          rotate: 1,
        }}
        className="
        bg-[#fff8ef]
        rounded-3xl
        shadow-xl
        p-10
        relative
        "
      >
        {/* Folder Tab */}

        <div
          className="
          absolute
          -top-5
          left-8
          bg-yellow-200
          px-8
          py-2
          rounded-t-xl
          font-semibold
          "
        >
          📁 Internship
        </div>

        <div className="mt-6">

          <h3
            className="
            text-3xl
            font-bold
            "
          >
            Manipal Technologies Limited
          </h3>

          <p
            className="
            text-gray-500
            mt-2
            "
          >
            Dec 2025 – May 2026
          </p>

          <ul
            className="
            mt-8
            space-y-4
            text-lg
            "
          >
            <li>
              • Contributed to Employee Service Management tools.
            </li>

            <li>
              • Assisted in implementing application features.
            </li>

            <li>
              • Worked with database integration and CRUD operations.
            </li>

            <li>
              • Participated in testing, debugging, and issue resolution.
            </li>

            <li>
              • Collaborated with team members during development.
            </li>
          </ul>

        </div>

        {/* Decorative Pin */}

        <div
          className="
          absolute
          top-5
          right-6
          text-3xl
          "
        >
          📌
        </div>

      </motion.div>
    </section>
  );
}