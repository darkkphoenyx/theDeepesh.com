import HeroSection from "./sections/HeroSection/HeroSection";
import Particles from "../animations/Backgrounds/Particles/Particles";
import AboutSection from "./sections/About/AboutSection";
import Skills from "./sections/Skills/SkillsSection";
import ProjectSection from "./sections/Projects/ProjectSection";
import ResumeSection from "./sections/Resume/ResumeSection";

import { Toaster } from "../components/ui/sonner";

import { useCallback, useRef } from "react";
import Navbar from "../components/Navigation/Navbar";
import Timeline from "../components/Timeline";
import ContactSection from "./sections/Contact/ContactSection";

const Homepage = () => {
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // this is a helper function for Removing null return issue of Ref. el
  const registerSection = useCallback(
    (key: string) => (el: HTMLDivElement | null) => {
      sectionRefs.current[key] = el;
    },
    []
  );

  return (
    <>
      <Toaster position="top-right" />
      <div className="bg-background text-primary">
        {/* NAVBAR */}
        <Navbar sectionRefs={sectionRefs} />

        {/* PARTICLES BACKGROUND + SECTIONS */}
        <div className="relative z-10 bg-background">
          <Particles
            className="absolute inset-0"
            particleCount={5000}
            particleColors={["#FFA500", "#FFFF00"]}
            particleSpread={12}
            particleBaseSize={80}
            speed={0.2}
            alphaParticles
          />

          <div className="relative">
            <div
              id="knowMe"
              ref={registerSection("knowMe")}
              style={{
                backgroundImage: `
                  radial-gradient(circle at 50% 100%, rgba(253, 224, 71, 0.4) 0%, transparent 60%),
                  radial-gradient(circle at 50% 100%, rgba(251, 191, 36, 0.4) 0%, transparent 70%),
                  radial-gradient(circle at 50% 100%, rgba(244, 114, 182, 0.5) 0%, transparent 80%)
                `,
              }}
            >
              <HeroSection />
              <AboutSection />
            </div>

            <div id="experiences" ref={registerSection("experiences")}>
              <Timeline />
            </div>

            <div id="projects" ref={registerSection("projects")}>
              <ProjectSection />
            </div>

            <div id="skills" ref={registerSection("skills")}>
              <Skills />
              <ResumeSection />
            </div>

            <div id="contact" ref={registerSection("contact")}>
              <ContactSection />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
