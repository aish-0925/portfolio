import { motion } from "framer-motion";
import { FaGithub, FaArrowUpRightFromSquare } from "react-icons/fa6";

import projects from "../data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto px-6 lg:px-10 py-24"
    >
      {/* Heading */}
      <div className="text-center mb-14">
        <p className="caveat text-3xl text-[#6f8253]">
          things I've built
        </p>

        <h2 className="playfair text-5xl md:text-6xl font-bold mt-2">
          Featured Projects
        </h2>
      </div>

      {/* Projects */}
      <div className="grid lg:grid-cols-3 gap-8 items-start">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{
              opacity: 0,
              y: 40,
              rotate: index % 2 === 0 ? -1 : 1,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            whileHover={{
              y: -8,
              rotate: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
            className="
              bg-white
              border
              border-[#e9e1d6]
              rounded-lg
              p-4
              paper-shadow
              relative
            "
          >
            {/* Paper tape */}
            <div
              className="
                absolute
                -top-3
                left-1/2
                -translate-x-1/2
                w-24
                h-7
                bg-[#d9c2f1]/70
                rotate-[-2deg]
                z-10
              "
            />

            {/* Image */}
            <div className="overflow-hidden rounded-md bg-[#f4efe7]">
              <img
                src={project.image}
                alt={project.title}
                className="
                  w-full
                  h-48
                  object-cover
                  transition
                  duration-500
                  hover:scale-105
                "
              />
            </div>

            {/* Content */}
            <div className="pt-6 px-2 pb-3">

              <p className="caveat text-2xl text-[#6f8253]">
                Project {String(index + 1).padStart(2, "0")}
              </p>

              <h3 className="playfair text-2xl font-bold mt-1">
                {project.title}
              </h3>

              <p className="text-sm text-[#777] mt-1">
                {project.subtitle}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="
                      text-xs
                      px-3
                      py-1
                      rounded-full
                      bg-[#f1eee7]
                      text-[#555]
                    "
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="text-sm leading-7 text-[#555] mt-5">
                {project.description}
              </p>

              {/* Links */}
              <div className="flex gap-3 mt-6">

                {project.demo && project.demo !== "#" && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      inline-flex
                      items-center
                      gap-2
                      bg-[#6f8253]
                      text-white
                      px-4
                      py-2
                      rounded-lg
                      text-sm
                      hover:bg-[#5c7043]
                      transition
                    "
                  >
                    View Project
                    <FaArrowUpRightFromSquare size={12} />
                  </a>
                )}

                {project.github && project.github !== "#" && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.title} GitHub`}
                    className="
                      inline-flex
                      items-center
                      justify-center
                      w-10
                      h-10
                      border
                      border-[#d8d1c6]
                      rounded-lg
                      hover:bg-[#f1eee7]
                      transition
                    "
                  >
                    <FaGithub />
                  </a>
                )}

              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

