import { useTransform, motion, useScroll } from "framer-motion";
import CircularText from "../../../animations/TextAnimations/CircularText/CircularText";
import TextPressure from "../../../animations/TextAnimations/TextPressure/TextPressure";
import ConnectWithMe from "../../../components/Contact/ConnectWithMe";
import { useLayoutEffect, useState } from "react";
import Heading from "../../../shared/Heading";

const HeroSection = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  useLayoutEffect(() => {
    const handleScroll = () => {
      setIsMobileMenuOpen(window.scrollY >= 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const zIndex = useTransform(
    scrollYProgress,
    [0, isMobileMenuOpen ? 0.35 : 1],
    [10, isMobileMenuOpen ? -100 : -10]
  );

  return (
    <>
      <div className="h-screen relative overflow-hidden">
        <motion.section
          style={{ zIndex: zIndex }}
          className={`fixed w-full text-center min-h-screen flex flex-col items-center md:pt-20 space-y-12 md:space-y-16 px-4 ${
            isMobileMenuOpen ? "-z-10" : "z-10"
          }`}
        >
          <img
            data-aos="zoom-in"
            src="./profile.gif"
            alt="owner gif"
            loading="lazy"
          />

          <h1 className="hidden md:block relative max-w-4xl w-full mx-auto px-10 md:px-4">
            <span
              data-aos="fade-up"
              className="absolute left-1/2 md:-top-3 -top-5 -translate-x-1/2 text-center text-secondary text-3xl md:text-5xl z-10"
              style={{ fontFamily: "Priestacy" }}
            >
              Hey There,
            </span>
            <TextPressure
              text="I'm Deepesh!"
              flex={true}
              alpha={false}
              stroke={false}
              width={true}
              weight={true}
              italic={false}
              textColor="#f56e5b" //primary color --> directly cannot use text-primary so passing hex instead😅
              strokeColor="#ff0000"
            />
          </h1>
          <h1 className="block md:hidden relative w-full">
            <Heading
              className="absolute left-1/2 md:-top-3 -top-7 -translate-x-1/2 text-center text-secondary text-4xl z-10"
              title="Hey There,"
            />
            <p
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-duration="1200"
              className="text-5xl font-bold w-full"
            >
              I'M DEEPESH
            </p>
          </h1>

          <motion.div>
            <ConnectWithMe />
          </motion.div>
        </motion.section>
        <CircularText
          className="hidden md:block absolute transform -translate-x-1/2 left-1/2 -bottom-180 z-0"
          text="Just • Keep • Scrolling • "
        />
      </div>
      <p
        className="absolute hidden md:block -right-95 mt-105 transform rotate-90 text-7xl font-bold m-0 p-0 mix-blend-luminosity"
        style={{ letterSpacing: "30px" }}
      >
        darkkphoenyx
      </p>

      <div className="h-[50vh] hidden md:block"></div>
    </>
  );
};

export default HeroSection;
