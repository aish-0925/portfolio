import { motion } from "framer-motion";
import {
  FaPython,
  FaJava,
  FaReact,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiJavascript,
  SiDotnet,
  SiMysql,
  SiMongodb,
} from "react-icons/si";

import { FaCode } from "react-icons/fa";

const skills = [
  {
    name: "Python",
    icon: <FaPython size={40} />,
  },
  {
    name: "Java",
    icon: <FaJava size={40} />,
  },
  {
  name: "C#",
  icon: <FaCode size={40} />,
},
  {
    name: "JavaScript",
    icon: <SiJavascript size={40} />,
  },
  {
    name: "React",
    icon: <FaReact size={40} />,
  },
  {
    name: ".NET",
    icon: <SiDotnet size={40} />,
  },
  {
    name: "MySQL",
    icon: <SiMysql size={40} />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb size={40} />,
  },
  {
    name: "Git",
    icon: <FaGitAlt size={40} />,
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="max-w-7xl mx-auto px-6 py-24"
    >
      <h2
        className="
        text-5xl
        font-bold
        mb-16
        text-center
        "
      >
        My Skills
      </h2>

      <div
        className="
        grid
        grid-cols-2
        md:grid-cols-3
        lg:grid-cols-5
        gap-8
        "
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            whileHover={{
              scale: 1.08,
              rotate: 2,
            }}
            transition={{
              duration: 0.4,
            }}
            viewport={{ once: true }}
            className="
            bg-white
            rounded-2xl
            shadow-md
            p-6
            flex
            flex-col
            items-center
            justify-center
            gap-4
            cursor-pointer
            border
            border-gray-200
            "
          >
            {skill.icon}

            <h3
              className="
              font-semibold
              text-lg
              "
            >
              {skill.name}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}