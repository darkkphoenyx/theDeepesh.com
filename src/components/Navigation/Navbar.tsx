import { useCallback, useEffect, useRef, useState } from "react";
import { useIsMd } from "../../utils/useIsMid";
import { Menu, X } from "lucide-react";

const NavRoutes = [
  { id: 1, nav: "Know me", link: "knowMe" },
  { id: 2, nav: "Experiences", link: "experiences" },
  { id: 3, nav: "Projects", link: "projects" },
  { id: 4, nav: "Skills", link: "skills" },
  { id: 5, nav: "Contact", link: "contact" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const navRef = useRef<HTMLElement | null>(null);
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

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
          className={`flex items-center justify-between w-full mx-auto py-4 md:px-4 pl-2 transition-all duration-300 ease-in-out`}
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
  );
};

export default Navbar;
