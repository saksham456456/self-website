"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import gallery1 from "@/assets/gallery/gallery-1.jpg";
import gallery2 from "@/assets/gallery/gallery-2.png";
import gallery3 from "@/assets/gallery/gallery-3.jpg";
import gallery4 from "@/assets/gallery/gallery-4.jpg";
import gallery5 from "@/assets/gallery/gallery-5.jpg";
import gallery6 from "@/assets/gallery/gallery-6.jpg";

const galleryItems = [
  { id: 1, src: gallery1, alt: "AI generated abstract art" },
  { id: 2, src: gallery2, alt: "Photogram logo design" },
  { id: 3, src: gallery3, alt: "Digital workspace setup" },
  { id: 4, src: gallery4, alt: "Code visualization on screen" },
  { id: 5, src: gallery5, alt: "Tech conference setup" },
  { id: 6, src: gallery6, alt: "Abstract blue wave patterns" },
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
              className="relative rounded-xl overflow-hidden break-inside-avoid bg-gray-900 group"
            >
                <Image
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-110"
                  placeholder="blur"
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
