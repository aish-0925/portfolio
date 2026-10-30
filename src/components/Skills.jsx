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
    title: "Languages",
    skills: [
      { name: "Python", icon: FaPython, color: "#3776AB" },
      { name: "Java", icon: FaJava, color: "#E76F00" },
      { name: "JavaScript", icon: SiJavascript, color: "#D6B800" },
      { name: "SQL", icon: FaCode },
      { name: "C", icon: SiC, color: "#A8B9CC" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", icon: FaCode, color: "#E34F26" },
      { name: "CSS3", icon: FaCode, color: "#1572B6" },
      { name: "React.js", icon: FaReact, color: "#149ECA" },
      { name: "Tailwind CSS", icon: FaCode, color: "#06B6D4" },
    ],
  },
  {
    title: "Backend & APIs",
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "#339933" },
      { name: "Express.js", icon: FaCode, color: "#444444" },
      { name: "ASP.NET", icon: SiDotnet, color: "#512BD4" },
      { name: "ADO.NET", icon: FaCode, color: "#512BD4" },
      { name: "REST APIs", icon: FaCode },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "SQL Server", icon: FaCode, color: "#CC2927" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: FaGitAlt, color: "#F05032" },
      { name: "GitHub", icon: FaGithub, color: "#181717" },
      { name: "VS Code", icon: FaCode, color: "#007ACC" },
      { name: "Postman", icon: FaCode, color: "#FF6C37" },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS", icon: FaCode, color: "#FF9900" },
      { name: "Docker", icon: FaCode, color: "#2496ED" },
      { name: "GitHub Actions", icon: FaGithub, color: "#2088FF" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:px-10 lg:py-16">
      <div className="mb-8 flex flex-col gap-2 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="caveat text-xl text-[#6f8253] sm:text-2xl">what I work with</p>
          <h2 className="playfair mt-1 text-3xl font-bold text-[#242424] sm:text-4xl">
            Technical Skills
          </h2>
        </div>
        <p className="max-w-sm text-sm leading-6 text-[#77736b] sm:text-right">
          A snapshot of the languages, frameworks and tools I use to build software.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map((group, index) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.35, delay: index * 0.05 }}
            className="rounded-xl border border-[#e7e0d5] bg-white/90 p-4 shadow-[0_3px_12px_rgba(40,35,25,0.04)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_7px_18px_rgba(40,35,25,0.07)] sm:p-5"
          >
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.13em] text-[#64764f]">
              {group.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <span
                    key={skill.name}
                    className="inline-flex items-center gap-1.5 rounded-md border border-[#e9e6de] bg-[#fbfaf7] px-2.5 py-1.5 text-[13px] font-medium text-[#44433e]"
                  >
                    <Icon
                      className="shrink-0 text-[13px]"
                      style={{ color: skill.color || "#71835d" }}
                      aria-hidden="true"
                    />
                    {skill.name}
                  </span>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
