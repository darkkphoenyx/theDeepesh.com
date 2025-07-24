import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";

interface ISkillsCard {
  id: string;
  skillName: string;
  link: string;
  description: string;
  image: string;
  bgColor: string;
  hColor: string;
  skew?: string;
}

const skillsAvailable: ISkillsCard[] = [
  {
    id: "01",
    skillName: "React",
    link: "",
    description:
      "Lorem Ipsum lksalkfj lk asldkfj salkfasj fsldk foiasjdk flksadj flksadj flskadjf lkasj flksdj flkasf",
    image: "https://cdn.worldvectorlogo.com/logos/react-1.svg",
    bgColor: "bg-green-200 border-1 border-green-400",
    hColor: "text-green-600",
    skew: "skew-y-4 -skew-x-4",
  },
  {
    id: "02",
    skillName: "Typescript",
    link: "",
    description:
      "Lorem Ipsum lksalkfj lk asldkfj salkfasj fsldk foiasjdk flksadj flksadj flskadjf lkasj flksdj flkasf",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png",
    bgColor: "bg-red-200 border-1 border-red-400",
    hColor: "text-red-600",
  },
  {
    id: "03",
    skillName: "JavaScript",
    link: "",
    description:
      "Lorem Ipsum lksalkfj lk asldkfj salkfasj fsldk foiasjdk flksadj flksadj flskadjf lkasj flksdj flkasfasdfasfasdf asdf as fsa f saf saf ",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuHnJDLOcdm_0b6N6kNj-1OvO9KhKYgqIy0w&s",
    bgColor: "bg-cyan-200 border-1 border-cyan-400",
    hColor: "text-cyan-600",
    skew: "-skew-y-10 skew-x-10",
  },
  {
    id: "03",
    skillName: "JavaScript",
    link: "",
    description:
      "Lorem Ipsum lksalkfj lk asldkfj salkfasj fsldk foiasjdk flksadj flksadj flskadjf lkasj flksdj flkasfasdfasfasdf asdf as fsa f saf saf ",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuHnJDLOcdm_0b6N6kNj-1OvO9KhKYgqIy0w&s",
    bgColor: "bg-cyan-200 border-1 border-cyan-400",
    hColor: "text-cyan-600",
  },
  {
    id: "03",
    skillName: "JavaScript",
    link: "",
    description:
      "Lorem Ipsum lksalkfj lk asldkfj salkfasj fsldk foiasjdk flksadj flksadj flskadjf lkasj flksdj flkasfasdfasfasdf asdf as fsa f saf saf ",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuHnJDLOcdm_0b6N6kNj-1OvO9KhKYgqIy0w&s",
    bgColor: "bg-cyan-200 border-1 border-cyan-400",
    hColor: "text-cyan-600",
  },
  {
    id: "03",
    skillName: "JavaScript",
    link: "",
    description:
      "Lorem Ipsum lksalkfj lk asldkfj salkfasj fsldk foiasjdk flksadj flksadj flskadjf lkasj flksdj flkasfasdfasfasdf asdf as fsa f saf saf ",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuHnJDLOcdm_0b6N6kNj-1OvO9KhKYgqIy0w&s",
    bgColor: "bg-cyan-200 border-1 border-cyan-400",
    hColor: "text-cyan-600",
  },
  {
    id: "03",
    skillName: "JavaScript",
    link: "",
    description:
      "Lorem Ipsum lksalkfj lk asldkfj salkfasj fsldk foiasjdk flksadj flksadj flskadjf lkasj flksdj flkasfasdfasfasdf asdf as fsa f saf saf ",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuHnJDLOcdm_0b6N6kNj-1OvO9KhKYgqIy0w&s",
    bgColor: "bg-cyan-200 border-1 border-cyan-400",
    hColor: "text-cyan-600",
  },
  {
    id: "03",
    skillName: "JavaScript",
    link: "",
    description:
      "Lorem Ipsum lksalkfj lk asldkfj salkfasj fsldk foiasjdk flksadj flksadj flskadjf lkasj flksdj flkasfasdfasfasdf asdf as fsa f saf saf ",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuHnJDLOcdm_0b6N6kNj-1OvO9KhKYgqIy0w&s",
    bgColor: "bg-cyan-200 border-1 border-cyan-400",
    hColor: "text-cyan-600",
  },
  {
    id: "03",
    skillName: "JavaScript",
    link: "",
    description:
      "Lorem Ipsum lksalkfj lk asldkfj salkfasj fsldk foiasjdk flksadj flksadj flskadjf lkasj flksdj flkasfasdfasfasdf asdf as fsa f saf saf ",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuHnJDLOcdm_0b6N6kNj-1OvO9KhKYgqIy0w&s",
    bgColor: "bg-cyan-200 border-1 border-cyan-400",
    hColor: "text-cyan-600",
  },
];
const SkillsCard = () => {
  return (
    <div className="flex w-full min-h justify-center py-10 border-10 border-white gap-16 flex-wrap bg-[url('https://images.unsplash.com/photo-1558051815-0f18e64e6280?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-no-repeat bg-center bg-cover">
      {skillsAvailable.map((skill) => (
        <a href={skill.link}>
          <Card
            className={`md:w-52 w-64  ${skill.skew} p-2 border-0 shadow-2xl rounded-3xl relative pt-14`}
          >
            <img
              className="h-12 w-12 absolute top-3 transform -translate-x-1/2 left-1/2
              "
              src="https://pngimg.com/d/pin_PNG100.png"
              alt="thumb pin png"
            />
            <img
              className="absolute right-10 top-10 h-12 w-12 rounded-xl"
              src={skill.image}
              alt={`${skill.skillName} logo`}
            />
            <div className={` rounded-2xl p-4 ${skill.bgColor}`}>
              <CardHeader
                style={{ fontFamily: "Priestacy" }}
                className={`text-4xl font-semibold p-0 ${skill.hColor}`}
              >
                {skill.id}
              </CardHeader>
              <CardTitle className="text-2xl font-semibold">
                {skill.skillName}
              </CardTitle>
              <CardDescription className="text-black text-base overflow-hidden text-ellipsis whitespace-nowrap line-clamp-2 ">
                {skill.description}
              </CardDescription>
            </div>
          </Card>
        </a>
      ))}
    </div>
  );
};

export default SkillsCard;
