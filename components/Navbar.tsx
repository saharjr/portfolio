"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Moon, Sun } from "lucide-react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Évite les erreurs d'hydratation entre le serveur et le client
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/70 dark:bg-[#0f172a]/70 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo / Nom */}
        <Link href="/" className="font-bold text-xl tracking-tighter hover:text-blue-500 transition-colors">
          Dev<span className="text-blue-500">.</span>Portfolio
        </Link>

        {/* Liens de navigation */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600 dark:text-slate-300">
          <Link href="#projets" className="hover:text-blue-500 transition-colors">Projets</Link>
          <Link href="#competences" className="hover:text-blue-500 transition-colors">Compétences</Link>
          <Link href="#contact" className="hover:text-blue-500 transition-colors">Contact</Link>
        </div>

        {/* Bouton Dark Mode */}
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
          aria-label="Toggle Dark Mode"
        >
          {mounted ? (
            theme === "dark" ? <Sun size={20} /> : <Moon size={20} />
          ) : (
            <div className="w-5 h-5" /> // Espace vide temporaire avant chargement
          )}
        </button>

      </div>
    </nav>
  );
}