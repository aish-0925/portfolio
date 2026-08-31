import { motion } from "framer-motion";

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
      className="max-w-7xl mx-auto px-6 lg:px-10 py-24"
    >
      {/* Section Heading */}
      <div className="text-center mb-14">
        <p className="caveat text-3xl text-[#6f8253]">
          continuous learning
        </p>

        <h2 className="playfair text-5xl md:text-6xl font-bold mt-2">
          Certifications
        </h2>
      </div>

      {/* Certification Table */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="
          bg-white
          border
          border-[#e7dfd2]
          rounded-xl
          paper-shadow
          overflow-hidden
        "
      >
        {/* Table Header */}
        <div
          className="
            grid
            grid-cols-[1fr_180px_170px]
            gap-6
            items-center
            px-7
            py-4
            bg-[#f5f0e8]
            border-b
            border-[#e7dfd2]
          "
        >
          <p className="text-xs uppercase tracking-wider text-[#777] font-medium">
            Certification
          </p>

          <p className="text-xs uppercase tracking-wider text-[#777] font-medium">
            Issuer
          </p>

          <p className="text-xs uppercase tracking-wider text-[#777] font-medium text-center">
            Certificate
          </p>
        </div>

        {/* Certification Rows */}
        {certifications.map((certificate, index) => (
          <motion.div
            key={certificate.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
              delay: index * 0.08,
            }}
            className="
              grid
              grid-cols-[1fr_180px_170px]
              gap-6
              items-center
              px-7
              py-5
              border-b
              border-[#eee7dc]
              last:border-b-0
              hover:bg-[#fcfaf6]
              transition-colors
            "
          >
            {/* Certification */}
            <div className="flex items-center gap-3 min-w-0">
              <span
                className={`
                  w-2.5
                  h-2.5
                  rounded-full
                  ${certificate.accent}
                  shrink-0
                `}
              />

              <h3 className="playfair text-lg font-semibold leading-6">
                {certificate.title}
              </h3>
            </div>

            {/* Issuer */}
            <p className="text-sm text-[#777]">
              {certificate.issuer}
            </p>

            {/* View Certificate */}
            <div className="text-center">
              <a
                href={certificate.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-block
                  text-sm
                  font-medium
                  text-[#6f8253]
                  border-b
                  border-[#6f8253]
                  hover:text-[#52633d]
                  hover:border-[#52633d]
                  transition-colors
                "
              >
                View Certificate 
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

