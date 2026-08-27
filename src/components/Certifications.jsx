import { motion } from "framer-motion";

const certifications = [
  {
    title: "AWS Cloud Technical Essentials",
    issuer: "Coursera",
    accent: "bg-[#dfe7d3]",
  },
  {
    title: "Docker Essentials: A Developer Introduction",
    issuer: "IBM",
    accent: "bg-[#d9c2f1]",
  },
  {
    title: "Networking Basics",
    issuer: "Cisco",
    accent: "bg-[#f7c9d8]",
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="max-w-7xl mx-auto px-6 lg:px-10 py-24"
    >
      <div className="text-center mb-14">
        <p className="caveat text-3xl text-[#6f8253]">
          continuous learning
        </p>

        <h2 className="playfair text-5xl md:text-6xl font-bold mt-2">
          Certifications
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {certifications.map((certificate, index) => (
          <motion.div
            key={certificate.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
            whileHover={{
              y: -5,
            }}
            className="
              bg-white
              border
              border-[#e7dfd2]
              rounded-xl
              paper-shadow
              p-7
              relative
            "
          >
            {/* Small colored label */}
            <div
              className={`
                absolute
                -top-3
                left-6
                ${certificate.accent}
                px-4
                py-1
                rounded-md
                text-xs
                font-medium
                rotate-[-2deg]
              `}
            >
              Certificate
            </div>

            <div className="pt-5">

              <p className="text-xs uppercase tracking-wider text-[#999]">
                {certificate.issuer}
              </p>

              <h3 className="playfair text-xl font-bold mt-2 leading-7">
                {certificate.title}
              </h3>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

