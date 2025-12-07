"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Cpu, Shield, Zap, Globe, Lock, Brain } from "lucide-react";
import CognitoScene from "@/components/cognito/CognitoScene";

export default function CognitoCaseStudy() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <main className="min-h-screen bg-[#0a0f1c] text-white overflow-x-hidden relative">
      {/* 3D Background */}
      <div className="fixed inset-0 z-0 opacity-40 pointer-events-none">
        <CognitoScene />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 p-6 flex justify-between items-center backdrop-blur-sm bg-[#0a0f1c]/50 border-b border-white/10">
        <Link
          href="/#projects"
          className="flex items-center gap-2 text-gray-400 hover:text-neon-blue transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-space">Back to Projects</span>
        </Link>
        <div className="font-mono text-neon-blue text-sm border border-neon-blue/30 px-3 py-1 rounded-full bg-neon-blue/5">
          CASE STUDY: 001
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex flex-col justify-center items-center p-6 pt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-40 h-40 md:w-56 md:h-56 mb-8"
        >
          <div className="absolute inset-0 bg-neon-blue/20 blur-3xl rounded-full animate-pulse"></div>
          <Image
            src="/cognito-logo.png"
            alt="Cognito AI Logo"
            fill
            className="object-contain drop-shadow-[0_0_15px_rgba(57,167,255,0.5)]"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-5xl md:text-8xl font-bold font-space text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-neon-blue to-white bg-300% animate-gradient"
        >
          COGNITO AI
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xl md:text-2xl text-gray-400 max-w-2xl text-center font-light leading-relaxed"
        >
          Decoding the boundaries of artificial intelligence with <span className="text-neon-blue font-semibold">autonomous learning</span> and <span className="text-neon-blue font-semibold">absolute privacy</span>.
        </motion.p>
      </section>

      {/* Content Grid */}
      <section className="relative z-10 container mx-auto px-6 py-20">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
        >
          <motion.div variants={fadeInUp} className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-neon-blue/30 transition-colors">
            <h2 className="text-2xl font-space font-bold mb-4 flex items-center gap-3">
              <Shield className="w-6 h-6 text-neon-blue" />
              The Problem
            </h2>
            <p className="text-gray-300 leading-relaxed">
              In an era of rampant data surveillance, users needed an AI assistant that could operate with the versatility of major LLMs while guaranteeing 100% data sovereignty. Existing solutions traded privacy for capability.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-neon-blue/30 transition-colors">
            <h2 className="text-2xl font-space font-bold mb-4 flex items-center gap-3">
              <Zap className="w-6 h-6 text-neon-blue" />
              The Solution
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Cognito AI was built from scratch, leveraging a custom-trained mixture of experts (MoE) architecture. It runs locally or on encrypted private clouds, ensuring no data ever leaves the user&apos;s controlled environment without explicit consent.
            </p>
          </motion.div>
        </motion.div>

        {/* Architecture / Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-space font-bold text-center mb-12">
            <span className="text-neon-blue">SYSTEM</span> ARCHITECTURE
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Brain, title: "Neural Core", desc: "Custom MoE Architecture trained on 1T+ tokens." },
              { icon: Lock, title: "Zero-Knowledge", desc: "End-to-end encryption for all inference queries." },
              { icon: Globe, title: "Edge Deployment", desc: "Optimized quantization for running on consumer GPUs." },
              { icon: Cpu, title: "Hyper-Inference", desc: "Sub-50ms latency on standardized benchmarks." },
              { icon: Shield, title: "Sentinel Guard", desc: "Real-time adversarial attack filtering system." },
              { icon: Zap, title: "Auto-Scaling", desc: "Dynamic resource allocation based on query complexity." }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5, backgroundColor: "rgba(57, 167, 255, 0.1)" }}
                className="bg-[#0f1623] p-6 rounded-xl border border-white/5 group cursor-default"
              >
                <div className="w-12 h-12 bg-neon-blue/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-neon-blue/20 transition-colors">
                  <item.icon className="w-6 h-6 text-neon-blue" />
                </div>
                <h3 className="text-xl font-bold font-space mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Closing / CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center py-20 border-t border-white/10"
        >
          <p className="text-gray-400 mb-6 font-mono text-sm">PROJECT STATUS: ACTIVE DEVELOPMENT</p>
          <h2 className="text-4xl font-bold font-space mb-8">Ready to define the future?</h2>
          <Link href="/#contact">
            <button className="px-8 py-3 bg-neon-blue text-black font-bold font-space rounded hover:bg-white hover:scale-105 transition-all duration-300">
              Contact Creator
            </button>
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
