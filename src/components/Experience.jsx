import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section
      id="experience"
      className="max-w-6xl mx-auto px-6 lg:px-10 py-24"
    >
      <div className="text-center mb-14">
        <p className="caveat text-3xl text-[#6f8253]">
          where I've worked
        </p>

        <h2 className="playfair text-5xl md:text-6xl font-bold mt-2">
          Experience
        </h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="
          bg-white
          border
          border-[#e7dfd2]
          rounded-xl
          paper-shadow
          p-7
          md:p-10
          relative
        "
      >
        {/* Small paper label */}
        <div
          className="
            absolute
            -top-4
            left-8
            bg-[#f8e08a]
            px-5
            py-2
            rounded-md
            rotate-[-2deg]
            text-sm
            font-medium
          "
        >
          Experience
        </div>

        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mt-4">

          <div>
            <h3 className="playfair text-3xl font-bold">
              Information Technology Intern
            </h3>

            <p className="text-lg text-[#6f8253] font-medium mt-2">
              Manipal Technologies Limited
            </p>
          </div>

          <p className="text-sm text-[#777] whitespace-nowrap">
            Dec 2025 – May 2026
          </p>

        </div>

        <div className="mt-8 border-t border-[#eee7dc] pt-7">

          <ul className="space-y-4 text-[#555] leading-7">

            <li className="flex gap-3">
              <span className="text-[#6f8253]">•</span>
              <span>
                Contributed to Employee Service Management tools.
              </span>
            </li>

            <li className="flex gap-3">
              <span className="text-[#6f8253]">•</span>
              <span>
                Assisted in implementing application features.
              </span>
            </li>

            <li className="flex gap-3">
              <span className="text-[#6f8253]">•</span>
              <span>
                Worked with database integration and CRUD operations.
              </span>
            </li>

            <li className="flex gap-3">
              <span className="text-[#6f8253]">•</span>
              <span>
                Participated in testing, debugging, and issue resolution.
              </span>
            </li>

            <li className="flex gap-3">
              <span className="text-[#6f8253]">•</span>
              <span>
                Collaborated with team members during development.
              </span>
            </li>

          </ul>

        </div>
      </motion.div>
    </section>
  );
}

