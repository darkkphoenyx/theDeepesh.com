import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import HeroSection from "../pages/sections/Hero-section";
import AboutSection from "../pages/sections/About-section";
import Particles from "../animations/Backgrounds/Particles/Particles";

const NavRoutes = [
  { id: 1, nav: "Home", link: "#home" },
  { id: 2, nav: "About", link: "#about" },
  { id: 3, nav: "Projects", link: "#projects" },
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

      const sections = ["home", "about", "projects", "contact"];
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
    <div className="bg-background text-primary">
      {/* NAVBAR */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "backdrop-blur-xl shadow-sm" : "bg-background"
        }`}
      >
        <div className="flex items-center justify-between w-full max-w-7xl mx-auto py-4 px-4">
          {/* Logo */}
          <div>
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation("#home");
              }}
            >
              <h1 className="text-3xl font-bold">theDeepesh</h1>
            </a>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:block">
            <ul className="flex gap-10 text-lg">
              {NavRoutes.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.link}
                    className={`transition hover:text-secondary ${
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
              {NavRoutes.map((link) => (
                <li key={link.id}>
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
      <div className="relative z-0">
        <Particles
          className="absolute inset-0 z-0"
          particleCount={600}
          particleColors={["#FFA500", "#FFFF00"]}
          particleSpread={12}
          particleBaseSize={80}
          speed={0.2}
          alphaParticles
        />
        {/* Content sits on top of Particles */}
        <div className="relative z-10 max-w-7xl mx-auto">
          <section id="home">
            <HeroSection />
          </section>

          <section id="about" className="min-h-screen pt-24">
            <AboutSection />
          </section>

          {/* Add your other sections like projects, contact, etc. below */}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
