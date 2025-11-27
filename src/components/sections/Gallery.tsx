"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const galleryItems = [
  { id: 1, size: "h-64", src: "/gallery/gallery-1.jpg", alt: "AI generated abstract art" },
  { id: 2, size: "h-96", src: "/gallery/gallery-2.png", alt: "Photogram logo design" },
  { id: 3, size: "h-64", src: "/gallery/gallery-3.jpg", alt: "Digital workspace setup" },
  { id: 4, size: "h-80", src: "/gallery/gallery-4.jpg", alt: "Code visualization on screen" },
  { id: 5, size: "h-64", src: "/gallery/gallery-5.jpg", alt: "Tech conference setup" },
  { id: 6, size: "h-72", src: "/gallery/gallery-6.jpg", alt: "Abstract blue wave patterns" },
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
              className={`relative rounded-xl overflow-hidden break-inside-avoid ${item.size} bg-gray-900 group`}
            >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                    <span className="text-neon-blue font-mono text-sm">Gallery Item #{item.id}</span>
                    <h3 className="text-xl font-bold font-space">{item.alt}</h3>
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
