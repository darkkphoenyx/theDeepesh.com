import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import HeroSection from "../pages/sections/Hero-section";
import Particles from "../animations/Backgrounds/Particles/Particles";
import AboutSection from "./sections/About-section";
import Skills from "./sections/Skills";
import ProjectSection from "./sections/Project-section";

const NavRoutes = [
  { id: 1, nav: "Know me", link: "#knowMe" },
  { id: 2, nav: "Projects", link: "#projects" },
  { id: 3, nav: "Skills", link: "#skills" },
  { id: 4, nav: "Contact", link: "#contact" },
];

const Homepage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);

      const sections = ["knowMe", "projects", "skills", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 4
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (link: string) => {
    const navbarHeight = document.querySelector("nav")?.clientHeight || 0;

    window.history.pushState({}, "", link);
    const targetElement = document.querySelector(link);

    if (targetElement) {
      const rect = targetElement.getBoundingClientRect();
      window.scrollTo({
        top: window.pageYOffset + rect.top - navbarHeight,
        behavior: "smooth",
      });
    } else {
      console.error(`Element with selector ${link} not found!`);
    }
  };

  return (
    <div className="bg-background min-h-screen text-primary">
      {/* NAVBAR */}
      <nav
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled ? "backdrop-blur-xl shadow-sm" : "bg-background"
        }`}
      >
        <div className="flex items-center justify-between w-full max-w-7xl mx-auto py-4 px-4">
          {/* Logo */}
          <div>
            <a
              href="#knowMe"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation("#knowMe");
              }}
            >
              <h1
                data-aos="fade-right"
                data-aos-duration="800"
                data-aos-once="true"
                className="text-2xl md:text-3xl font-bold cursor-none"
                style={{ fontFamily: "Priestacy" }}
              >
                theDeepesh
              </h1>
            </a>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:block">
            <ul className="flex gap-10 text-lg">
              {NavRoutes.map((link, index) => (
                <li
                  data-aos="fade-down"
                  data-aos-delay={`${index * 50}`}
                  data-aos-once="true"
                  key={link.id}
                >
                  <a
                    href={link.link}
                    className={`transition hover:text-secondary cursor-none ${
                      activeSection === link.link.slice(1)
                        ? "font-medium text-secondary"
                        : ""
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigation(link.link);
                    }}
                  >
                    {link.nav}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? <X size={36} /> : <Menu size={36} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden px-4 pb-4 w-full">
            <ul className="flex flex-col gap-4">
              {NavRoutes.map((link, index) => (
                <li
                  data-aos="fade-left"
                  data-aos-delay={`${index * 50}`}
                  data-aos-duration="400"
                  key={link.id}
                >
                  <a
                    href={link.link}
                    className={`block w-full py-2 ${
                      activeSection === link.link.slice(1)
                        ? "font-medium text-secondary"
                        : ""
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      setIsMobileMenuOpen(false);
                      handleNavigation(link.link);
                    }}
                  >
                    {link.nav}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
      {/* PARTICLES BACKGROUND + SECTIONS */}
      <div className="relative z-20 bg-background">
        <Particles
          className="absolute inset-0 z-0"
          particleCount={5000}
          particleColors={["#FFA500", "#FFFF00"]}
          particleSpread={12}
          particleBaseSize={80}
          speed={0.2}
          alphaParticles
        />

        {/* Content sits on top of Particles */}
        <div className="relative z-10">
          <section id="knowMe">
            <HeroSection />
            <AboutSection />
          </section>

          <section id="projects">
            <ProjectSection />
          </section>

          <section id="skills">
            <Skills />
          </section>

          {/* <div className="h-20 bg-background"></div> */}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
