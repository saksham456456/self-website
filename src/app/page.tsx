import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Gallery from "@/components/sections/Gallery";
import Philosophy from "@/components/sections/Philosophy";
import Stats from "@/components/sections/Stats";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-tech-black text-white selection:bg-neon-blue selection:text-black">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Gallery />
      <Philosophy />
      <Stats />
      <Contact />
      <Footer />
    </main>
  );
}
