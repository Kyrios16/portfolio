import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { FeaturedProject } from "@/components/sections/FeaturedProject";
import { GitHubSection } from "@/components/sections/GitHubSection";
import { Engineering } from "@/components/sections/Engineering";
import { Achievements } from "@/components/sections/Achievements";
import { Resume } from "@/components/sections/Resume";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <FeaturedProject />
        <GitHubSection />
        <Engineering />
        <Achievements />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
