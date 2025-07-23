import HoverPreview from "../../components/HoverPreview";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="w-full min-h-screen max-w-7xl py-4 mx-auto text-primary flex flex-col md:flex-row items-center justify-center gap-0 md:gap-8 md:px-4"
    >
      {/* Image Section */}

      {/* Text Section */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2
          data-aos="fade-up"
          className="text-5xl font-bold mb-8 text-secondary"
          style={{ fontFamily: "Priestacy" }}
        >
          Know Me
        </h2>
        <div
          data-aos="fade-up"
          data-aos-delay="50"
          className="text-lg leading-relaxed max-w-xl mx-auto md:mx-0"
        >
          Hi👋! I'm Deepesh. I'm a passionate developer with strong expertise in
          frontend development using{" "}
          <HoverPreview label="React" url="https://reactjs.org" />,{" "}
          <HoverPreview
            label="Typescript"
            url="https://www.typescriptlang.org/"
          />
          , <HoverPreview label="Tailwind CSS" url="https://tailwindcss.com/" />
          . I focus on building clean, responsive, and scalable user interfaces
          with reusable components and optimized performance.
          <br />
          <br />
          While frontend is my core strength, I’m actively expanding my backend
          skills in <HoverPreview label="Node.JS" url="https://nodejs.org/en" />
          , <HoverPreview label="PHP" url="https://www.php.net/" />, and{" "}
          <HoverPreview label="PostgreSQL" url="https://www.postgresql.org" />{" "}
          to become a well-rounded full-stack developer. Driven by curiosity and
          problem-solving, I enjoy owning projects end-to-end and continuously
          learning new technologies to deliver impactful and maintainable
          solutions.
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-delay="50"
        className="w-full md:w-1/2 flex justify-center"
      >
        <img
          src="./theDeepesh.png"
          alt="owner profile"
          className="w-full max-w-md h-auto object-contain"
        />
      </div>
      <div className="h-20 bg-background"></div>
    </section>
  );
};

export default AboutSection;
