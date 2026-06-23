import { Project } from "../data/projects";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#1e293b] p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
      <div>
        {/* Catégorie / Badge */}
        <span className="inline-block text-xs font-semibold tracking-wider uppercase text-blue-500 mb-4">
          {project.category}
        </span>
        
        {/* Titre */}
        <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-500 transition-colors flex items-center gap-1">
          {project.title}
          <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
        </h3>
        
        {/* Description courte */}
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 line-clamp-3">
          {project.description}
        </p>

        {/* Tags / Technologies */}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-2.5 py-1 rounded-md font-medium">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Section Impact / Résultats */}
      <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-700/50">
        <p className="text-xs text-slate-500 dark:text-slate-400 italic">
          <span className="font-semibold text-slate-700 dark:text-slate-300">Impact :</span> {project.impact}
        </p>
      </div>
    </div>
  );
}