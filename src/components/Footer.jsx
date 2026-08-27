import {
  FaGithub,
  FaLinkedin,
  FaCode,
  FaLaptopCode,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#6f8253] text-white mt-16">

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">

        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Name & Role */}
          <div className="text-center md:text-left">

            <p className="playfair text-2xl font-bold">
              Aishwarya A Poojary
            </p>

            <p className="text-sm text-white/80 mt-2">
              MCA Graduate · Aspiring Software Developer
            </p>

          </div>

          {/* Developer Profiles */}
          <div className="flex items-center gap-4">

            <a
              href="https://github.com/aish-0925"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="
                w-10
                h-10
                rounded-full
                bg-white/10
                flex
                items-center
                justify-center
                hover:bg-white
                hover:text-[#6f8253]
                transition
              "
            >
              <FaGithub size={18} />
            </a>

            <a
              href="https://www.linkedin.com/in/aishwarya-a-poojary/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="
                w-10
                h-10
                rounded-full
                bg-white/10
                flex
                items-center
                justify-center
                hover:bg-white
                hover:text-[#6f8253]
                transition
              "
            >
              <FaLinkedin size={18} />
            </a>

            {/* Replace # with your LeetCode URL */}
            <a
              href="#"
              aria-label="LeetCode"
              className="
                w-10
                h-10
                rounded-full
                bg-white/10
                flex
                items-center
                justify-center
                hover:bg-white
                hover:text-[#6f8253]
                transition
              "
            >
              <FaCode size={17} />
            </a>

            {/* Replace # with your HackerRank URL */}
            <a
              href="#"
              aria-label="HackerRank"
              className="
                w-10
                h-10
                rounded-full
                bg-white/10
                flex
                items-center
                justify-center
                hover:bg-white
                hover:text-[#6f8253]
                transition
              "
            >
              <FaLaptopCode size={17} />
            </a>

          </div>

        </div>


        {/* Divider */}
        <div className="border-t border-white/20 mt-10 pt-6">

          <p className="text-center text-xs text-white/65">
            © {new Date().getFullYear()} Aishwarya A Poojary. All rights reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}

