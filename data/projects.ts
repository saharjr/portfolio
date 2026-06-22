export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  category: "Web" | "Mobile" | "Cloud" | "IA";
  impact: string;
}

export const projectsData: Project[] = [
  {
    id: "medical-ai",
    title: "Plateforme Web Médicale intelligente",
    description: "Application web critique intégrant un modèle d'IA pour l'aide au diagnostic médical.",
    longDescription: "Développement complet d'une plateforme médicale sécurisée. Modélisation de l'expérience utilisateur (UX/UI) pour des praticiens, intégration d'un modèle d'intelligence artificielle pour l'analyse de données de santé, et déploiement sur une infrastructure cloud respectant la confidentialité des données.",
    tags: ["Next.js", "Python", "IA / Deep Learning", "Cloud", "UX/UI"],
    category: "IA",
    impact: "Optimisation du temps de diagnostic et interface fluide validée par des professionnels de santé."
  },
  {
    id: "odoo-recrutement",
    title: "Module Odoo - Gestion du Recrutement",
    description: "Conception et intégration d'un module ERP sur-mesure pour automatiser les flux RH.",
    longDescription: "PFE axé sur l'informatique de gestion et les processus métier. Développement d'un module complet sous Odoo pour la gestion des candidats, des entretiens et du scoring informatique. Gestion de la base de données PostgreSQL et configuration de l'environnement sous Linux.",
    tags: ["Odoo", "Python", "PostgreSQL", "Linux", "Gestion RH"],
    category: "Web",
    impact: "Automatisation du suivi des candidats et réduction de 40% du temps de traitement administratif des dossiers."
  }
];