import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      
      <footer className="py-6 text-center text-sm font-mono text-gray-500">
        <p>Built by Mathiyarasu Arumugam</p>
      </footer>
    </main>
  );
}
