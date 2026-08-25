import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { motion } from "framer-motion";

import {
  FaGithub
} from "react-icons/fa";

import projects from "../data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto px-6 py-24"
    >
      <h2
        className="
        text-5xl
        font-bold
        text-center
        mb-16
        "
      >
        Featured Projects
      </h2>

      <Swiper
        spaceBetween={40}
        slidesPerView={1}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <motion.div
              whileHover={{
                scale: 1.02,
              }}
              className="
              bg-[#fff8ef]
              rounded-3xl
              shadow-xl
              p-8
              "
            >
              <div className="grid md:grid-cols-2 gap-8">

                {/* Image */}

                <div className="relative">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="
                    rounded-xl
                    shadow-lg
                    "
                  />

                  <div
                    className="
                    absolute
                    -top-3
                    right-8
                    text-4xl
                    "
                  >
                    📎
                  </div>

                </div>

                {/* Content */}

                <div>

                  <h3
                    className="
                    text-4xl
                    font-bold
                    "
                  >
                    {project.title}
                  </h3>

                  <p
                    className="
                    text-lg
                    text-gray-500
                    mt-2
                    "
                  >
                    {project.subtitle}
                  </p>

                  <div className="flex gap-3 mt-5 flex-wrap">

                    {project.tech.map(
                      (item, i) => (
                        <span
                          key={i}
                          className="
                          bg-orange-100
                          px-4
                          py-1
                          rounded-full
                          "
                        >
                          {item}
                        </span>
                      )
                    )}

                  </div>

                  <p
                    className="
                    mt-6
                    leading-8
                    "
                  >
                    {project.description}
                  </p>

                  <div
                    className="
                    flex
                    gap-4
                    mt-8
                    "
                  >

                    <a
                      href={project.demo}
                      className="
                      bg-green-700
                      text-white
                      px-5
                      py-3
                      rounded-xl
                      "
                    >
                      View Project
                    </a>

                    <a
                      href={project.github}
                      className="
                      border
                      px-5
                      py-3
                      rounded-xl
                      "
                    >
                      <FaGithub />
                    </a>

                  </div>

                </div>

              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}