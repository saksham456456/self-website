"use client";

import { motion } from "framer-motion";
import HologramPortrait from "@/components/canvas/HologramPortrait";
import { personalInfo } from "@/config";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 relative bg-tech-black overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Hologram */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 md:order-1"
          >
             <HologramPortrait />
          </motion.div>

          {/* Right Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2 space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold font-space mb-4">
                <span className="text-neon-blue">01.</span> ABOUT ME
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-neon-blue to-transparent"></div>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed font-light">
              {personalInfo.bio}
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="glass-panel p-6 rounded-lg hover:border-neon-blue/50 transition-colors duration-300">
                <div className="text-neon-blue font-mono text-sm mb-2">LOCATION</div>
                <div className="text-xl font-bold">{personalInfo.location}</div>
              </div>
              <div className="glass-panel p-6 rounded-lg hover:border-neon-blue/50 transition-colors duration-300">
                <div className="text-neon-blue font-mono text-sm mb-2">EXPERIENCE</div>
                <div className="text-xl font-bold">{personalInfo.experience_years}</div>
              </div>
              <div className="glass-panel p-6 rounded-lg hover:border-neon-blue/50 transition-colors duration-300 col-span-2">
                <div className="text-neon-blue font-mono text-sm mb-2">FOCUS</div>
                <div className="text-xl font-bold">{personalInfo.focus}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
