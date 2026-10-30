import { motion } from "framer-motion";
import { FaArrowUpRightFromSquare, FaAward } from "react-icons/fa6";

const certifications = [
  {
    title: "AWS Cloud Technical Essentials",
    issuer: "Coursera",
    pdf: "/certificates/aws-cloud-technical-essentials.pdf",
    accent: "bg-[#dfe7d3]",
  },
  {
    title: "Docker Essentials: A Developer Introduction",
    issuer: "IBM",
    pdf: "/certificates/docker-essentials.pdf",
    accent: "bg-[#d9c2f1]",
  },
  {
    title: "Networking Basics",
    issuer: "Cisco",
    pdf: "/certificates/networking-basics.pdf",
    accent: "bg-[#f7c9d8]",
  },
  {
    title: "Agile Project Management",
    issuer: "HP",
    pdf: "/certificates/Agile Project Management.pdf",
    accent: "bg-[#f4df9f]",
  },
  {
    title: "React Basics",
    issuer: "Coursera",
    pdf: "/certificates/React Basics.pdf",
    accent: "bg-[#dfe7d3]",
  },
  {
    title: "MongoDB - The Complete Developer's Guide",
    issuer: "Udemy",
    pdf: "/certificates/MongoDB-Udemy.pdf",
    accent: "bg-[#d9c2f1]",
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-24"
    >
      <div className="text-center mb-12 md:mb-14">
        <p className="caveat text-3xl text-[#6f8253]">
          continuous learning
        </p>
        <h2 className="playfair text-4xl md:text-5xl font-bold mt-2 text-[#202020]">
          Certifications
        </h2>
        <p className="mt-4 text-[#777] text-sm md:text-base">
          A few milestones from my continuous learning journey.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-6">
        {certifications.map((certificate, index) => (
          <motion.article
            key={certificate.title}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
            className="group relative flex flex-col min-h-[220px] rounded-2xl border border-[#e7dfd2] bg-[#fffefa] p-6 shadow-[0_8px_24px_rgba(70,65,50,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(70,65,50,0.10)]"
          >
            <div className="flex items-start justify-between gap-4">
              <span className={`flex h-11 w-11 items-center justify-center rounded-xl ${certificate.accent} text-[#555]`}>
                <FaAward size={19} />
              </span>
              <span className="text-xs font-medium uppercase tracking-[0.12em] text-[#929084]">
                Certificate {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            <div className="mt-5 flex-1">
              <h3 className="playfair text-xl font-semibold leading-snug text-[#292929]">
                {certificate.title}
              </h3>
              <p className="mt-2 text-sm text-[#777]">
                Issued by <span className="font-semibold text-[#687b4e]">{certificate.issuer}</span>
              </p>
            </div>

            <div className="mt-5 border-t border-[#eee7dc] pt-4">
              <a
                href={certificate.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#6f8253] transition-colors hover:text-[#52633d]"
              >
                View Certificate
                <FaArrowUpRightFromSquare size={12} />
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
