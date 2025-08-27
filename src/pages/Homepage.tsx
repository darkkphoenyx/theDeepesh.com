import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import HeroSection from "../pages/sections/Hero-section";
import Particles from "../animations/Backgrounds/Particles/Particles";
import AboutSection from "./sections/About-section";
import Skills from "./sections/Skills";
import ProjectSection from "./sections/Projects/Project-section";
import ResumeSection from "./sections/Resume-section";
import ContactSection from "./sections/Contact-section";
import { Toaster } from "../components/ui/sonner";

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
  const isMd = window.innerWidth >= 1080;
  const width = scrolled ? (isMd ? "80rem" : "100%") : isMd ? "90%" : "100%";
  return (
    <>
      <div className=" bg-background min-h-screen text-primary">
        {/* NAVBAR */}
        <nav
          className={`sticky top-0 z-20 transition-all duration-300 ease-in ${
            scrolled
              ? "backdrop-blur-xl shadow-sm bg-background/50"
              : "bg-background"
          }`}
        >
          <div className="mx-[10px]">
            <div
              className={`flex items-center justify-between w-full mx-auto py-4 px-4 transition-all duration-300 ease-in-out`}
              style={{
                maxWidth: width,
              }}
            >
              {/* content */}

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
              {/* </div> */}
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

          {/* Content sits on top of Particles */}
          <div className="relative">
            <section
              id="knowMe"
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
            </section>

            <section id="projects">
              <ProjectSection />
            </section>

            <section id="skills">
              <Skills />
            </section>

            <section id="resume">
              <ResumeSection />
            </section>

            {/* contact section wrapper */}
            <Toaster />
            <section id="contact">
              <ContactSection />
            </section>
          </div>
        </div>
      </div>
      <div
        className="relative h-[210px] bg-primary z-40 lg:block hidden" //remember the h is the total height of the viewport for the actual component to be placed... so play around with the values
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }} //here the polygon is a rectangle that is used as clipping mask for the component to be rendered
      >
        <div className="relative h-[calc(100vh+210px)] -top-[100vh]">
          <div className="sticky top-[calc(100vh-210px)] h-[210px]">
            <div className="flex items-center justify-center bg-primary">
              <p className="lg:text-[200px] text-[150px] flex items-center lg:-mt-16 -mt-8 font-bold  text-background tracking-widest">
                revamp
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
