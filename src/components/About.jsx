import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-6 py-24"
    >
      <div className="grid md:grid-cols-2 gap-10 items-center">

        {/* Photo Card */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="bg-[#dfe7d3] p-4 rounded-lg shadow-lg rotate: -2deg">

            <img
              src="/about.jpg"
              alt="Aishwarya"
              className="rounded-lg"
            />

          </div>

          {/* Pin */}

          <div className="absolute -top-3 left-10 w-5 h-5 rounded-full bg-yellow-500 shadow-lg"></div>

          {/* Sticky Note */}

          <div
            className="
            absolute
            -bottom-6
            right-5
            bg-pink-200
            px-5
            py-3
            rotate-[-5deg]
            shadow-md
            "
          >
            <p className="font-medium">
              Always curious.
              <br />
              Always learning.
            </p>
          </div>

        </motion.div>

        {/* About Text */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="
          bg-[#b7c49c]
          p-10
          rounded-xl
          relative
          shadow-lg
          "
        >

          <h2
            className="
            text-5xl
            font-bold
            mb-6
            "
          >
            About Me
          </h2>

          <p className="text-lg leading-8">

            I recently completed my Master of
            Computer Applications (MCA).

            I am passionate about software
            development, databases, and
            data-driven solutions.

          </p>

          <p className="text-lg leading-8 mt-5">

            I enjoy learning new technologies
            and building scalable applications
            that solve real-world problems.

          </p>

          <div
            className="
            absolute
            top-4
            right-4
            text-3xl
            "
          >
            
          </div>

        </motion.div>

      </div>
    </section>
  );
}