"use client";

import { motion } from "framer-motion";
import { philosophy } from "@/config";
import { Quote } from "lucide-react";

export default function Philosophy() {
  return (
    <section className="py-24 bg-[#0a0f1c] relative overflow-hidden flex items-center justify-center">
        {/* Background Animation */}
        <div className="absolute inset-0 z-0">
             <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-blue/20 to-transparent"></div>
        </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16 text-center">
             <h2 className="text-4xl md:text-5xl font-bold font-space mb-4">
                <span className="text-neon-blue">06.</span> PHILOSOPHY
            </h2>
            <div className="h-1 w-20 bg-neon-blue mx-auto"></div>
        </div>

        <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl w-full glass-panel p-12 rounded-2xl relative group hover:shadow-[0_0_50px_rgba(57,167,255,0.1)] transition-shadow duration-500"
            >
               <Quote className="absolute top-8 left-8 text-neon-blue/20 w-16 h-16 transform -scale-x-100" />
               <Quote className="absolute bottom-8 right-8 text-neon-blue/20 w-16 h-16" />

              <blockquote className="text-3xl md:text-5xl font-bold font-space text-center text-white leading-tight py-8 relative z-10">
                &quot;{philosophy.quote}&quot;
              </blockquote>

              <div className="text-center mt-8">
                  <cite className="text-neon-blue font-mono tracking-widest not-italic uppercase">
                    — {philosophy.author}
                  </cite>
              </div>

              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-blue to-transparent opacity-50"></div>
            </motion.div>
        </div>
      </div>
    </section>
  );
}
