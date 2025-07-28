import { BookOpen, GraduationCap } from "lucide-react";
import HoverPreview from "../../components/HoverPreview";
import { Card, CardDescription, CardTitle } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";

const AboutSection = () => {
  return (
    <section className="overflow-x-hidden w-full min-h-screen max-w-7xl py-4 mx-auto text-primary flex flex-col md:flex-row items-center gap-0 md:gap-8 px-4">
      {/* Image Section */}

      {/* Text Section */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2
          data-aos="fade-right"
          className="text-5xl font-bold mb-12 text-secondary"
          style={{ fontFamily: "Priestacy" }}
        >
          Know Me
        </h2>
        <div
          data-aos="fade-right"
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
        <div className="md:mt-8 mt-16 space-y-4">
          <h2
            data-aos="fade-right"
            className="flex items-center gap-2 font-medium text-2xl justify-center md:justify-start text-secondary"
          >
            <GraduationCap size={34} />
            Education
          </h2>
          <Card
            data-aos="fade-right"
            data-aos-delay="30"
            className="bg-gray-800 px-10 py-4 gap-2"
          >
            <CardTitle className="flex items-center gap-2 font-medium text-xl text-secondary">
              BSc.CSIT
            </CardTitle>
            <div className="flex space-y-2 md:space-y-0 justify-between lg:items-center md:flex-row flex-col items-start">
              <CardDescription className="text-gray-200 flex gap-2 text-start lg:text-center">
                <BookOpen size={20} />
                Tribhuvan University, Kathmandu - Nepal
              </CardDescription>
              <Badge className="rounded-4xl text-secondary border border-secondary/50 bg-secondary/10 p-2">
                2022 - Present
              </Badge>
            </div>
          </Card>
        </div>
      </div>
      <div data-aos="fade-left" className="w-full md:w-1/2 flex justify-center">
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
