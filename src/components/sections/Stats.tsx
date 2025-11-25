"use client";

import { motion } from "framer-motion";
import { stats } from "@/config";

export default function Stats() {
  return (
    <section className="py-20 bg-tech-black border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="text-center group"
            >
                <div className="relative inline-block">
                    {/* Animated Circle Background */}
                    <svg className="w-32 h-32 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-90">
                         <circle
                            cx="64"
                            cy="64"
                            r="60"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="transparent"
                            className="text-gray-800"
                         />
                         <motion.circle
                            cx="64"
                            cy="64"
                            r="60"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="transparent"
                            strokeDasharray="377"
                            strokeDashoffset="377"
                            whileInView={{ strokeDashoffset: 0 }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className="text-neon-blue"
                         />
                    </svg>

                    <div className="relative z-10 w-32 h-32 flex items-center justify-center">
                        <span className="text-4xl md:text-5xl font-bold font-mono text-white group-hover:text-neon-blue transition-colors">
                            {stat.value}
                        </span>
                    </div>
                </div>

              <p className="mt-4 text-gray-400 font-space uppercase tracking-widest text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
