"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { X } from "lucide-react";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  project: any;
}

export default function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center p-4 md:p-8"
          >
            <div className="bg-[#0f1623] w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl border border-white/10 shadow-2xl pointer-events-auto relative flex flex-col">
              {/* Header Image Placeholder */}
              <div className="h-64 md:h-80 w-full bg-gradient-to-br from-gray-800 to-gray-900 relative">
                {project.image && !project.image.includes("placeholder") ? (
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover opacity-80"
                    />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-white/10 text-6xl font-bold font-space uppercase">
                        {project.title}
                    </div>
                )}

                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full hover:bg-neon-blue hover:text-black transition-colors"
                >
                    <X size={24} />
                </button>
              </div>

              <div className="p-8 space-y-8">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold font-space mb-2">{project.title}</h2>
                    <p className="text-xl text-neon-blue font-light">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                    {project.tech.map((t: string) => (
                        <span key={t} className="px-3 py-1 text-sm border border-neon-blue/30 rounded-full text-neon-blue/80 font-mono">
                            {t}
                        </span>
                    ))}
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold border-b border-white/10 pb-2">THE CHALLENGE</h3>
                        <p className="text-gray-400 leading-relaxed">{project.details.problem}</p>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold border-b border-white/10 pb-2">THE SOLUTION</h3>
                        <p className="text-gray-400 leading-relaxed">{project.details.solution}</p>
                    </div>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-4">KEY FEATURES</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {project.details.features.map((feature: string, idx: number) => (
                            <li key={idx} className="flex items-center gap-3 text-gray-300">
                                <span className="text-neon-blue">▹</span> {feature}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex gap-4 pt-4">
                    <Button variant="primary" glow>Live Demo</Button>
                    <Button variant="outline">View Source</Button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
