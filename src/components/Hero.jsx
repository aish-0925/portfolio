import { motion } from "framer-motion";
import PolaroidCard from "./scrapbook/PolaroidCard";
import StickyNote from "./scrapbook/StickyNote";
import FloatingIcons from "./scrapbook/FloatingIcons";
import Doodles from "./scrapbook/Doodles";
import tapePurple from "../assets/stickers/tape-purple.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center py-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-24 items-center">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="caveat text-6xl text-[#24303d]">
    Hi, I'm
</p>

            <h1 className="playfair leading-none mt-5">
              <span className="block text-6xl md:text-7xl lg:text-[110px] font-bold text-[#202020]">
                Aishwarya
              </span>

              <span className="block text-6xl md:text-7xl lg:text-[110px] font-bold text-[#6f8253]">
                A Poojary
              </span>
            </h1>

            <div className="mt-8 space-y-1 caveat text-3xl">
              <div className="inline-block relative">

    <span
        className="
        absolute
        inset-0
        bg-purple-300
        rounded-md
        -rotate-3"
    ></span>

    <span className="relative px-5 py-1 caveat text-3xl">

        MCA Graduate

    </span>

</div>
              <p>Software Developer</p>
              <p>Aspiring Data Engineer</p>
            </div>

            <p className="mt-8 max-w-md text-gray-700 leading-8">
              I love building clean, efficient and user-friendly
              applications while turning ideas into meaningful
              digital experiences.
            </p>

            <div className="flex gap-5 mt-10 flex-wrap">

              <a
                href="#projects"
                className="bg-[#6f8253] text-white px-7 py-3 rounded-2xl shadow-lg hover:-translate-y-1 transition"
              >
                View My Work →
              </a>

              <a
                href="#contact"
                className="border-2 border-[#6f8253] px-7 py-3 rounded-2xl hover:bg-[#6f8253] hover:text-white transition"
              >
                Let's Connect ♡
              </a>

            </div>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            className="relative flex justify-center"
            animate={{
              y: [0, -12, 0]
            }}
            transition={{
              repeat: Infinity,
              duration: 5
            }}
          >

            {/* Tape */}

            <img
  src={tapePurple}
  alt="Tape"
  className="
    absolute
    -top-4
    left-1/2
    -translate-x-1/2
    w-40
    rotate-2
    z-30
    pointer-events-none
  "
/>

            {/* Paper Clip */}

            <div className="absolute right-6 -top-2 text-5xl rotate-12">
              📎
            </div>

            {/* Polaroid */}

            <div className="absolute -left-28 top-28 hidden lg:block">
  <p className="caveat text-3xl leading-8 text-gray-700">
    Building ideas
    <br />
    Solving problems
    <br />
    Creating impact
  </p>
</div>

<div className="absolute -left-12 top-52 text-5xl rotate-12">
  ↷
</div>

            <PolaroidCard />

            {/* Sticky Note */}

            <StickyNote />

            {/* Floating Icons */}

            <FloatingIcons />
          </motion.div>

        </div>

      </div>
      <Doodles />
    </section>
  );
}