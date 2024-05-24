import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";


export default function Home() {
  return (
    <div className="bg-[#242424] text-white 
    h-screen snap-y snap-mandatory overflow-scroll z-0">
      {/* HEADER */}
      <Header />
      {/* HERO */}
      <section id='hero' className="snap-center">
        <Hero />
      </section>

      {/* ABOUT */}
      <section id='about' className="snap-center">
        <About />
      </section>

      {/* EXPERIENCE */}
      <section id='experience' className="snap-center">
        <WorkExperience />
      </section>

      {/* SKILLS */}
      <section id='experience' className="snap-start">
        <Skills />
      </section>

      {/* PROJECTS */}
      <section id='projects' className="snap-start">
        <Projects />
      </section>

      {/* CONTACT ME */}
      <section id='contact' className="snap-start">
        <ContactMe />
      </section>
    </div>
  );
}
