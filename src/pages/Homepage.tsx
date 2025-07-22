import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import HeroSection from "../pages/sections/Hero-section";
import AboutSection from "../pages/sections/About-section";

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
    <div>
      {/* NAVBAR */}
      <nav
        className={`top-0 sticky z-30 transition-all duration-300 text-primary ${
          scrolled ? "backdrop-blur-xl shadow-sm" : "bg-background"
        }`}
      >
        <div className="flex items-center justify-between w-full max-w-7xl mx-auto py-4 px-4">
          {/* Logo */}
          <div>
            <h1 className="text-3xl font-bold">theDeepesh</h1>
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

      {/* PAGE SECTIONS */}
      <section id="home">
        <HeroSection />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section id="projects" className="min-h-screen bg-gray-100">
        <div className="max-w-7xl mx-auto py-20 px-4">
          <h2 className="text-3xl font-bold mb-6">Projects</h2>
          {/* Placeholder content */}
          <p>Project content goes here...</p>
        </div>
      </section>
      <section id="contact" className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto py-20 px-4">
          <h2 className="text-3xl font-bold mb-6">Contact</h2>
          {/* Placeholder content */}
          <p>Contact form or info goes here...</p>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
