import { Download } from "lucide-react";
import { Card, CardDescription, CardTitle } from "../../components/ui/card";
import "aos/dist/aos.css";
import project from "../../appwrite/APIs";
import { useEffect, useState } from "react";
import PixelTransition from "../../animations/Animations/PixelTransition/PixelTransition";
import Marquee from "react-fast-marquee";
import { SkillsImages } from "./Projects/SkillsImagesExport";

const ResumeSection = () => {
  const [pdfDownloadLink, setPdfDownloadLink] = useState<string | undefined>();

  useEffect(() => {
    const getPdfLink = async () => {
      try {
        const response = await project.getFileDownload();
        setPdfDownloadLink(response);
      } catch (error) {
        console.log(error);
      }
    };
    getPdfLink();
  }, []);

  return (
    <div className="bg-background">
      <section className="py-20 max-w-7xl mx-auto px-4 ">
        <h2
          data-aos="fade-up"
          className="md:text-5xl text-center text-4xl font-bold mb-12 text-secondary"
          style={{ fontFamily: "Priestacy" }}
        >
          My Resume
        </h2>
        <div className="border border-gray-600 flex md:flex-nowrap flex-wrap items-center justify-center p-6 md:p-12 rounded-3xl m-0 shadow-none w-full gap-8 bg-gray-800 overflow-x-hidden">
          <div
            data-aos="fade-right"
            data-aos-delay="30"
            className="min-w-max md:h-[500px] h-[300px] p-0 m-0 shadow-none rounded-4xl"
          >
            <PixelTransition
              firstContent={
                <img
                  src="https://syd.cloud.appwrite.io/v1/storage/buckets/688fa4ae0013e56f4d51/files/69186f4b002c4228ecd2/view?project=688f064e0012515eb6e8&mode=admin"
                  alt="resume png"
                  style={{
                    width: "100%",
                    height: "100%",
                    scale: "1.05",
                    objectFit: "fill",
                  }}
                />
              }
              secondContent={
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  <p
                    style={{
                      fontWeight: 900,
                      color: "#ffffff",
                      padding: "0px 20px",
                      textAlign: "center",
                    }}
                  >
                    Peek-a-boo won’t show it all... 👀 <br /> Hit download to
                    see the real deal!
                  </p>
                </div>
              }
              gridSize={12}
              pixelColor="#101E2A"
              animationStepDuration={0.3}
              className="custom-pixel-card bg-secondary"
            />
          </div>

          <Card
            data-aos="fade-left"
            className="w-full p-0 m-0 shadow-none border-none bg-transparent"
          >
            <CardTitle className="text-secondary md:text-4xl text-3xl text-center md:text-left">
              Download Resume
            </CardTitle>
            <CardDescription className="text-gray-300 md:text-base text-center md:text-left">
              Curious about what I bring to the table? Dive into the interactive
              preview below or grab the full PDF for the whole story, skills,
              experience, and a dash of personality included!
            </CardDescription>
            <div className="flex justify-center md:justify-start mt-4">
              <a href={pdfDownloadLink} className="w-full">
                <button className="flex items-center justify-center gap-2 lg:w-1/2 w-full text-background cursor-none bg-secondary py-4 rounded-full md:text-2xl text-xl font-medium hover:scale-105 transition-all shadow-[0px_0px_20px_10px_rgba(255,223,176,0.2)]">
                  <Download />
                  Download Now
                </button>
              </a>
            </div>
          </Card>
        </div>
      </section>
      <Marquee direction="left" className="md:py-6 overflow-x-hidden">
        {SkillsImages.map((image) => (
          <div className="flex gap-2 items-center md:text-2xl text-xl m-10  font-medium">
            <img
              className="md:h-10 md:w-10 w-8 h-8 rounded-xl"
              src={image.logo}
              alt={image.alt}
            />
            <p>{image.text}</p>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default ResumeSection;
