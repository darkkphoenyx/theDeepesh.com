import FlowingMenu from "../../animations/Components/FlowingMenu/FlowingMenu";
import { CardCarousel } from "../../components/ui/card-carousel";
const images = [
  {
    logo: "https://cdn.worldvectorlogo.com/logos/react-1.svg",
    background: "bg-gradient-to-tl from-primary to-secondary",
    alt: "Image 1",

    text: "React",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png",
    background: "bg-gradient-to-tl from-primary to-secondary",
    alt: "Image 2",
    text: "Typescript",
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5-e_zLyIIrlVMxClajEd6a1KCSg8D5koXLQ&s",
    background: "bg-gradient-to-tl from-primary to-secondary",
    alt: "Image 3",
    text: "Node.JS",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg",
    background: "bg-gradient-to-tl from-primary to-secondary",
    alt: "Image 4",
    text: "PHP",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png",
    background: "bg-gradient-to-tl from-primary to-secondary",
    alt: "Image 4",
    text: "C",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/800px-ISO_C%2B%2B_Logo.svg.png",
    background: "bg-gradient-to-tl from-primary to-secondary",
    alt: "Image 5",
    text: "C++",
  },
  {
    logo: "https://camo.githubusercontent.com/e18d5c3f9dc9e2733eca35fcab4d0c52715b9c206c3d3745c905b2f80829ff25/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f332f33662f4769745f69636f6e2e7376672f3230343870782d4769745f69636f6e2e7376672e706e67",
    background: "bg-gradient-to-tl from-primary to-secondary",
    alt: "Image 6",
    text: "Git",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png",
    background: "bg-gradient-to-tl from-primary to-secondary",
    alt: "Image 7",
    text: "Linux",
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLwmGGCfxewrm2ZI29NCT36lGIkzCPirEShdGVnfC2q6LnfmiKojrnH_nibFBHOitKqp4&usqp=CAU",
    background: "bg-gradient-to-tl from-primary to-secondary",
    alt: "Image 8",
    text: "HTML 5",
  },
  {
    logo: "https://images.icon-icons.com/2415/PNG/512/css_plain_logo_icon_146573.png",
    background: "bg-gradient-to-tl from-primary to-secondary",
    alt: "Image 9",
    text: "CSS 3",
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZR9npLfmApWYC0keCwuwCDzeini7NocCW8w&s",
    background: "bg-gradient-to-tl from-primary to-secondary",
    alt: "Image 10",
    text: "Javascript",
  },
  {
    logo: "https://cdn-1.webcatalog.io/catalog/github/github-icon-filled-256.png?v=1750639266901",
    background: "bg-gradient-to-tl from-primary to-secondary",
    alt: "Image 11",
    text: "GitHub",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png",
    background: "bg-gradient-to-tl from-primary to-secondary",
    alt: "Image 12",
    text: "Bootstrap",
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSDKn3vA2YUbXzN0ZC3gALWJ08gJN-Drl15w&s",
    background: "bg-gradient-to-tl from-primary to-secondary",
    alt: "Image 13",
    text: "Tailwind",
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFcYJoetYqKxgVtDoFHN08qIF811Aglug-sw&s",
    background: "bg-gradient-to-tl from-primary to-secondary",
    alt: "Image 14",
    text: "Postman",
  },
  {
    logo: "https://adware-technologies.s3.amazonaws.com/uploads/technology/thumbnail/20/express-js.png",
    background: "bg-gradient-to-tl from-primary to-secondary",
    alt: "Image 15",
    text: "ExpressJS",
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2ZYtHv2OLXmthRPbkmENZRXuqBVDwlsrZ1A&s",
    background: "bg-gradient-to-tl from-primary to-secondary",
    alt: "Image 16",
    text: "MongoDB",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/800px-Postgresql_elephant.svg.png",
    background: "bg-gradient-to-tl from-primary to-secondary",
    alt: "Image 17",
    text: "PostgreSQL",
  },
  {
    logo: "https://yt3.googleusercontent.com/ytc/AIdro_lThaNg9hzYNfzT3IC7hGdBy8qijl4BM1cXWHr-p3X7M2Q=s900-c-k-c0x00ffffff-no-rj",
    background: "bg-gradient-to-tl from-primary to-secondary",
    alt: "Image 18",
    text: "MySql",
  },
];
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
      <div className="bg-gray-800 md:pt-30 pt-16">
        <section className="h-auto mx-auto max-w-7xl flex flex-col  w-full">
          <h1
            data-aos="fade-up"
            className="text-5xl font-semibold text-center text-secondary"
            style={{ fontFamily: "Priestacy" }}
          >
            My Skills
          </h1>
          <div
            data-aos="fade-up"
            data-aos-delay="30"
            className="max-w-7xl mx-auto w-full mt-20"
          >
            <CardCarousel
              images={images}
              autoplayDelay={2000}
              showPagination={true}
              showNavigation={true}
            />
          </div>
          {/*card carousel */}
          {/* <div className="w-full">
          <CardSwipe
          images={images}
          autoplayDelay={2000}
          slideShadows={false}
          />
          </div> */}
          <div className="w-full md:h-[600px] h-[500px]">
            <FlowingMenu items={demoItems} />
          </div>

          {/* <div className="p-4 text-center text-primary flex justify-center items-center">
          <Facebook size={80} className="" />
          <FlipLink href="https://x.com/guri_who"> Behance</FlipLink>
          </div> */}
        </section>
      </div>
    </>
  );
};

export default Skills;
