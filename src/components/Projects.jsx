import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaArrowUpRightFromSquare,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa6";

import projects from "../data/projects";


/* ============================================================
   PROJECT CARD
============================================================ */

function ProjectCard({ project, index }) {
  const [currentImage, setCurrentImage] = useState(0);

  // Supports both the new `images` array and old `image` property
  const images =
    project.images && project.images.length > 0
      ? project.images
      : [project.image];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImage(
      (prev) => (prev - 1 + images.length) % images.length
    );
  };

  return (
    <motion.article
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
        delay: index * 0.08,
      }}
      className="
        bg-white
        border
        border-[#e9e1d6]
        rounded-lg
        p-4
        paper-shadow
        relative
        shrink-0
        w-[310px]
        sm:w-[340px]
        lg:w-[360px]
        snap-center
      "
    >

      {/* ======================================================
          PAPER TAPE
      ======================================================= */}

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
          z-20
        "
      />


      {/* ======================================================
          IMAGE CAROUSEL
      ======================================================= */}

      <div className="relative overflow-hidden rounded-md bg-[#f4efe7]">

        <img
          src={images[currentImage]}
          alt={`${project.title} screenshot ${currentImage + 1}`}
          className="
            w-full
            h-52
            object-cover
            transition
            duration-300
          "
        />

        {/* Previous button */}
        {images.length > 1 && (
          <button
            type="button"
            onClick={previousImage}
            aria-label="Previous project image"
            className="
              absolute
              left-2
              top-1/2
              -translate-y-1/2
              w-8
              h-8
              rounded-full
              bg-white/90
              text-[#444]
              flex
              items-center
              justify-center
              shadow
              hover:bg-white
              transition
            "
          >
            <FaChevronLeft size={12} />
          </button>
        )}

        {/* Next button */}
        {images.length > 1 && (
          <button
            type="button"
            onClick={nextImage}
            aria-label="Next project image"
            className="
              absolute
              right-2
              top-1/2
              -translate-y-1/2
              w-8
              h-8
              rounded-full
              bg-white/90
              text-[#444]
              flex
              items-center
              justify-center
              shadow
              hover:bg-white
              transition
            "
          >
            <FaChevronRight size={12} />
          </button>
        )}

        {/* Image indicators */}
        {images.length > 1 && (
          <div
            className="
              absolute
              bottom-3
              left-1/2
              -translate-x-1/2
              flex
              gap-1.5
              bg-black/20
              px-2
              py-1
              rounded-full
            "
          >
            {images.map((_, imageIndex) => (
              <button
                key={imageIndex}
                type="button"
                onClick={() => setCurrentImage(imageIndex)}
                aria-label={`Show image ${imageIndex + 1}`}
                className={`
                  w-1.5
                  h-1.5
                  rounded-full
                  transition
                  ${
                    currentImage === imageIndex
                      ? "bg-white scale-125"
                      : "bg-white/60"
                  }
                `}
              />
            ))}
          </div>
        )}
      </div>


      {/* ======================================================
          CONTENT
      ======================================================= */}

      <div className="pt-6 px-2 pb-3">


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
<div className="flex items-center gap-3 mt-6">

  {/* Live Project */}
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

  {/* GitHub Source Code */}
  {project.github && project.github !== "#" && (
    <a
      href={project.github}
      target="_blank"
      rel="noreferrer"
      className="
        inline-flex
        items-center
        gap-2
        border
        border-[#d8d1c6]
        text-[#444]
        px-4
        py-2
        rounded-lg
        text-sm
        hover:bg-[#f1eee7]
        hover:text-[#6f8253]
        transition
      "
    >
      <FaGithub size={16} />
      Source Code
    </a>
  )}

</div>

      </div>
    </motion.article>
  );
}


/* ============================================================
   PROJECTS SECTION
============================================================ */

export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-24"
    >

      {/* Heading */}
      <div className="text-center mb-12">

        <p className="caveat text-2xl md:text-3xl text-[#6f8253]">
          things I've built
        </p>

        <h2
          className="
            playfair
            text-4xl
            md:text-5xl
            font-bold
            mt-2
            text-[#242424]
          "
        >
          Featured Projects
        </h2>


      </div>


      {/* ======================================================
          HORIZONTAL PROJECT CAROUSEL
      ======================================================= */}

      <div className="relative">

  {/* Previous Projects */}
  <button
    type="button"
    onClick={() => {
      document
        .getElementById("projects-slider")
        ?.scrollBy({
          left: -380,
          behavior: "smooth",
        });
    }}
    aria-label="Previous projects"
    className="
      hidden
      md:flex
      absolute
      -left-5
      top-1/2
      -translate-y-1/2
      z-20
      w-10
      h-10
      rounded-full
      bg-white
      border
      border-[#ddd5c9]
      shadow-md
      items-center
      justify-center
      text-[#555]
      hover:bg-[#f1eee7]
      hover:text-[#6f8253]
      transition
    "
  >
    <FaChevronLeft size={14} />
  </button>


  {/* Project Cards */}
  <div
    id="projects-slider"
    className="
      flex
      gap-7
      overflow-x-auto
      pb-8
      snap-x
      snap-mandatory
      scroll-smooth
      scrollbar-hide
    "
  >
    {projects.map((project, index) => (
      <ProjectCard
        key={project.title}
        project={project}
        index={index}
      />
    ))}
  </div>


  {/* Next Projects */}
  <button
    type="button"
    onClick={() => {
      document
        .getElementById("projects-slider")
        ?.scrollBy({
          left: 380,
          behavior: "smooth",
        });
    }}
    aria-label="Next projects"
    className="
      hidden
      md:flex
      absolute
      -right-5
      top-1/2
      -translate-y-1/2
      z-20
      w-10
      h-10
      rounded-full
      bg-white
      border
      border-[#ddd5c9]
      shadow-md
      items-center
      justify-center
      text-[#555]
      hover:bg-[#f1eee7]
      hover:text-[#6f8253]
      transition
    "
  >
    <FaChevronRight size={14} />
  </button>

</div>

    </section>
  );
}