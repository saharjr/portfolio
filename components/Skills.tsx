"use client";

import { motion } from "framer-motion";
import { Code2, Database, Layout, Server } from "lucide-react";

const skillCategories = [
  {
    title: "Backend & Cloud",
    icon: <Server className="text-blue-500 mb-4" size={32} />,
    skills: ["Python", "Node.js", "PostgreSQL", "Odoo", "AWS / GCP", "Docker"],
  },
  {
    title: "Frontend & UX/UI",
    icon: <Layout className="text-purple-500 mb-4" size={32} />,
    skills: ["React / Next.js", "Tailwind CSS", "TypeScript", "Figma", "Design System"],
  },
  {
    title: "IA & Data",
    icon: <Database className="text-green-500 mb-4" size={32} />,
    skills: ["Machine Learning", "Deep Learning", "Analyse de données", "Modélisation"],
  },
  {
    title: "DevOps & Système",
    icon: <Code2 className="text-orange-500 mb-4" size={32} />,
    skills: ["Linux", "Bash", "CI/CD", "Git / GitHub Actions", "Monitoring"],
  },
];

export default function Skills() {
  return (
    <section id="competences" className="w-full max-w-5xl mt-32 mb-20 scroll-mt-28">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
          Expertise Technique
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
          Une maîtrise transversale allant de l'infrastructure système jusqu'à l'expérience utilisateur finale.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 hover:border-blue-500/50 transition-colors"
          >
            {category.icon}
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
              {category.title}
            </h3>
            <ul className="space-y-2">
              {category.skills.map((skill) => (
                <li key={skill} className="text-slate-600 dark:text-slate-400 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}