
import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Programming Languages",
    skills: ["Python", "Java", "SQL", "C", "JavaScript"],
    accent: "bg-[#d9c2f1]",
  },
  {
    title: "Databases",
    skills: ["MySQL", "MongoDB"],
    accent: "bg-[#dfe7d3]",
  },
  {
    title: "Frameworks & Technologies",
    skills: [".NET", "React.js", "Node.js"],
    accent: "bg-[#f7c9d8]",
  },
  {
    title: "Tools & Platforms",
    skills: ["Microsoft Excel", "Git", "GitHub"],
    accent: "bg-[#f8e08a]",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="max-w-7xl mx-auto px-6 lg:px-10 py-24"
    >
      {/* Heading */}
      <div className="text-center mb-14">
        <p className="caveat text-3xl text-[#6f8253]">
          tools I work with
        </p>

        <h2 className="playfair text-5xl md:text-6xl font-bold mt-2 text-[#242424]">
          Technical Skills
        </h2>
      </div>

      {/* Skill Groups */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillGroups.map((group, index) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.08,
            }}
            className="
              paper
              paper-shadow
              rounded-xl
              p-7
              relative
              transition
              hover:-translate-y-1
            "
          >
            {/* Small paper label */}
            <div
              className={`
                absolute
                -top-3
                left-5
                ${group.accent}
                px-4
                py-1
                rounded-md
                text-sm
                font-medium
                rotate-[-2deg]
              `}
            >
              {group.title}
            </div>

            <div className="pt-5 space-y-3">
              {group.skills.map((skill) => (
                <div
                  key={skill}
                  className="
                    flex
                    items-center
                    gap-3
                    text-[#444]
                    border-b
                    border-[#eee7dc]
                    pb-2
                    last:border-0
                  "
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6f8253]" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

