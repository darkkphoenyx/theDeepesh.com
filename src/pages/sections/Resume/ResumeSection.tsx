import { useEffect, useState } from "react";
import project from "../../../appwrite/APIs";
import PixelTransition from "../../../animations/Animations/PixelTransition/PixelTransition";
import { Card, CardDescription, CardTitle } from "../../../components/ui/card";
import { Download } from "lucide-react";
import Marquee from "react-fast-marquee";
import { SkillsImages } from "../../../components/ProjectSection/SkillsImagesExport";
import Heading from "../../../shared/Heading";

const ResumeSection = () => {
  const [pdfDownloadLink, setPdfDownloadLink] = useState<string | undefined>();

  //cv preview image
  const CV_COVER = import.meta.env.VITE_CV_COVER;

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
        <Heading title="My Resume" />
        <div className="border border-gray-600 flex md:flex-nowrap flex-wrap items-center justify-center p-6 md:p-12 rounded-3xl m-0 shadow-none w-full gap-8 bg-gray-800 overflow-x-hidden">
          <div
            data-aos="fade-right"
            data-aos-delay="30"
            className="min-w-max md:h-[500px] h-[300px] p-0 m-0 shadow-none rounded-4xl"
          >
            <PixelTransition
              firstContent={
                <img
                  src={CV_COVER}
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

      {/* skills marquee */}
      <Marquee direction="left" className="md:py-6">
        {SkillsImages.map((image) => (
          <div key={image.text} className="mb-20 md:mx-20 mx-10">
            <image.logo size={64} className="hidden md:block" />
            <image.logo size={40} className="block md:hidden" />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default ResumeSection;
