"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { projects } from "@/config";
import { Button } from "@/components/ui/Button";
import ProjectModal from "./ProjectModal";

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

  const handleProjectClick = (project: Project) => {
    if (project.id === 1) {
      router.push("/projects/cognito-ai");
    } else {
      setSelectedProject(project);
    }
  };

  return (
    <section id="projects" className="py-24 bg-[#080c17]">
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
              className="group relative h-[400px] rounded-xl overflow-hidden cursor-pointer"
              onClick={() => handleProjectClick(project)}
            >
                {/* Background Image / Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black group-hover:scale-105 transition-transform duration-700 ease-out">
                    {project.image && !project.image.includes("placeholder") ? (
                         <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-300"
                         />
                    ) : (
                        <>
                            {/* Placeholder content for visual interest */}
                            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900 to-transparent"></div>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-9xl font-bold text-white/5 pointer-events-none">
                                {index + 1}
                            </div>
                        </>
                    )}
                </div>

                {/* Overlay Content */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-90 transition-opacity duration-300 flex flex-col justify-end p-8">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-3xl font-bold font-space text-white mb-2 group-hover:text-neon-blue transition-colors">
                            {project.title}
                        </h3>
                        <p className="text-gray-300 line-clamp-2 mb-4 group-hover:text-white transition-colors">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.tech.map((t: string) => (
                                <span key={t} className="text-xs font-mono px-2 py-1 border border-white/20 rounded text-gray-400">
                                    {t}
                                </span>
                            ))}
                        </div>

                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <Button variant="outline" size="sm" className="w-full">
                                View Case Study
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Holographic Border Effect */}
                <div className="absolute inset-0 border border-white/10 rounded-xl group-hover:border-neon-blue/50 transition-colors duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>

      <ProjectModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
      />
    </section>
  );
}
