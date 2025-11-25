"use client";

import { motion } from "framer-motion";
import { experience } from "@/config";
import { useState } from "react";

export default function Experience() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section id="experience" className="py-20 bg-tech-black relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-space mb-4">
            <span className="text-neon-blue">03.</span> EXPERIENCE
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-neon-blue to-transparent"></div>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-blue via-purple-500 to-transparent opacity-30"></div>

          <div className="space-y-12">
            {experience.map((job, index) => {
              const isEven = index % 2 === 0;
              const isExpanded = expandedId === job.id;

              return (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`relative flex flex-col md:flex-row ${
                    isEven ? "md:flex-row-reverse" : ""
                  } gap-8 items-start md:items-center`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-tech-black border-2 border-neon-blue z-10 shadow-[0_0_10px_rgba(57,167,255,0.8)]">
                    <div className="absolute inset-0 rounded-full bg-neon-blue animate-ping opacity-50"></div>
                  </div>

                  {/* Content Card */}
                  <div className={`ml-12 md:ml-0 w-full md:w-[calc(50%-2rem)] ${!isEven ? "md:text-right" : ""}`}>
                    <motion.div
                      layout
                      onClick={() => setExpandedId(isExpanded ? null : job.id)}
                      className={`glass-panel p-6 rounded-xl border-l-4 ${
                        isExpanded ? "border-l-neon-blue bg-white/5" : "border-l-transparent"
                      } cursor-pointer transition-all duration-300 hover:shadow-[0_0_20px_rgba(57,167,255,0.1)]`}
                    >
                      <div className="flex flex-col gap-2">
                        <span className="text-neon-blue font-mono font-bold tracking-widest text-sm">
                          {job.year}
                        </span>
                        <h3 className="text-2xl font-bold font-space">{job.title}</h3>
                        <p className="text-gray-400">{job.description}</p>
                      </div>

                      {/* Expandable Content */}
                      <motion.div
                        initial={false}
                        animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className={`mt-4 pt-4 border-t border-white/10 ${!isEven ? "md:flex md:flex-col md:items-end" : ""}`}>
                            <h4 className="text-sm font-bold text-white mb-2">HIGHLIGHTS</h4>
                            <ul className={`space-y-1 text-sm text-gray-300 ${!isEven ? "md:text-right" : ""}`}>
                                {job.highlights.map((highlight, idx) => (
                                <li key={idx} className="flex items-center gap-2">
                                    {isEven && <span className="w-1.5 h-1.5 rounded-full bg-neon-blue"></span>}
                                    {highlight}
                                    {!isEven && <span className="w-1.5 h-1.5 rounded-full bg-neon-blue hidden md:block"></span>}
                                </li>
                                ))}
                            </ul>
                        </div>
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Empty space for the other side of the timeline */}
                  <div className="hidden md:block w-[calc(50%-2rem)]"></div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
