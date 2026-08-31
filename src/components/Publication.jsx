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
            A Comparative Analysis of Automatic Speech Recognition and Semantic Similarity Models for Oral Evaluation
          </h3>

          <p className="text-[#777] mt-3">
            2026 Eight International Conference on Computational Intelligence and Communication Technologies (CCICT) / IEEE EXplore · June 2026
          </p>

          <p className="text-[#555] leading-8 mt-6">
            Published an IEEE research paper on developing an AI-driven approach for automated technical oral assessment using Automatic Speech Recognition (ASR) and semantic similarity models. The study compares traditional and transformer-based methods for evaluating spoken answers and analyzes the effects of transcription errors and accent variations, demonstrating the effectiveness of embedding-based models in aligning with human evaluation.
          </p>

          <a
            href="https://ieeexplore.ieee.org/document/11575898"
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

