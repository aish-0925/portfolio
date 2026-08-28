import { motion } from "framer-motion";


import {
  FaPython,
  FaJava,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaCode,
} from "react-icons/fa";

import {
  SiMysql,
  SiMongodb,
  SiJavascript,
  SiDotnet,
  SiC,
} from "react-icons/si";

const skillGroups = [
  {
    title: "Programming Languages",
    accent: "bg-[#d9c2f1]",
    skills: [
      { name: "Python", icon: FaPython },
      { name: "Java", icon: FaJava },
      { name: "SQL", icon: FaCode },
      { name: "C", icon: SiC },
      { name: "JavaScript", icon: SiJavascript },
    ],
  },
  {
    title: "Databases",
    accent: "bg-[#dfe7d3]",
    skills: [
      { name: "MySQL", icon: SiMysql },
      { name: "MongoDB", icon: SiMongodb },
    ],
  },
  {
    title: "Frameworks & Technologies",
    accent: "bg-[#f7c9d8]",
    skills: [
      { name: ".NET", icon: SiDotnet },
      { name: "React.js", icon: FaReact },
      { name: "Node.js", icon: FaNodeJs },
    ],
  },
  {
    title: "Tools & Platforms",
    accent: "bg-[#f8e08a]",
    skills: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-24"
    >
      {/* Heading */}
      <div className="text-center mb-12">
        <p className="caveat text-2xl md:text-3xl text-[#6f8253]">
          tools I work with
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
              p-6
              relative
              transition
              hover:-translate-y-1
            "
          >
            {/* Paper Label */}
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

            {/* Skills */}
            <div className="pt-5 space-y-2">
              {group.skills.map((skill) => {
                const Icon = skill.icon;

                return (
                  <div
                    key={skill.name}
                    className="
                      flex
                      items-center
                      gap-3
                      py-2.5
                      px-2
                      rounded-lg
                      text-[#444]
                      transition
                      hover:bg-[#f4f1e9]
                    "
                  >
                    {/* Icon */}
                    <span
                      className="
                        flex
                        items-center
                        justify-center
                        w-9
                        h-9
                        rounded-lg
                        bg-[#eef1e8]
                        text-[#63764d]
                        shrink-0
                      "
                    >
                      <Icon className="text-[19px]" />
                    </span>

                    {/* Skill Name */}
                    <span className="text-sm md:text-base font-medium">
                      {skill.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}