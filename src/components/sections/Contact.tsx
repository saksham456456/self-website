"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { personalInfo } from "@/config";
import { Mail, MapPin, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });

      // Reset success status after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error("Transmission error:", error);
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Transmission failed");
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#05080f] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16">
             <h2 className="text-4xl md:text-5xl font-bold font-space mb-4">
                <span className="text-neon-blue">07.</span> CONTACT
            </h2>
            <div className="h-1 w-20 bg-neon-blue"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8 rounded-2xl relative"
          >
             {/* Status Overlay */}
             {status === "success" && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-[#05080f]/90 rounded-2xl backdrop-blur-sm"
                >
                    <CheckCircle className="w-16 h-16 text-neon-blue mb-4" />
                    <h3 className="text-2xl font-bold font-space text-white">TRANSMISSION SENT</h3>
                    <p className="text-gray-400 mt-2">I will respond to your signal shortly.</p>
                    <button
                        onClick={() => setStatus("idle")}
                        className="mt-6 text-sm font-mono text-neon-blue hover:text-white transition-colors"
                    >
                        SEND ANOTHER
                    </button>
                </motion.div>
             )}

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-mono text-neon-blue">NAME</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={status === "sending"}
                    className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-neon-blue transition-colors disabled:opacity-50"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-mono text-neon-blue">EMAIL</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={status === "sending"}
                    className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-neon-blue transition-colors disabled:opacity-50"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-mono text-neon-blue">MESSAGE</label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={status === "sending"}
                  className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-neon-blue transition-colors resize-none disabled:opacity-50"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              {status === "error" && (
                <div className="flex items-center gap-2 text-red-500 bg-red-500/10 p-3 rounded-lg border border-red-500/20">
                    <AlertCircle size={18} />
                    <span className="text-sm">{errorMessage}</span>
                </div>
              )}

              <Button
                variant="primary"
                glow
                className="w-full md:w-auto flex items-center gap-2"
                disabled={status === "sending"}
              >
                {status === "sending" ? (
                    <>
                        <Loader2 className="animate-spin" size={18} />
                        TRANSMITTING...
                    </>
                ) : (
                    "SEND TRANSMISSION"
                )}
              </Button>
            </form>
          </motion.div>

          {/* Contact Info & Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
                <p className="text-xl text-gray-300">
                    Ready to build the future? Reach out and let&apos;s discuss how we can create something extraordinary together.
                </p>

                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-neon-blue/10 rounded-full flex items-center justify-center text-neon-blue">
                        <Mail />
                    </div>
                    <div>
                        <h4 className="font-bold text-white">Email</h4>
                        <a href={`mailto:${personalInfo.email}`} className="text-gray-400 hover:text-neon-blue transition-colors">
                            {personalInfo.email}
                        </a>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-neon-blue/10 rounded-full flex items-center justify-center text-neon-blue">
                        <MapPin />
                    </div>
                    <div>
                        <h4 className="font-bold text-white">Location</h4>
                        <p className="text-gray-400">{personalInfo.location}</p>
                    </div>
                </div>
            </div>

            {/* Hologram Map Placeholder */}
            <div className="w-full h-64 bg-gray-900 rounded-2xl relative overflow-hidden group border border-white/10">
                {/* Grid Effect */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(57,167,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(57,167,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px]"></div>

                {/* Radar Sweep */}
                <div className="absolute top-1/2 left-1/2 w-[200%] h-[200%] bg-[conic-gradient(from_0deg,transparent_0deg,rgba(57,167,255,0.1)_60deg,transparent_60deg)] animate-[spin_4s_linear_infinite] origin-top-left -translate-x-1/2 -translate-y-1/2 rounded-full"></div>

                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-4 h-4 bg-neon-blue rounded-full shadow-[0_0_20px_#39a7ff] animate-pulse"></div>
                </div>

                <div className="absolute bottom-4 left-4 text-xs font-mono text-neon-blue">
                    GPS: SIGNAL_LOCKED
                </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
