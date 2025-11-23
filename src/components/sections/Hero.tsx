"use client";

import { motion } from "framer-motion";
import ParticleBackground from "@/components/canvas/ParticleBackground";
import { Button } from "@/components/ui/Button";
import { personalInfo } from "@/config";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-tech-black">
      {/* 3D Background */}
      <ParticleBackground />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mb-6"
        >
          <h1 className="text-6xl md:text-8xl font-bold font-space text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-gray-400 tracking-tighter">
            {personalInfo.name}
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mb-8"
        >
          <div className="flex items-center justify-center gap-4 text-neon-blue/80 font-mono text-lg md:text-xl tracking-widest uppercase">
            {/* Holographic Lines Decoration */}
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-neon-blue"></div>
            <span>{personalInfo.role}</span>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-neon-blue"></div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Button variant="primary" glow size="lg" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
            View Projects
          </Button>
          <Button variant="glass" size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Contact Me
          </Button>
        </motion.div>
      </div>

      {/* Decorative Floating Elements */}
      <div className="absolute bottom-10 left-10 hidden md:block opacity-30">
         <div className="font-mono text-xs text-neon-blue space-y-2">
            <div>SYS.STATUS: ONLINE</div>
            <div>VISUALIZER: ACTIVE</div>
            <div>FPS: 60</div>
         </div>
      </div>
    </section>
  );
}
