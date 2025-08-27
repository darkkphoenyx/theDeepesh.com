import FlowingMenu from "../../animations/Components/FlowingMenu/FlowingMenu";
import Marquee from "react-fast-marquee";
import { SkillsImages } from "./Projects/SkillsImagesExport";

const demoItems = [
  {
    link: "#",
    text: "Adapt",
    subHeader: "New tech? I evolve fast.",
    image: "https://picsum.photos/600/400?random=1",
  },
  {
    link: "#",
    text: "Lead ",
    subHeader: "Whether it’s code or a team, I take initiative.",
    image: "https://picsum.photos/600/400?random=2",
  },
  {
    link: "#",
    text: "Spark ",
    subHeader: "Hackathons fuel my fire",
    image: "https://picsum.photos/600/400?random=3",
  },
  {
    link: "#",
    text: "Flow ",
    subHeader: "When I code, I lose sense of time.",
    image: "https://picsum.photos/600/400?random=4",
  },
];

const Skills = () => {
  return (
    <>
      <div className="bg-gray-800 md:py-10 py-4 md:rounded-t-[50px] rounded-t-[30px]">
        <section className="h-auto flex flex-col w-full">
          {/* <h1
            data-aos="fade-up"
            className="text-5xl font-semibold text-center text-secondary"
            style={{ fontFamily: "Priestacy" }}
          >
            My Skills
          </h1> */}
          <Marquee direction="right" className="md:py-6">
            {SkillsImages.map((image) => (
              <div className="flex gap-2 items-center md:text-2xl text-xl m-10  font-medium">
                <img
                  className="md:h-10 md:w-10 w-8 h-8 rounded-md"
                  src={image.logo}
                  alt={image.alt}
                />
                <p>{image.text}</p>
              </div>
            ))}
          </Marquee>
          <div className="w-full md:h-[600px] h-[400px]">
            <FlowingMenu items={demoItems} />
          </div>
        </section>
      </div>
    </>
  );
};

export default Skills;
