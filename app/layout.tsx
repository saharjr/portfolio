import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/ThemeProvider";
import Navbar from "../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio | Ingénieur Informatique ",
  description: "Portfolio démontrant des compétences en Cloud, IA, Web et Mobile.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // suppressHydrationWarning est nécessaire avec next-themes
    <html lang="fr" suppressHydrationWarning className="scroll-smooth">
      <body className={`${inter.className} bg-slate-50 text-slate-900 dark:bg-[#0f172a] dark:text-slate-50 transition-colors duration-300`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {/* On ajoute un padding-top pour compenser la navbar fixe */}
          <div className="pt-16">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}