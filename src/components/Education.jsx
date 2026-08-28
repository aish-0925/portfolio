import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa6";

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "NMAM Institute of Technology (NMAMIT), Nitte",
    period: "2024 – 2026",
    score: "CGPA: 9.29",
  },
  {
    degree: "Bachelor of Science (B.Sc.)",
    institution: "PoornaPrajna College, Udupi",
    period: "2021 – 2024",
    score: "CGPA: 9.11",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="max-w-5xl mx-auto px-6 lg:px-10 py-20 lg:py-24"
    >
      {/* Heading */}
      <div className="text-center mb-12">
        <p className="caveat text-2xl md:text-3xl text-[#6f8253]">
          my academic journey
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
          Education
        </h2>
      </div>

      {/* Education Cards */}
      <div className="relative">

        {/* Timeline */}
        <div
          className="
            absolute
            left-5
            md:left-1/2
            top-0
            bottom-0
            w-px
            bg-[#d8dfce]
            md:-translate-x-1/2
          "
        />

        <div className="space-y-10">
          {education.map((item, index) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.12,
              }}
              className="
                relative
                grid
                md:grid-cols-2
                gap-6
                items-center
              "
            >

              {/* Timeline Icon */}
              <div
                className="
                  absolute
                  left-5
                  md:left-1/2
                  -translate-x-1/2
                  z-10
                  w-10
                  h-10
                  rounded-full
                  bg-[#eef1e8]
                  border
                  border-[#d2dbc7]
                  flex
                  items-center
                  justify-center
                  text-[#6f8253]
                "
              >
                <FaGraduationCap size={17} />
              </div>

              {/* Period */}
              <div
                className={`
                  pl-16
                  md:pl-0
                  ${
                    index % 2 === 0
                      ? "md:text-right md:pr-12"
                      : "md:col-start-2 md:pl-12"
                  }
                `}
              >
                <span
                  className="
                    caveat
                    text-2xl
                    text-[#6f8253]
                  "
                >
                  {item.period}
                </span>
              </div>

              {/* Education Card */}
              <div
                className={`
                  ml-16
                  md:ml-0
                  bg-[#fffefa]
                  border
                  border-[#e5dfd4]
                  rounded-xl
                  p-6
                  paper-shadow
                  ${
                    index % 2 === 0
                      ? "md:col-start-2 md:pl-8"
                      : "md:col-start-1 md:row-start-1 md:pr-8"
                  }
                `}
              >
                <h3
                  className="
                    playfair
                    text-xl
                    md:text-2xl
                    font-bold
                    text-[#242424]
                  "
                >
                  {item.degree}
                </h3>

                <p className="mt-2 text-[#666] text-sm md:text-base leading-6">
                  {item.institution}
                </p>

                <p
                  className="
                    mt-4
                    inline-block
                    px-3
                    py-1
                    rounded-full
                    bg-[#eef1e8]
                    text-[#596d46]
                    text-sm
                    font-medium
                  "
                >
                  {item.score}
                </p>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}