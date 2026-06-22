"use client";

import { useState, useRef, useEffect } from "react";
import { Terminal as TerminalIcon, X, Minus, Square } from "lucide-react";

export default function Terminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([
    "Bienvenue sur le terminal interactif.",
    "Tapez 'help' pour voir la liste des commandes disponibles."
  ]);
  
  const bottomRef = useRef<HTMLDivElement>(null);

  // Fait défiler le terminal vers le bas automatiquement à chaque nouvelle ligne
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    
    // Ajoute la commande tapée à l'historique
    const newHistory = [...history, `guest@portfolio:~$ ${cmd}`];

    // Logique des réponses du terminal
    switch (cmd) {
      case "help":
        newHistory.push("Commandes : help, whoami, skills, clear, sudo");
        break;
      case "whoami":
        newHistory.push("Ingénieur Logiciel pluridisciplinaire (Cloud, IA, Web, UX/UI).");
        break;
      case "skills":
        newHistory.push("Chargement des compétences...");
        newHistory.push("[OK] Linux, Docker, AWS");
        newHistory.push("[OK] Python, Next.js, Odoo");
        newHistory.push("[OK] Figma, Tailwind CSS");
        break;
      case "sudo":
        newHistory.push("Permission refusée. Joli essai cependant ! 😉");
        break;
      case "clear":
        setHistory([]);
        setInput("");
        return;
      case "":
        break;
      default:
        newHistory.push(`bash: ${cmd}: command not found`);
    }

    setHistory(newHistory);
    setInput("");
  };

  return (
    <div className="w-full max-w-2xl mx-auto mt-12 rounded-xl overflow-hidden border border-slate-700/50 shadow-2xl bg-[#0f172a] text-green-400 font-mono text-sm text-left">
      {/* Barre d'en-tête du terminal (façon macOS/Linux) */}
      <div className="bg-slate-800 px-4 py-2 flex items-center justify-between border-b border-slate-700">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="flex items-center gap-2 text-slate-400 text-xs font-sans">
          <TerminalIcon size={14} />
          <span>guest@portfolio:~</span>
        </div>
        <div className="flex gap-2 text-slate-500">
          <Minus size={14} />
          <Square size={14} />
          <X size={14} />
        </div>
      </div>

      {/* Corps du terminal */}
      <div className="p-4 h-64 overflow-y-auto">
        {history.map((line, i) => (
          <div key={i} className={`${line.startsWith("guest@") ? "text-blue-400 mt-2" : "text-green-400"}`}>
            {line}
          </div>
        ))}
        
        {/* Ligne de saisie */}
        <form onSubmit={handleCommand} className="flex gap-2 mt-2">
          <span className="text-blue-400">guest@portfolio:~$</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent outline-none border-none text-green-400 caret-green-400"
            autoFocus
            spellCheck="false"
            autoComplete="off"
          />
        </form>
        <div ref={bottomRef} />
      </div>
    </div>
  );
}