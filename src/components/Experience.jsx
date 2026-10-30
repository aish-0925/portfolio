import { motion } from "framer-motion";
import { FaCalendarAlt, FaBuilding, FaCode } from "react-icons/fa";

const responsibilities = [
  "Contributed to the development of an employee service management web application.",
  "Worked with ASP.NET WebForms to assist in implementing and maintaining application features.",
  "Used SQL Server for database operations and handling application data.",
  "Assisted with testing, debugging and resolving issues during development.",
];

const technologies = ["ASP.NET WebForms", "C#", "SQL Server", "ADO.NET"];

export default function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:px-10 lg:py-24"
    >
      <div className="mb-10 text-center sm:mb-12">
        <p className="caveat text-2xl text-[#6f8253] md:text-3xl">
          where I've worked
        </p>
        <h2 className="playfair mt-2 text-4xl font-bold text-[#242424] md:text-5xl">
          Experience
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-[#777] sm:text-base">
          Practical experience gained while contributing to a real-world
          software development team.
        </p>
      </div>

      <motion.article
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-xl border border-[#e7dfd2] bg-white p-6 shadow-[0_5px_20px_rgba(45,38,25,0.06)] sm:p-8 md:p-10"
      >
        <div className="absolute left-0 top-0 h-full w-1.5 bg-[#819267]" />

        <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0">
            <span className="inline-flex items-center rounded-full bg-[#f0f2e9] px-3 py-1 text-xs font-semibold tracking-wide text-[#63764d]">
              PROFESSIONAL EXPERIENCE
            </span>

            <h3 className="playfair mt-4 text-2xl font-bold leading-tight text-[#242424] sm:text-3xl">
              .NET Developer Intern
            </h3>

            <p className="mt-2 flex items-center gap-2 text-base font-medium text-[#6f8253] sm:text-lg">
              <FaBuilding className="shrink-0 text-sm" aria-hidden="true" />
              Manipal Technologies Limited
            </p>
          </div>

          <div className="inline-flex w-fit shrink-0 items-center gap-2 rounded-lg border border-[#e9e2d7] bg-[#fbf9f5] px-3 py-2 text-sm text-[#68665f]">
            <FaCalendarAlt className="text-[#78875f]" aria-hidden="true" />
            Dec 2025 – May 2026
          </div>
        </div>

        <div className="mt-7 border-t border-[#eee7dc] pt-6">
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-[#77736b]">
            Key Contributions
          </h4>

          <ul className="space-y-3.5">
            {responsibilities.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm leading-6 text-[#555] sm:text-[15px]">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#819267]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-7 border-t border-[#eee7dc] pt-6">
          <h4 className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#77736b]">
            <FaCode className="text-[#78875f]" aria-hidden="true" />
            Technologies
          </h4>

          <div className="flex flex-wrap gap-2">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-[#e5e1d8] bg-[#f6f4ee] px-3 py-1.5 text-xs font-medium text-[#555] sm:text-sm"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </motion.article>
    </section>
  );
}
