"use client";

import { motion } from "framer-motion";
import { skills } from "@/config";

// Helper to render icons (placeholder for now)
const SkillIcon = ({ name }: { name: string }) => {
  return (
    <div className="w-12 h-12 mb-4 bg-neon-blue/10 rounded-full flex items-center justify-center text-neon-blue">
       {/* Placeholder for actual icons */}
       <span className="font-bold font-mono">{name.substring(0, 2)}</span>
    </div>
  );
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-[#0c1221] relative">
       {/* Background Elements */}
       <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#111a2e] to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16 text-center">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.5 }}
                className="text-4xl md:text-5xl font-bold font-space mb-4"
            >
                <span className="text-neon-blue">02.</span> SKILLS & TOOLS
            </motion.h2>
            <div className="h-1 w-20 bg-neon-blue mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skills.technical.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              whileHover={{
                scale: 1.05,
                rotateX: 5,
                rotateY: 5,
                boxShadow: "0 0 20px rgba(57, 167, 255, 0.3)"
              }}
              className="glass-panel p-8 rounded-xl flex flex-col items-center justify-center border border-white/5 hover:border-neon-blue transition-all duration-300 group cursor-pointer"
            >
              <div className="group-hover:animate-bounce">
                  <SkillIcon name={skill.name} />
              </div>
              <h3 className="text-xl font-bold font-space group-hover:text-neon-blue transition-colors">
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </div>

        <div className="mt-16">
            <h3 className="text-2xl font-bold font-space text-center mb-8 text-gray-400">TOOLS OF THE TRADE</h3>
            <div className="flex flex-wrap justify-center gap-6">
                {skills.tools.map((tool, index) => (
                    <motion.div
                        key={tool}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.1 }}
                        transition={{ delay: index * 0.1 }}
                        className="px-6 py-3 rounded-full border border-white/10 bg-white/5 text-sm font-mono hover:bg-neon-blue/20 hover:border-neon-blue transition-colors cursor-default"
                    >
                        {tool}
                    </motion.div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}
