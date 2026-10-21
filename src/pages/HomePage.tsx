import { useHashScroll } from "../hooks/useHashScroll";
import { About } from "../sections/About";
import { Contact } from "../sections/Contact";
import { Hero } from "../sections/Hero";
import { Projects } from "../sections/Projects";
import { TechStack } from "../sections/TechStack";

export function HomePage() {
  useHashScroll();

  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <TechStack />
      <Contact />
    </main>
  );
}
