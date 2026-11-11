import { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Publication", href: "#publication" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-[#EDE7DA] border-b border-[#d8d0c2] shadow-sm">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 py-4 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={closeMenu}
            className="playfair text-xl sm:text-2xl md:text-3xl font-bold text-[#242424]"
          >
            Aishwarya A Poojary
          </a>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center gap-5 xl:gap-6 text-sm font-medium text-[#444]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-[#6f8253] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop resume */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="hidden lg:inline-flex border-2 border-[#6f8253] text-[#52633b] px-5 py-2 rounded-full text-sm font-medium hover:bg-[#6f8253] hover:text-white transition"
          >
            Resume
          </a>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-xl border border-[#d8d0c2] text-[#52633b] hover:bg-[#e3dccf] transition"
          >
            <FaBars size={20} />
          </button>
        </div>
      </nav>

      {/* Mobile sidebar and backdrop */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-[60]">
          <button
            type="button"
            aria-label="Close navigation menu"
            onClick={closeMenu}
            className="absolute inset-0 w-full h-full bg-black/40"
          />

          <aside
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="absolute left-0 top-0 flex h-full w-[min(82vw,320px)] flex-col bg-[#F7F3EA] border-r border-[#d8d0c2] shadow-2xl animate-[slideIn_0.25s_ease-out]"
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-[#e2dbcf]">
              <div>
                <p className="caveat text-xl text-[#71865a]">welcome to</p>
                <p className="playfair text-lg font-bold text-[#242424]">
                  My Portfolio
                </p>
              </div>
              <button
                type="button"
                onClick={closeMenu}
                aria-label="Close navigation menu"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full text-[#52633b] hover:bg-[#e9e3d8] transition"
              >
                <FaXmark size={20} />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto px-4 py-5">
              <p className="px-3 mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#999080]">
                Explore
              </p>
              <div className="space-y-1">
                {navLinks.map((link, index) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className="flex items-center gap-3 rounded-xl px-3 py-3 text-[15px] font-medium text-[#45443e] hover:bg-[#e9e3d8] hover:text-[#52633b] transition-colors"
                  >
                    <span className="w-6 text-xs font-semibold text-[#9a9a83]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {link.label}
                  </a>
                ))}
              </div>
            </nav>

            <div className="border-t border-[#e2dbcf] p-5">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                onClick={closeMenu}
                className="flex w-full items-center justify-center rounded-xl bg-[#6f8253] px-5 py-3 text-sm font-semibold text-white hover:bg-[#5c7043] transition"
              >
                View Resume
              </a>
            </div>
          </aside>
        </div>
      )}
    </>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> b3554b7bfeb13a333c28c68091fb77423ced3b20
