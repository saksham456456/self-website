"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";

interface ProjectCardProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  project: any;
  onClick: () => void;
  className?: string;
  hideButton?: boolean;
}

export default function ProjectCard({ project, onClick, className = "", hideButton = false }: ProjectCardProps) {
  return (
    <div
      className={`group relative h-[400px] rounded-xl overflow-hidden ${className}`}
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
                        {project.id}
                    </div>
                </>
            )}
        </div>

        {/* Overlay Content */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-90 transition-opacity duration-300 flex flex-col justify-end p-8 pointer-events-none">
            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 pointer-events-auto">
                <h3 className="text-3xl font-bold font-space text-white mb-2 group-hover:text-neon-blue transition-colors cursor-default">
                    {project.title}
                </h3>
                <p className="text-gray-300 line-clamp-2 mb-4 group-hover:text-white transition-colors cursor-default">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t: string) => (
                        <span key={t} className="text-xs font-mono px-2 py-1 border border-white/20 rounded text-gray-400">
                            {t}
                        </span>
                    ))}
                </div>

                {!hideButton && (
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Button
                            variant="outline"
                            size="sm"
                            className="w-full relative z-20"
                            onClick={(e) => {
                                e.stopPropagation();
                                onClick();
                            }}
                        >
                            View Case Study
                        </Button>
                    </div>
                )}
            </div>
        </div>

        {/* Holographic Border Effect */}
        <div className="absolute inset-0 border border-white/10 rounded-xl group-hover:border-neon-blue/50 transition-colors duration-300 pointer-events-none"></div>
    </div>
  );
}
