"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Play, Terminal, Cpu, Database, Lock, Activity } from "lucide-react";
import CognitoScene from "@/components/cognito/CognitoScene";

export default function CognitoCaseStudy() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <main className="min-h-screen bg-[#050a14] text-white overflow-x-hidden relative font-mono selection:bg-neon-blue selection:text-black">

      {/* 3D Background */}
      <div className="fixed inset-0 z-0 opacity-30 pointer-events-none">
        <CognitoScene />
      </div>

      {/* HUD Overlay / Grid Lines */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-[url('/file.svg')] opacity-5"></div>
      <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-blue to-transparent opacity-50"></div>
      <div className="fixed bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-blue to-transparent opacity-50"></div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 p-6 flex justify-between items-center backdrop-blur-sm bg-black/20 border-b border-white/5">
        <Link
          href="/#projects"
          className="flex items-center gap-2 text-neon-blue hover:text-white transition-colors group px-4 py-2 border border-neon-blue/20 rounded hover:bg-neon-blue/10"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="font-mono text-sm tracking-widest">ABORT MISSION</span>
        </Link>
        <div className="flex items-center gap-2 text-xs font-mono text-gray-500">
           <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
           SYSTEM ONLINE
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex flex-col justify-center items-center p-6 pt-20">
        <div className="w-full max-w-4xl border-x border-neon-blue/20 p-8 md:p-12 relative bg-black/40 backdrop-blur-sm">
            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-neon-blue"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-neon-blue"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-neon-blue"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-neon-blue"></div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
                <div className="inline-block mb-4 px-3 py-1 border border-neon-blue/50 text-neon-blue text-xs tracking-[0.2em] bg-neon-blue/5">
                    PROJECT: COGNITO
                </div>

                <h1 className="text-5xl md:text-8xl font-bold font-space mb-6 text-white tracking-tighter">
                    COGNITO <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-cyan-400">AI</span>
                </h1>

                <p className="text-gray-400 font-mono text-sm md:text-base max-w-xl mx-auto mb-12 leading-relaxed">
                    [SYSTEM_LOG]: INITIATING NEURAL INTERFACE... <br/>
                    [STATUS]: ENCRYPTION KEY VERIFIED. <br/>
                    [OBJECTIVE]: REDEFINE INTELLIGENCE BOUNDARIES.
                </p>

                <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                    <button className="group relative px-8 py-4 bg-neon-blue text-black font-bold font-space tracking-wide overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(57,167,255,0.6)] clip-path-polygon">
                        <span className="relative z-10 flex items-center gap-2">
                            <Play className="w-4 h-4 fill-black" />
                            INITIATE DEMO
                        </span>
                        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
                    </button>

                    <button className="px-8 py-4 border border-white/20 hover:border-neon-blue text-gray-300 hover:text-neon-blue font-mono text-sm tracking-wide transition-colors flex items-center gap-2 bg-black/50">
                        <Terminal className="w-4 h-4" />
                        ACCESS TERMINAL
                    </button>
                </div>
            </motion.div>
        </div>
      </section>

      {/* System Stats / Dashboard Grid */}
      <section className="relative z-10 container mx-auto px-6 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
             {/* Stat Card 1 */}
             <motion.div variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }} className="bg-black/40 border border-white/10 p-6 backdrop-blur-md group hover:border-neon-blue/40 transition-colors">
                <div className="flex justify-between items-start mb-4">
                    <Cpu className="w-6 h-6 text-gray-500 group-hover:text-neon-blue transition-colors" />
                    <span className="text-xs font-mono text-gray-600">CPU_LOAD</span>
                </div>
                <div className="text-3xl font-space font-bold text-white mb-1">98.4<span className="text-sm text-neon-blue">%</span></div>
                <div className="w-full bg-gray-800 h-1 mt-2">
                    <div className="bg-neon-blue h-1 w-[98%] animate-pulse"></div>
                </div>
             </motion.div>

             {/* Stat Card 2 */}
             <motion.div variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-black/40 border border-white/10 p-6 backdrop-blur-md group hover:border-neon-blue/40 transition-colors">
                <div className="flex justify-between items-start mb-4">
                    <Database className="w-6 h-6 text-gray-500 group-hover:text-neon-blue transition-colors" />
                    <span className="text-xs font-mono text-gray-600">MEMORY_ALLOC</span>
                </div>
                <div className="text-3xl font-space font-bold text-white mb-1">128<span className="text-sm text-neon-blue">TB</span></div>
                <div className="text-xs text-gray-500 font-mono">DISTRIBUTED_SHARDS</div>
             </motion.div>

             {/* Stat Card 3 */}
             <motion.div variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-black/40 border border-white/10 p-6 backdrop-blur-md group hover:border-neon-blue/40 transition-colors">
                <div className="flex justify-between items-start mb-4">
                    <Lock className="w-6 h-6 text-gray-500 group-hover:text-neon-blue transition-colors" />
                    <span className="text-xs font-mono text-gray-600">SECURITY</span>
                </div>
                <div className="text-3xl font-space font-bold text-white mb-1">AES<span className="text-sm text-neon-blue">-256</span></div>
                <div className="text-xs text-gray-500 font-mono">ZERO_KNOWLEDGE_PROOF</div>
             </motion.div>

             {/* Stat Card 4 */}
             <motion.div variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }} transition={{ delay: 0.3 }} className="bg-black/40 border border-white/10 p-6 backdrop-blur-md group hover:border-neon-blue/40 transition-colors">
                <div className="flex justify-between items-start mb-4">
                    <Activity className="w-6 h-6 text-gray-500 group-hover:text-neon-blue transition-colors" />
                    <span className="text-xs font-mono text-gray-600">UPTIME</span>
                </div>
                <div className="text-3xl font-space font-bold text-white mb-1">99.99<span className="text-sm text-neon-blue">%</span></div>
                <div className="flex gap-1 mt-2">
                    {[1,2,3,4,5,6].map(i => (
                        <div key={i} className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: `${i * 0.1}s`}}></div>
                    ))}
                </div>
             </motion.div>
          </div>

          {/* Terminal Output Section */}
          <div className="mt-8 border border-white/10 bg-black/80 p-6 font-mono text-xs md:text-sm text-gray-400 h-64 overflow-y-auto custom-scrollbar shadow-inner">
             <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-2 text-gray-500">root@cognito-ai:~# ./init_sequence.sh</span>
             </div>
             <div className="space-y-2">
                <p><span className="text-green-500">➜</span> Loading core modules...</p>
                <p><span className="text-green-500">➜</span> [SUCCESS] Natural Language Processing Unit attached.</p>
                <p><span className="text-green-500">➜</span> [SUCCESS] Computer Vision Interface ready.</p>
                <p><span className="text-yellow-500">➜</span> [WARNING] Neural density exceeding safety parameters...</p>
                <p><span className="text-green-500">➜</span> [OVERRIDE] Safety protocols bypassed. Full power engaged.</p>
                <p><span className="text-blue-400">➜</span> Establishing secure connection to private cloud...</p>
                <p className="animate-pulse">_</p>
             </div>
          </div>
      </section>

    </main>
  );
}
