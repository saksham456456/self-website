"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/config";
import { Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#0a0f1c] relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 z-0">
             <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-blue/20 to-transparent"></div>
        </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16 text-center">
             <h2 className="text-4xl md:text-5xl font-bold font-space mb-4">
                <span className="text-neon-blue">06.</span> TESTIMONIALS
            </h2>
        </div>

        <div className="flex overflow-x-auto pb-8 gap-6 snap-x snap-mandatory md:grid md:grid-cols-3 md:overflow-visible">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="min-w-[300px] md:min-w-0 flex-1 snap-center glass-panel p-8 rounded-xl relative group hover:-translate-y-2 transition-transform duration-300"
            >
               <Quote className="absolute top-6 right-6 text-neon-blue/20 w-10 h-10" />

              <p className="text-gray-300 mb-8 leading-relaxed relative z-10 italic">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                <div className="w-12 h-12 rounded-full bg-gray-700 flex-shrink-0">
                    {/* Avatar Placeholder */}
                    <div className="w-full h-full rounded-full bg-gradient-to-tr from-neon-blue to-purple-600"></div>
                </div>
                <div>
                  <h4 className="font-bold font-space text-white">{testimonial.name}</h4>
                  <p className="text-xs text-neon-blue font-mono">{testimonial.role}</p>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-neon-blue to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
