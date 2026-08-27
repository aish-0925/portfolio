export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[#EDE7DA] border-b border-[#d8d0c2] shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#home"
          className="playfair text-2xl md:text-3xl font-bold text-[#242424]"
        >
          Aishwarya A Poojary
        </a>

        {/* Navigation */}
        <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-[#444]">

          <a
            href="#about"
            className="hover:text-[#6f8253] transition"
          >
            About
          </a>

          <a
            href="#skills"
            className="hover:text-[#6f8253] transition"
          >
            Skills
          </a>

          <a
            href="#projects"
            className="hover:text-[#6f8253] transition"
          >
            Projects
          </a>

          <a
            href="#experience"
            className="hover:text-[#6f8253] transition"
          >
            Experience
          </a>

          <a
            href="#publication"
            className="hover:text-[#6f8253] transition"
          >
            Publication
          </a>

          <a
            href="#certifications"
            className="hover:text-[#6f8253] transition"
          >
            Certifications
          </a>

          <a
            href="#contact"
            className="hover:text-[#6f8253] transition"
          >
            Contact
          </a>

        </div>

        {/* Resume */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="
            hidden
            sm:inline-flex
            border-2
            border-[#6f8253]
            text-[#52633b]
            px-5
            py-2
            rounded-full
            text-sm
            font-medium
            hover:bg-[#6f8253]
            hover:text-white
            transition
          "
        >
          Resume
        </a>

      </div>
    </nav>
  );
}

