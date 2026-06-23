"use client";

import { Mail, Check } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyEmail = () => {
    // Remplacez par votre vraie adresse e-mail
    navigator.clipboard.writeText("sahar.jarboui@ipsas.tn");
    setIsCopied(true);
    
    // Remet le bouton à son état initial après 2 secondes
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <section id="contact" className="w-full max-w-4xl mt-20 mb-12 scroll-mt-28">
      <div className="bg-slate-100 dark:bg-slate-800/50 rounded-3xl p-8 md:p-12 border border-slate-200 dark:border-slate-700 text-center">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
          Prêt à collaborer ?
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
          Je suis actuellement à l&apos;écoute de nouvelles opportunités. Que ce soit pour une question, un projet d&apos;infrastructure, ou simplement pour échanger sur le code, n&apos;hésitez pas à me contacter.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          
          {/* NOUVEAU BOUTON EMAIL (Copie dans le presse-papiers) */}
          <button
            onClick={handleCopyEmail}
            className={`flex items-center gap-2 text-white px-6 py-3 rounded-full font-medium transition-colors w-full sm:w-auto justify-center ${
              isCopied ? "bg-green-600 hover:bg-green-700" : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {isCopied ? <Check size={20} /> : <Mail size={20} />}
            {isCopied ? "Email copié !" : "Copier mon email"}
          </button>

          {/* Bouton LinkedIn */}
          <a
            href="https://www.linkedin.com/in/sahar-jarbouii/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-slate-700 dark:text-slate-300 px-6 py-3 rounded-full font-medium transition-colors w-full sm:w-auto justify-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            LinkedIn
          </a>

          {/* Bouton GitHub */}
          <a
            href="https://github.com/saharjr"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-slate-700 dark:text-slate-300 px-6 py-3 rounded-full font-medium transition-colors w-full sm:w-auto justify-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"/><path d="M9 18c-4.5 1.5-5-2.5-7-3"/></svg>
            GitHub
          </a>
        </div>
      </div>

      <footer className="mt-20 text-center text-slate-500 dark:text-slate-500 text-sm flex flex-col items-center justify-center space-y-2">
          <p>© {new Date().getFullYear()} - Développé avec <span className="text-red-500">❤</span> Next.js & Tailwind CSS.</p>        

      </footer>
    </section>
  );
}