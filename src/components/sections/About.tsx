"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { personalInfo } from "@/config";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 relative bg-tech-black overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-neon-blue/5 rounded-full blur-[128px] pointer-events-none -translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left Column: Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 md:order-1 flex justify-center"
          >
            <div className="relative w-full max-w-sm md:max-w-md aspect-square group">
              {/* Animated glowing backdrop */}
              <div className="absolute -inset-4 bg-gradient-to-r from-neon-blue to-purple-600 rounded-full opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500 animate-pulse-slow"></div>

              {/* Glass container */}
              <div className="relative h-full w-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-3 shadow-2xl overflow-hidden">
                <div className="relative h-full w-full rounded-xl overflow-hidden border border-neon-blue/20">
                    <Image
                      src="/profile.png"
                      alt="Saksham Mogha"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                    />

                    {/* Tech overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-tech-black/60 via-transparent to-transparent opacity-60"></div>
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-neon-blue to-transparent opacity-50"></div>

                    {/* Glitch/Tech decorative corners */}
                    <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-neon-blue/50 rounded-tl-lg"></div>
                    <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-neon-blue/50 rounded-br-lg"></div>
                </div>
              </div>
            </div>
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
              <h2 className="text-4xl md:text-5xl font-bold font-space mb-4 tracking-tight">
                <span className="text-neon-blue">01.</span> ABOUT ME
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-neon-blue to-transparent"></div>
            </div>

            <div className="space-y-4">
              <p className="text-gray-300 text-lg leading-relaxed font-light">
                {personalInfo.bio}
              </p>
              <p className="text-gray-400 font-light">
                My journey combines technical expertise with creative problem-solving, allowing me to build comprehensive digital solutions that stand out in the modern web landscape.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 md:gap-6 mt-8">
              <div className="glass-panel p-5 rounded-lg border border-white/5 hover:border-neon-blue/30 transition-colors duration-300">
                <div className="text-neon-blue font-mono text-xs md:text-sm mb-2 tracking-wider">LOCATION</div>
                <div className="text-lg md:text-xl font-bold text-white">{personalInfo.location}</div>
              </div>
              <div className="glass-panel p-5 rounded-lg border border-white/5 hover:border-neon-blue/30 transition-colors duration-300">
                <div className="text-neon-blue font-mono text-xs md:text-sm mb-2 tracking-wider">EXPERIENCE</div>
                <div className="text-lg md:text-xl font-bold text-white">{personalInfo.experience_years}</div>
              </div>
              <div className="glass-panel p-5 rounded-lg border border-white/5 hover:border-neon-blue/30 transition-colors duration-300 col-span-2">
                <div className="text-neon-blue font-mono text-xs md:text-sm mb-2 tracking-wider">FOCUS</div>
                <div className="text-lg md:text-xl font-bold text-white">{personalInfo.focus}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
