import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
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
        Let's Connect
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
        className="
        bg-[#fff8ef]
        rounded-3xl
        shadow-xl
        p-10
        relative
        "
      >
        {/* Tape */}
        <div
          className="
          absolute
          top-4
          left-1/2
          w-24
          h-6
          bg-pink-200
          opacity-70
          rotate-[-10deg]
          "
        ></div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Left */}

          <div>
            <h3 className="text-3xl font-bold mb-6">
              Contact Information
            </h3>

            <div className="space-y-5">

              <div className="flex items-center gap-4">
                <FaEnvelope size={22} />
                <span>
                  yourmail@gmail.com
                </span>
              </div>

              <div className="flex items-center gap-4">
                <FaPhone size={22} />
                <span>
                  +91 8861427340
                </span>
              </div>

              <div className="flex items-center gap-4">
                <FaLinkedin size={22} />
                <span>
                  LinkedIn Profile
                </span>
              </div>

              <div className="flex items-center gap-4">
                <FaGithub size={22} />
                <span>
                  GitHub Profile
                </span>
              </div>

            </div>
          </div>

          {/* Right */}

          <div className="flex flex-col justify-center">

            <p
              className="
              text-lg
              leading-8
              "
            >
              I'm currently looking for
              Software Developer and
              Data Engineer opportunities.
            </p>

            <button
              className="
              mt-8
              bg-green-700
              text-white
              px-6
              py-3
              rounded-xl
              w-fit
              "
            >
              Download Resume
            </button>

          </div>

        </div>

        <div
          className="
          absolute
          top-5
          right-6
          text-3xl
          "
        >
          💌
        </div>

      </motion.div>
    </section>
  );
}