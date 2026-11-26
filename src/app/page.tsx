import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Credentials from "@/components/Credentials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MatrixRain from "@/components/ui/MatrixRain";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main" className="relative overflow-hidden">
        {/* ambient background */}
        <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
          <MatrixRain className="absolute inset-0 opacity-[0.22] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
          <div className="absolute inset-0 bg-grid bg-grid [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)]" />
          <div className="absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-accent-500/10 blur-[120px]" />
          <div className="absolute right-0 top-1/3 h-[400px] w-[400px] rounded-full bg-navy-600/20 blur-[120px]" />
        </div>
        <div aria-hidden className="crt-overlay pointer-events-none fixed inset-0 z-[60]" />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Credentials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
