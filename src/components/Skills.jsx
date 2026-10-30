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
      { name: "Python", icon: FaPython },
      { name: "Java", icon: FaJava },
      { name: "JavaScript", icon: SiJavascript },
      { name: "SQL", icon: FaCode },
      { name: "C", icon: SiC },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", icon: FaCode },
      { name: "CSS3", icon: FaCode },
      { name: "React.js", icon: FaReact },
      { name: "Tailwind CSS", icon: FaCode },
    ],
  },
  {
    title: "Backend & APIs",
    skills: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: FaCode },
      { name: "ASP.NET", icon: SiDotnet },
      { name: "ADO.NET", icon: FaCode },
      { name: "REST APIs", icon: FaCode },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", icon: SiMysql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "SQL Server", icon: FaCode },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "VS Code", icon: FaCode },
      { name: "Postman", icon: FaCode },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS", icon: FaCode },
      { name: "Docker", icon: FaCode },
      { name: "GitHub Actions", icon: FaGithub },
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
                    <Icon className="shrink-0 text-[13px] text-[#71835d]" aria-hidden="true" />
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
