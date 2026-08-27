import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-6 lg:px-10 py-24"
    >
      <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative max-w-md mx-auto"
        >
          <div
            className="
              bg-[#dfe7d3]
              p-4
              rounded-lg
              shadow-lg
              rotate-2
            "
          >
            <img
              src="/about.jpg"
              alt="Aishwarya A Poojary"
              className="w-full rounded-md"
            />
          </div>

          {/* Small paper note */}
          <div
            className="
              absolute
              -bottom-6
              -right-5
              bg-[#f7c9d8]
              px-5
              py-3
              rotate-[-4deg]
              shadow-md
              text-sm
            "
          >
            Always curious.
            <br />
            Always learning.
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="
            bg-white
            border
            border-[#e7dfd2]
            rounded-xl
            p-8
            md:p-10
            paper-shadow
            relative
          "
        >
          <p className="caveat text-3xl text-[#6f8253]">
            a little about me
          </p>

          <h2 className="playfair text-5xl font-bold mt-2 mb-6">
            About Me
          </h2>

          <p className="text-[#555] leading-8">
            I recently completed my Master of Computer Applications (MCA)
            and have a strong interest in software development, databases,
            and data-driven solutions.
          </p>

          <p className="text-[#555] leading-8 mt-5">
            I enjoy learning new technologies and building practical
            applications that solve real-world problems. I am particularly
            interested in growing my skills in data engineering, databases,
            and modern software technologies.
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            <span className="small-tag">Data</span>
            <span className="small-tag">Databases</span>
            <span className="small-tag">Software Development</span>
            <span className="small-tag">Problem Solving</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

