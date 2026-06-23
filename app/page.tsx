"use client";

import { Terminal as TerminalIcon, Cloud, Layout } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { projectsData } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Terminal from "../components/Terminal";

export default function Home() {
  // Configurations des animations (effet de cascade / stagger)
  // Configurations des animations
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <main className="min-h-screen flex flex-col items-center pt-24 pb-20 px-6">
      
      {/* --- SECTION 1 : HERO (Introduction animée) --- */}
      <motion.section 
        className="w-full max-w-4xl flex flex-col items-center text-center space-y-6 mb-32 mt-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Titre animé */}
        <motion.h1 
          className="text-5xl font-bold tracking-tight sm:text-6xl text-slate-900 dark:text-white"
          variants={itemVariants}
        >
          Software Engineering Student <span className="text-blue-500">&</span> UX Enthusiast
        </motion.h1>
        
        {/* Description animée */}
        <motion.p 
          className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl"
          variants={itemVariants}
        >
          Je construis des ponts entre des infrastructures complexes et des interfaces intuitives. 
          De l&apos;intégration de modèles d&apos;IA à la conception d&apos;architectures Cloud, jusqu&apos;au pixel près.
        </motion.p>

        {/* Pilules de compétences animées */}
        <motion.div 
          className="flex flex-wrap justify-center gap-6 pt-8"
          variants={itemVariants}
        >
          <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 px-4 py-2 rounded-full shadow-sm border border-slate-200 dark:border-slate-700">
            <TerminalIcon size={20} className="text-green-500" />
            <span className="font-medium text-sm">Linux & DevOps</span>
          </div>
          <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 px-4 py-2 rounded-full shadow-sm border border-slate-200 dark:border-slate-700">
            <Cloud size={20} className="text-blue-500" />
            <span className="font-medium text-sm">Cloud Computing</span>
          </div>
          <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 px-4 py-2 rounded-full shadow-sm border border-slate-200 dark:border-slate-700">
            <Layout size={20} className="text-purple-500" />
            <span className="font-medium text-sm">UX/UI Design</span>
          </div>
        </motion.div>

        {/* Terminal interactif animé */}
        <motion.div className="w-full pt-4" variants={itemVariants}>
          <Terminal />
        </motion.div>
      </motion.section>

      {/* --- SECTION 2 : PROJETS --- */}
      <section id="projets" className="w-full max-w-5xl scroll-mt-28">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
            Projets Sélectionnés
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            Un aperçu de mes études de cas, alliant rigueur backend et excellence frontend.
          </p>
        </div>

        {/* Grille dynamique des projets */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* --- SECTION 3 : COMPÉTENCES --- */}
      <Skills />

      {/* --- SECTION 4 : CONTACT --- */}
      <Contact />

    </main>
  );
}