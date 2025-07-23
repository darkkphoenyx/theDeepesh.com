import CircularText from "../animations/TextAnimations/CircularText/CircularText";

const Spinner = () => {
  return (
    <div>
      <CircularText
        text="DEEPESH.SUNUWAR."
        onHover="speedUp"
        spinDuration={20}
        className="custom-class"
      />
    </div>
  );
};

export default Spinner;
