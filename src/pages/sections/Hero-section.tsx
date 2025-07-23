import TextPressure from "../../animations/TextAnimations/TextPressure/TextPressure";
import ConnectWithMe from "../../components/ConnectWithMe";

const HeroSection = () => {
  return (
    <>
      <div className="relative w-full text-center h-screen flex flex-col items-center md:pt-20 space-y-10 md:space-y-16">
        <img src="./profile.gif" alt="owner gif" />

        <h1 className="max-w-2xl w-full mx-auto px-10 md:px-4">
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

        <ConnectWithMe />
        {/* <img
          className="absolute top-0 left-1/2 transform -translate-x-1/2 disabled"
          src="./profile.gif"
          alt="owner gif"
        /> */}
      </div>
    </>
  );
};

export default HeroSection;
