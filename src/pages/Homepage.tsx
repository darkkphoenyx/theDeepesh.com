import { useState, useEffect, useRef, useCallback } from "react";
import { Menu, X } from "lucide-react";
import HeroSection from "../pages/sections/Hero-section";
import Particles from "../animations/Backgrounds/Particles/Particles";
import AboutSection from "./sections/About-section";
import Skills from "./sections/Skills";
import ProjectSection from "./sections/Projects/Project-section";
import ResumeSection from "./sections/Resume-section";
import ContactSection from "./sections/Contact-section";
import { Toaster } from "../components/ui/sonner";
import { useIsMd } from "../utils/useIsMid";

const NavRoutes = [
  { id: 1, nav: "Know me", link: "knowMe" },
  { id: 2, nav: "Projects", link: "projects" },
  { id: 3, nav: "Skills", link: "skills" },
  { id: 4, nav: "Contact", link: "contact" },
];

const Homepage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const navRef = useRef<HTMLElement | null>(null);
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  // this is a helper function for Removing null return issue of Ref. el
  const registerSection = useCallback(
    (key: string) => (el: HTMLDivElement | null) => {
      sectionRefs.current[key] = el;
    },
    []
  );

  const handleRefNavigation = useCallback((section: string) => {
    const navbarHeight = navRef.current?.clientHeight || 0;

    const element = sectionRefs.current[section];

    if (element) {
      const rect = element.getBoundingClientRect();
      window.scrollTo({
        top: window.pageYOffset + rect.top - navbarHeight,
        behavior: "smooth",
      });
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 200);

      const sections = Object.keys(sectionRefs.current);
      for (const section of sections) {
        const el = sectionRefs.current[section];
        if (el) {
          const rect = el.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 4
          ) {
            if (activeSection !== section) {
              setActiveSection(section);
            }
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  const isMd = useIsMd();

  //remove mobile nav on desktop and tablet
  useEffect(() => {
    if (isMd) setIsMobileMenuOpen(false);
  }, [isMd]);

  const width = isMd ? (scrolled ? "80rem" : "90%") : "100%";

  return (
    <>
      <Toaster position="top-right" />
      <div className="bg-background min-h-screen text-primary">
        {/* NAVBAR */}
        <nav
          ref={navRef}
          role="navigation"
          aria-label="Main Navigation"
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
              {/* Logo */}
              <div>
                <a
                  href="#knowMe"
                  onClick={(e) => {
                    e.preventDefault();
                    handleRefNavigation("knowMe");
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
                        href={`#${link.link}`}
                        className={`transition hover:text-secondary cursor-none ${
                          activeSection === link.link
                            ? "font-medium text-secondary"
                            : ""
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          handleRefNavigation(link.link);
                        }}
                      >
                        {link.nav}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Mobile Menu Toggle */}
              <div className="md:hidden" id="mobile-menu">
                <button
                  onClick={toggleMobileMenu}
                  aria-expanded={isMobileMenuOpen}
                  aria-controls="mobile-menu"
                  aria-label="Toggle mobile navigation menu"
                >
                  {isMobileMenuOpen ? <X size={36} /> : <Menu size={36} />}
                </button>
              </div>
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
                      href={`#${link.link}`}
                      className={`block w-full py-2 ${
                        activeSection === link.link
                          ? "font-medium text-secondary"
                          : ""
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        setIsMobileMenuOpen(false);
                        handleRefNavigation(link.link);
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

            <div id="projects" ref={registerSection("projects")}>
              <ProjectSection />
            </div>

            <div id="skills" ref={registerSection("skills")}>
              <Skills />

              {/* <div id="resume" ref={registerSection("resume")}> */}
              <ResumeSection />
              {/* </div> */}
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
