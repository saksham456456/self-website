"use client";

import { motion } from "framer-motion";

// Placeholder images - using simple colored divs for now
const galleryItems = [
  { id: 1, size: "h-64", color: "bg-blue-900" },
  { id: 2, size: "h-96", color: "bg-purple-900" },
  { id: 3, size: "h-64", color: "bg-indigo-900" },
  { id: 4, size: "h-80", color: "bg-cyan-900" },
  { id: 5, size: "h-64", color: "bg-sky-900" },
  { id: 6, size: "h-72", color: "bg-violet-900" },
];

export default function Gallery() {
  return (
    <section className="py-20 bg-tech-black">
      <div className="container mx-auto px-6">
        <div className="mb-12">
             <h2 className="text-4xl md:text-5xl font-bold font-space mb-4">
                <span className="text-neon-blue">05.</span> VISUAL GALLERY
            </h2>
            <div className="h-1 w-20 bg-neon-blue"></div>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`relative rounded-xl overflow-hidden break-inside-avoid ${item.size} ${item.color} group`}
            >
                {/* Image Placeholder */}
                <div className="absolute inset-0 bg-white/5 group-hover:bg-transparent transition-colors duration-500"></div>

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/80 to-transparent">
                    <span className="text-neon-blue font-mono text-sm">Visual Experiment #{item.id}</span>
                    <h3 className="text-xl font-bold font-space">Generative Art</h3>
                </div>

                {/* Border Glow */}
                <div className="absolute inset-0 border border-transparent group-hover:border-neon-blue/30 transition-colors duration-300 rounded-xl pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
