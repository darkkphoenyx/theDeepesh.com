import FlowingMenu from "../../../animations/Components/FlowingMenu/FlowingMenu";
import Marquee from "react-fast-marquee";
import { SkillsImages } from "../../../components/ProjectSection/SkillsImagesExport";

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
      <div className="bg-gray-800 md:py-20 py-16 md:rounded-t-[50px] rounded-t-[30px]">
        <section className="h-auto flex flex-col w-full">
          <h1
            data-aos="fade-up"
            className="lg:text-5xl text-4xl font-semibold text-center text-secondary mb-10"
            style={{ fontFamily: "Priestacy" }}
          >
            My Skills
          </h1>
          <Marquee direction="right" className="md:py-6">
            {SkillsImages.map((image) => (
              <div key={image.text} className="my-10 mx-20">
                <image.logo size={64} />
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
