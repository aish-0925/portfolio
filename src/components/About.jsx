import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            grid
            lg:grid-cols-[0.8fr_1.2fr]
            gap-10
            lg:gap-16
            items-center
          "
        >

          {/* LEFT SIDE */}
          <div className="relative">

  <p className="caveat text-2xl md:text-3xl text-[#71865a] mb-2">
    a little about me
  </p>

  <h2
    className="
      playfair
      text-4xl
      md:text-5xl
      font-bold
      text-[#202020]
      leading-tight
    "
  >
    About Me
  </h2>

  <div className="mt-5 w-16 h-1 bg-[#71865a] rounded-full" />

  <p
    className="
      mt-5
      max-w-sm
      text-[#5b5b5b]
      text-base
      leading-7
    "
  >
    I enjoy turning ideas into simple, practical solutions and learning
    along the way.
  </p>

</div>


          {/* RIGHT SIDE */}
        <div
  className="
    bg-[#fffefa]
    border
    border-[#e5dfd4]
    rounded-2xl
    px-6
    py-6
    md:px-8
    md:py-8
    shadow-[0_10px_30px_rgba(70,65,50,0.08)]
  "
>
  <p className="text-[#555] text-base leading-7">
    I’m an MCA graduate with a strong foundation in software development,
    SQL, databases, and modern web technologies.
  </p>

  <p className="mt-4 text-[#555] text-base leading-7">
    I enjoy building practical applications, solving problems with code,
    and learning new technologies. I’m particularly interested in software
    development, backend systems, and data engineering.
  </p>

  <div
    className="
      mt-6
      pt-5
      border-t
      border-[#e8e2d8]
      flex
      flex-wrap
      gap-2
    "
  >
    <span className="about-tag">
      Software Development
    </span>

    <span className="about-tag">
      SQL & Databases
    </span>

    <span className="about-tag">
      Data Engineering
    </span>
  </div>
</div>

        </motion.div>

      </div>
    </section>
  );
}