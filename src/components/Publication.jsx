import { motion } from "framer-motion";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

export default function Publication() {
  return (
    <section
      id="publication"
      className="max-w-6xl mx-auto px-6 lg:px-10 py-24"
    >
      <div className="text-center mb-14">
        <p className="caveat text-3xl text-[#6f8253]">
          research & writing
        </p>

        <h2 className="playfair text-5xl md:text-6xl font-bold mt-2">
          Publication
        </h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="
          relative
          bg-white
          border
          border-[#e7dfd2]
          rounded-xl
          paper-shadow
          p-8
          md:p-10
        "
      >
        {/* Paper tape */}
        <div
          className="
            absolute
            -top-4
            left-1/2
            -translate-x-1/2
            w-28
            h-7
            bg-[#d9c2f1]/70
            rotate-[-2deg]
          "
        />

        <div className="max-w-4xl mx-auto">

          <p className="text-sm uppercase tracking-[0.2em] text-[#6f8253]">
            Conference Publication
          </p>

          <h3 className="playfair text-3xl md:text-4xl font-bold mt-3">
            Your Publication Title
          </h3>

          <p className="text-[#777] mt-3">
            Conference / Journal Name · Year
          </p>

          <p className="text-[#555] leading-8 mt-6">
            Add a short 2–3 line description of your research,
            the problem you addressed, and your contribution.
          </p>

          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="
              inline-flex
              items-center
              gap-2
              mt-7
              bg-[#6f8253]
              text-white
              px-5
              py-3
              rounded-lg
              hover:bg-[#5c7043]
              transition
            "
          >
            View Publication
            <FaArrowUpRightFromSquare size={13} />
          </a>

        </div>
      </motion.div>
    </section>
  );
}

