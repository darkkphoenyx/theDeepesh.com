import CircularText from "../../animations/TextAnimations/CircularText/CircularText";
import TextPressure from "../../animations/TextAnimations/TextPressure/TextPressure";

const HeroSection = () => {
  return (
    <>
      <div className="w-full text-center min-h-screen pt-20">
        <h1 className="max-w-5xl w-full mx-auto">
          <TextPressure
            text="Welcome Home!"
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

        <CircularText
          text="DEEPESH.SUNUWAR."
          onHover="speedUp"
          spinDuration={20}
          className="custom-class"
        />
      </div>
    </>
  );
};

export default HeroSection;
