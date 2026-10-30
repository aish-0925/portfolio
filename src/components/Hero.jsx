import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

import PolaroidCard from "./scrapbook/PolaroidCard";
import StickyNote from "./scrapbook/StickyNote";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-[calc(100vh-80px)] items-center overflow-hidden py-12 sm:py-14 lg:py-16"
    >
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative z-10"
          >
            <p className="caveat text-3xl text-[#24303d] sm:text-4xl md:text-5xl">
              Hi, I'm
            </p>

            <h1 className="playfair mt-3 max-w-full text-[clamp(2.35rem,5.2vw,5rem)] font-bold leading-[1.08] tracking-[-0.035em] text-[#202020]">
              Aishwarya A Poojary
            </h1>

            <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2">
              <span className="relative inline-block px-4 py-1.5 text-xl text-[#242424] sm:text-2xl md:text-3xl">
                <span className="absolute inset-0 -z-10 -rotate-2 rounded-md bg-[#d9c2f1]" />
                <span className="caveat">Software Developer</span>
              </span>
              <span className="text-sm font-medium text-[#6b6b63] sm:text-base">
                MCA Graduate
              </span>
            </div>

            <p className="mt-6 max-w-xl text-base leading-7 text-[#555] sm:text-[17px] sm:leading-8">
              I have hands-on experience in .NET development and a strong
              foundation in software engineering. I enjoy building full-stack
              applications, backend systems and AI-powered solutions, while
              continuously learning and exploring new technologies.
            </p>

            <div className="mt-7 flex flex-wrap gap-3 sm:gap-4">
              <a
                href="#projects"
                className="rounded-xl bg-[#6f8253] px-5 py-3 text-sm font-medium text-white shadow-md transition hover:-translate-y-1 hover:bg-[#5c7043] hover:shadow-lg sm:px-6 sm:text-base"
              >
                View Projects <span aria-hidden="true">→</span>
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border-2 border-[#6f8253] px-5 py-3 text-sm font-medium text-[#52633b] transition hover:bg-[#6f8253] hover:text-white sm:px-6 sm:text-base"
              >
                Download Resume
              </a>
            </div>

            {/* Developer profiles */}
            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 sm:mt-8">
              <a
                href="https://github.com/aish-0925"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="profile-link inline-flex items-center gap-2"
              >
                <FaGithub className="text-[21px]" style={{ color: "#181717" }} />
                <span>GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/aishwarya-a-poojary/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="profile-link inline-flex items-center gap-2"
              >
                <FaLinkedin className="text-[21px]" style={{ color: "#0A66C2" }} />
                <span>LinkedIn</span>
              </a>

              <a
                href="https://leetcode.com/u/aishwarya_a_poojary25/"
                target="_blank"
                rel="noreferrer"
                aria-label="LeetCode Profile"
                className="profile-link inline-flex items-center gap-2"
              >
                <SiLeetcode className="text-[20px]" style={{ color: "#FFA116" }} />
                <span>LeetCode</span>
              </a>
            </div>
          </motion.div>

          {/* Scrapbook profile photo */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex min-h-[350px] items-center justify-center sm:min-h-[390px] lg:min-h-[420px] lg:justify-end"
          >
            <div className="absolute right-[24%] top-5 z-30 h-6 w-20 rotate-[3deg] bg-[#cbb8e5]/80 shadow-sm sm:w-24" />

            <div className="relative z-10 mt-2 w-[205px] rotate-[2deg] sm:w-[220px] md:w-[230px] lg:mr-5 lg:w-[235px]">
              <PolaroidCard />
            </div>

            <div className="absolute bottom-1 right-0 z-20 sm:right-1 lg:right-0">
              <StickyNote />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
