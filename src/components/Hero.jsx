import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import {
  SiLeetcode
} from "react-icons/si";

import PolaroidCard from "./scrapbook/PolaroidCard";
import StickyNote from "./scrapbook/StickyNote";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        min-h-[calc(100vh-80px)]
        flex
        items-center
        py-16
        lg:py-20
        overflow-hidden
      "
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">

        <div
          className="
            grid
            lg:grid-cols-[1.2fr_0.8fr]
            gap-8
            lg:gap-12
            items-center
          "
        >

          {/* =====================================================
              LEFT — HERO CONTENT
          ====================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative z-10"
          >

            {/* Greeting */}
            <p className="caveat text-4xl md:text-5xl text-[#24303d]">
              Hi, I'm
            </p>

            {/* Name */}
            <h1
              className="
                playfair
                mt-3
                font-bold
                text-[#202020]
                leading-[1.05]
                tracking-[-0.03em]
                whitespace-nowrap
                text-[clamp(2.2rem,5vw,5.5rem)]
              "
            >
              Aishwarya A Poojary
            </h1>

            {/* Role */}
            <div className="mt-7 flex flex-wrap items-center gap-3">

              <span
                className="
                  relative
                  inline-block
                  px-5
                  py-1.5
                  caveat
                  text-2xl
                  md:text-3xl
                  text-[#242424]
                "
              >
                <span
                  className="
                    absolute
                    inset-0
                    bg-[#d9c2f1]
                    rounded-md
                    -rotate-2
                    -z-10
                  "
                />

                Aspiring Software Developer
              </span>

            </div>

            {/* Description */}
            <p
              className="
                mt-7
                max-w-xl
                text-[#555]
                leading-8
                text-base
                md:text-lg
              "
            >
              MCA graduate with a strong foundation in software development,
              SQL, and modern web technologies. I enjoy building practical,
              data-driven applications and user-focused solutions while
              continuously learning and improving my technical skills.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">

              <a
                href="#projects"
                className="
                  bg-[#6f8253]
                  text-white
                  px-6
                  py-3
                  rounded-xl
                  shadow-md
                  hover:-translate-y-1
                  hover:shadow-lg
                  transition
                "
              >
                View My Work →
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="
                  border-2
                  border-[#6f8253]
                  text-[#52633b]
                  px-6
                  py-3
                  rounded-xl
                  hover:bg-[#6f8253]
                  hover:text-white
                  transition
                "
              >
                Download Resume
              </a>

            </div>

            {/* =====================================================
                DEVELOPER PROFILES
            ====================================================== */}

            <div
              className="
                mt-8
                flex
                flex-wrap
                items-center
                gap-x-6
                gap-y-4
              "
            >

              {/* GitHub */}
              <a
                href="https://github.com/aish-0925"
                target="_blank"
                rel="noreferrer"
                className="
                  profile-link
                  inline-flex
                  items-center
                  gap-2
                  text-[#303332]
                  hover:text-[#6f8253]
                  transition
                "
                aria-label="GitHub Profile"
              >
                <FaGithub className="text-[21px]" />
                <span>GitHub</span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/aishwarya-a-poojary/"
                target="_blank"
                rel="noreferrer"
                className="
                  profile-link
                  inline-flex
                  items-center
                  gap-2
                  text-[#303332]
                  hover:text-[#6f8253]
                  transition
                "
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin className="text-[21px]" />
                <span>LinkedIn</span>
              </a>

              {/* LeetCode */}
              <a
                href="https://leetcode.com/u/aishwarya_a_poojary25/"
                className="
                  profile-link
                  inline-flex
                  items-center
                  gap-2
                  text-[#303332]
                  hover:text-[#6f8253]
                  transition
                "
                aria-label="LeetCode Profile"
              >
                <SiLeetcode className="text-[20px]" />
                <span>LeetCode</span>
              </a>

          
            </div>

          </motion.div>


          {/* =====================================================
              RIGHT — SCRAPBOOK PHOTO
          ====================================================== */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="
              relative
              flex
              justify-center
              lg:justify-end
              min-h-[430px]
              lg:min-h-[460px]
            "
          >

            {/* CSS scrapbook tape */}
            <div
              className="
                absolute
                top-6
                right-[24%]
                w-24
                h-7
                bg-[#cbb8e5]
                opacity-90
                rotate-[3deg]
                z-30
                shadow-sm
              "
            />

            {/* Polaroid */}
            <div
              className="
                relative
                z-10
                w-[220px]
                sm:w-[235px]
                md:w-[245px]
                lg:w-[250px]
                rotate-[3deg]
                mt-8
              "
            >
              <PolaroidCard />
            </div>

            {/* Sticky Note */}
            <div
              className="
                absolute
                z-20
                right-[-5px]
                md:right-[-10px]
                lg:right-[-15px]
                bottom-[5px]
              "
            >
              <StickyNote />
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}