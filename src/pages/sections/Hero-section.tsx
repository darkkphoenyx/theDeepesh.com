import CircularText from "../../animations/TextAnimations/CircularText/CircularText";
import TextPressure from "../../animations/TextAnimations/TextPressure/TextPressure";
import ConnectWithMe from "../../components/ConnectWithMe";

const HeroSection = () => {
  return (
    <>
      <div className="min-h-screen relative overflow-hidden">
        <section className="fixed -z-10 w-full text-center min-h-screen flex flex-col items-center md:pt-20 space-y-12 md:space-y-16 px-4">
          <img data-aos="zoom-in" src="./profile.gif" alt="owner gif" />

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
            <span
              data-aos="fade-up"
              data-aos-once="true"
              className="absolute left-1/2 md:-top-3 -top-7 -translate-x-1/2 text-center text-secondary text-4xl z-10"
              style={{ fontFamily: "Priestacy" }}
            >
              Hey There,
            </span>
            <p
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-duration="1200"
              className="text-5xl font-bold w-full"
            >
              I'M DEEPESH
            </p>
          </h1>

          <ConnectWithMe />
        </section>
        <CircularText
          className="hidden md:block absolute transform -translate-x-1/2 left-1/2 -bottom-180 z-0"
          text="scrolldown"
        />
      </div>
    </>
  );
};

export default HeroSection;
