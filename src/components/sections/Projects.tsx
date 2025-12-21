"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { projects } from "@/config";
import ProjectModal from "./ProjectModal";
import ProjectCard from "@/components/projects/ProjectCard";

type Project = {
  id: number;
  title: string;
  description: string;
  tech: string[];
  image: string;
  link: string;
  details: {
    problem: string;
    solution: string;
    features: string[];
  };
};

export default function Projects() {
  const router = useRouter();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleProjectClick = (project: Project) => {
    if (project.id === 1) { // Cognito AI
      setIsTransitioning(true);
      // Wait for animation to finish before routing
      // The animation duration is around 1.2s total (0.6s flip + 0.6s slide)
      setTimeout(() => {
        router.push("/projects/cognito-ai");
      }, 1200);
    } else {
      setSelectedProject(project);
    }
  };

  return (
    <section id="projects" className="py-24 bg-[#080c17] relative">
      <div className="container mx-auto px-6">
        <div className="mb-16 flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl font-bold font-space mb-4 text-center">
                <span className="text-neon-blue">04.</span> FEATURED PROJECTS
            </h2>
            <div className="h-1 w-20 bg-neon-blue"></div>
            <p className="mt-4 text-gray-400 text-center max-w-2xl">
                A selection of digital experiences, engineered for performance and impact.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <ProjectCard
                project={project}
                onClick={() => handleProjectClick(project as Project)}
              />
            </motion.div>
          ))}
        </div>
      </div>

      <ProjectModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
      />

      {/* 3D ENVELOPE TRANSITION OVERLAY */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none perspective-[2000px]"
            initial={{ backgroundColor: "rgba(10, 15, 28, 0)" }}
            animate={{ backgroundColor: "rgba(10, 15, 28, 1)" }}
            transition={{ duration: 0.3 }}
          >
             <div className="relative w-[300px] md:w-[400px] h-[200px] md:h-[300px] transform-style-3d">

                {/* The "Paper" (Content) that slides out */}
                <motion.div
                    className="absolute inset-0 bg-white shadow-2xl rounded-lg flex items-center justify-center overflow-hidden z-0"
                    initial={{ y: 0, scale: 0.8, opacity: 0 }}
                    animate={{ y: -300, scale: 3, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8, ease: "circOut" }}
                >
                    <div className="w-full h-full bg-[#0a0f1c] p-8 border border-neon-blue/20 flex flex-col items-center justify-center">
                        <h1 className="text-4xl md:text-6xl font-bold font-space text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-neon-blue to-white">
                          COGNITO AI
                        </h1>
                        <div className="text-neon-blue font-mono animate-pulse">ACCESSING SYSTEM...</div>
                    </div>
                </motion.div>

                {/* The "Envelope Body" (Bottom Half) */}
                <div className="absolute inset-0 bg-[#0f1623] border border-neon-blue/30 rounded-b-xl z-10 flex items-center justify-center overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="text-neon-blue/20 font-mono text-xs">CONFIDENTIAL</div>
                </div>

                {/* The "Envelope Flap" (Top Half) */}
                <motion.div
                    className="absolute top-0 left-0 w-full h-1/2 bg-[#1a2333] border-t border-l border-r border-neon-blue/30 rounded-t-xl z-20 origin-bottom shadow-lg"
                    initial={{ rotateX: 0 }}
                    animate={{ rotateX: 180 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    style={{ transformStyle: "preserve-3d" }}
                >
                     <div className="absolute inset-0 flex items-center justify-center backface-hidden">
                        <div className="w-8 h-8 rounded-full bg-neon-blue/20 border border-neon-blue flex items-center justify-center">
                            <div className="w-4 h-4 rounded-full bg-neon-blue animate-pulse"></div>
                        </div>
                     </div>
                </motion.div>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
