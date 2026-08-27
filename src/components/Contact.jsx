import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-6xl mx-auto px-6 lg:px-10 py-24"
    >

      {/* Heading */}
      <div className="text-center mb-14">
        <p className="caveat text-3xl text-[#6f8253]">
          let's talk
        </p>

        <h2 className="playfair text-5xl md:text-6xl font-bold mt-2">
          Let's Connect
        </h2>
      </div>


      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.7,
        }}
        viewport={{ once: true }}
        className="
          bg-[#fffdf8]
          border
          border-[#e7dfd2]
          rounded-xl
          paper-shadow
          p-8
          md:p-10
          relative
        "
      >

        {/* Scrapbook Tape */}
        <div
          className="
            absolute
            -top-3
            left-1/2
            -translate-x-1/2
            w-24
            h-7
            bg-[#d9c2f1]
            opacity-80
            rotate-[-3deg]
          "
        />


        <div className="grid md:grid-cols-2 gap-10">

          {/* ================= LEFT ================= */}

          <div>

            <p className="caveat text-3xl text-[#6f8253]">
              find me online
            </p>

            <h3 className="playfair text-3xl font-bold mt-2 mb-7">
              Contact Information
            </h3>


            <div className="space-y-5">

              {/* Email */}
              <a
                href="mailto:aishwaryaapoojary51@gmail.com"
                className="
                  flex
                  items-center
                  gap-4
                  text-[#444]
                  hover:text-[#6f8253]
                  transition
                "
              >
                <FaEnvelope size={20} />

                <span>
                  aishwaryaapoojary51@gmail.com
                </span>
              </a>


              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/aishwarya-a-poojary/"
                target="_blank"
                rel="noreferrer"
                className="
                  flex
                  items-center
                  gap-4
                  text-[#444]
                  hover:text-[#6f8253]
                  transition
                "
              >
                <FaLinkedin size={20} />

                <span>
                  LinkedIn
                </span>
              </a>


              {/* GitHub */}
              <a
                href="https://github.com/aish-0925"
                target="_blank"
                rel="noreferrer"
                className="
                  flex
                  items-center
                  gap-4
                  text-[#444]
                  hover:text-[#6f8253]
                  transition
                "
              >
                <FaGithub size={20} />

                <span>
                  GitHub
                </span>
              </a>

            </div>

          </div>


          {/* ================= RIGHT ================= */}

          <div className="flex flex-col justify-center">

            <h3 className="playfair text-3xl font-bold">
              Let's work together
            </h3>

            <p
              className="
                text-[#555]
                text-lg
                leading-8
                mt-4
                max-w-md
              "
            >
              I'm currently looking for Software Developer
              and Data Engineer opportunities. Feel free to
              reach out if you'd like to connect or discuss
              an opportunity.
            </p>


            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="
                mt-7
                bg-[#6f8253]
                text-white
                px-6
                py-3
                rounded-lg
                w-fit
                hover:bg-[#5c7043]
                transition
              "
            >
              Download Resume →
            </a>

          </div>

        </div>

      </motion.div>

    </section>
  );
}

