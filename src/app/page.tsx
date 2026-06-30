import { About } from "@/components/sections/About";
import { Achievements } from "@/components/sections/Achievements";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { LedgerStrip } from "@/components/sections/LedgerStrip";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";

export default function HomePage() {
  return (
    <>
      <Hero />
      <LedgerStrip />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Achievements />
      <Contact />
    </>
  );
}
