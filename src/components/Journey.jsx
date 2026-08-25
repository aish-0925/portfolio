import { motion } from "framer-motion";

const timeline = [
  {
    year: "2021",
    title: "Bachelor's Degree",
    description:
      "Started my journey in computer applications and programming."
  },
  {
    year: "2024",
    title: "Master of Computer Applications",
    description:
      "Enhanced my knowledge in software development and databases."
  },
  {
    year: "2025",
    title: "Internship",
    description:
      "Worked at Manipal Technologies on Employee Service Management tools."
  },
  {
    year: "2026",
    title: "Future Goal",
    description:
      "Seeking opportunities as a Software Developer or Data Engineer."
  }
];

export default function Journey() {
  return (
    <section
      id="journey"
      className="max-w-6xl mx-auto px-6 py-24"
    >
      <h2 className="text-5xl font-bold text-center mb-20">
        My Journey
      </h2>

      <div className="relative">

        {/* Timeline Line */}

        <div
          className="
          absolute
          left-1/2
          top-0
          h-full
          w-1
          bg-green-700
          transform
          -translate-x-1/2
          "
        />

        {timeline.map((item, index) => (

          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 50
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6
            }}
            viewport={{ once: true }}
            className={`
              flex
              items-center
              mb-20

              ${
                index % 2 === 0
                  ? "justify-start"
                  : "justify-end"
              }
            `}
          >

            <div
              className="
              bg-[#fff8ef]
              p-6
              rounded-2xl
              shadow-lg
              w-100
              relative
              "
            >

              <div
                className="
                absolute
                -top-4
                left-6
                bg-pink-200
                px-4
                py-1
                rotate-[-5deg]
                "
              >
                {item.year}
              </div>

              <h3 className="text-2xl font-bold mt-4">
                {item.title}
              </h3>

              <p className="mt-4 text-gray-600">
                {item.description}
              </p>

            </div>

          </motion.div>
        ))}
      </div>
    </section>
  );
}