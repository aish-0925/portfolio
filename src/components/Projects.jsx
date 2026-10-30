import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaArrowUpRightFromSquare,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa6";

import projects from "../data/projects";

function ProjectCard({ project, index }) {
  const [currentImage, setCurrentImage] = useState(0);
  const images = project.images?.length
    ? project.images
    : project.image
      ? [project.image]
      : [];

  const changeImage = (direction) => {
    setCurrentImage((current) =>
      (current + direction + images.length) % images.length
    );
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      whileHover={{ y: -5 }}
      className="relative flex h-full flex-col overflow-hidden rounded-xl border border-[#e9e1d6] bg-white p-4 shadow-[0_5px_18px_rgba(45,38,25,0.06)] transition-shadow hover:shadow-[0_10px_26px_rgba(45,38,25,0.10)] sm:p-5"
    >
      {/* Subtle scrapbook tape detail */}
      <div className="absolute left-1/2 top-0 z-10 h-5 w-20 -translate-x-1/2 -rotate-2 bg-[#d9c2f1]/70" />

      {/* Project preview */}
      <div className="relative overflow-hidden rounded-lg border border-[#eee8df] bg-[#f4efe7]">
        {images.length > 0 ? (
          <img
            src={images[currentImage]}
            alt={`${project.title} project screenshot ${currentImage + 1}`}
            loading="lazy"
            className="h-48 w-full object-cover object-top sm:h-52"
          />
        ) : (
          <div className="flex h-48 items-center justify-center text-sm text-[#777]">
            Project preview
          </div>
        )}

        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => changeImage(-1)}
              aria-label={`Previous ${project.title} screenshot`}
              className="absolute left-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#444] shadow transition hover:bg-white"
            >
              <FaChevronLeft size={12} />
            </button>
            <button
              type="button"
              onClick={() => changeImage(1)}
              aria-label={`Next ${project.title} screenshot`}
              className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#444] shadow transition hover:bg-white"
            >
              <FaChevronRight size={12} />
            </button>
            <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5 rounded-full bg-black/25 px-2 py-1">
              {images.map((image, imageIndex) => (
                <button
                  key={image}
                  type="button"
                  onClick={() => setCurrentImage(imageIndex)}
                  aria-label={`Show screenshot ${imageIndex + 1}`}
                  aria-pressed={currentImage === imageIndex}
                  className={`h-1.5 w-1.5 rounded-full transition ${
                    currentImage === imageIndex ? "scale-125 bg-white" : "bg-white/60"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="flex flex-1 flex-col px-1 pb-1 pt-5">
        <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
          <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#6f8253]">
            {project.category || "Featured Project"}
          </span>
        </div>

        <h3 className="playfair text-2xl font-bold leading-tight text-[#242424]">
          {project.title}
        </h3>
        <p className="mt-1 text-sm text-[#777]">{project.subtitle}</p>

        <p className="mt-4 text-sm leading-6 text-[#555]">
          {project.description}
        </p>

        {project.highlights?.length > 0 && (
          <ul className="mt-3 space-y-2 text-sm leading-5 text-[#555]">
            {project.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-2">
                <span className="mt-0.5 text-[#71865a]" aria-hidden="true">•</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((item) => (
            <span
              key={item}
              className="rounded-full border border-[#e8e2d8] bg-[#f6f3ed] px-2.5 py-1 text-[11px] font-medium text-[#555]"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap items-center gap-3 pt-5">
          {project.demo && project.demo !== "#" && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[#6f8253] px-3.5 py-2 text-sm font-medium text-white transition hover:bg-[#5c7043]"
            >
              Live Demo
              <FaArrowUpRightFromSquare size={11} />
            </a>
          )}

          {project.github && project.github !== "#" && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-[#d8d1c6] px-3.5 py-2 text-sm font-medium text-[#444] transition hover:border-[#6f8253] hover:bg-[#f1eee7] hover:text-[#52633b]"
            >
              <FaGithub size={15} />
              Source Code
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-10 lg:py-24"
    >
      <div className="mb-9 text-center sm:mb-12">
        <p className="caveat text-2xl text-[#6f8253] md:text-3xl">
          things I've built
        </p>
        <h2 className="playfair mt-2 text-4xl font-bold text-[#242424] md:text-5xl">
          Featured Projects
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[#777] sm:text-base">
          A selection of applications and experiments where I've put my
          development and problem-solving skills into practice.
        </p>
      </div>

      <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
