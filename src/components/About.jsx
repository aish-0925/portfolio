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
          className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16 items-center"
        >
          {/* LEFT SIDE */}
          <div className="relative">
            <p className="caveat text-2xl md:text-3xl text-[#71865a] mb-2">
              a little about me
            </p>

            <h2 className="playfair text-4xl md:text-5xl font-bold text-[#202020] leading-tight">
              About Me
            </h2>

            <div className="mt-5 w-16 h-1 bg-[#71865a] rounded-full" />

            <p className="mt-5 max-w-sm text-[#5b5b5b] text-base leading-7">
              Curious by nature, I like understanding how things work and
              turning what I learn into useful applications.
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="bg-[#fffefa] border border-[#e5dfd4] rounded-2xl px-6 py-6 md:px-8 md:py-8 shadow-[0_10px_30px_rgba(70,65,50,0.08)]">
            <p className="text-[#555] text-base leading-7">
              I’m an MCA graduate with a foundation in software development,
              databases, and modern web technologies. During my .NET developer
              internship at Manipal Technologies Limited, I gained hands-on
              experience working with ASP.NET WebForms and SQL Server on an
              employee service management application.
            </p>

            <p className="mt-4 text-[#555] text-base leading-7">
              I’ve also worked on projects involving full-stack application
              development and AI/ML, including a farm-to-restaurant platform
              with crop recommendations and a voice-based technical evaluation
              system. These experiences have helped me strengthen my
              problem-solving skills and enjoy learning through building.
            </p>

            <div className="mt-6 pt-5 border-t border-[#e8e2d8] flex flex-wrap gap-2">
              <span className="about-tag">Software Development</span>
              <span className="about-tag">Backend Engineering</span>
              <span className="about-tag">AI & Machine Learning</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}