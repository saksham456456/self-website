"use client";

import { personalInfo } from "@/config";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black py-12 relative overflow-hidden">
        {/* Top Glowing Line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-blue to-transparent shadow-[0_0_10px_#39a7ff]"></div>

      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold font-space text-white mb-2">{personalInfo.name}</h2>
          <p className="text-gray-500 text-sm">
            © {currentYear} All Rights Reserved.
          </p>
        </div>

        <div className="flex gap-8 text-sm font-mono text-gray-400">
            <a href="#" className="hover:text-neon-blue transition-colors">HOME</a>
            <a href="#projects" className="hover:text-neon-blue transition-colors">PROJECTS</a>
            <a href="#contact" className="hover:text-neon-blue transition-colors">CONTACT</a>
        </div>

        <div className="flex gap-4">
          {personalInfo.socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-neon-blue transition-colors"
              aria-label={social.name}
            >
              <social.icon size={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
