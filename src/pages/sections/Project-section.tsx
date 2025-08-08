import { GithubIcon } from "lucide-react";
import { Card, CardDescription, CardTitle } from "../../components/ui/card";
import project from "../../appwrite/APIs";
import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import { useDispatch } from "react-redux";
import { updateIsOpen } from "../../redux/projectSlice";
import type { Project } from "../../interfaces/projectCrad.interface";

const ProjectButtons = [
  {
    id: 1,
    name: "All Projects",
  },
  {
    id: 2,
    name: "FullStack",
  },
  {
    id: 3,
    name: "Frontend",
  },
  {
    id: 4,
    name: "Others",
  },
];

const ProjectSection = () => {
  const [projectData, setProjectData] = useState<Project[]>([]);
  const [isCardOpen, setIsCardOpen] = useState(false);
  const [cardType, setCardType] = useState<string>(ProjectButtons[0].name);

  const dispatch = useDispatch();
  useEffect(() => {
    const fetceProjects = async () => {
      try {
        const response = await project.getProjectDetails(cardType);
        const data = response?.documents || [];
        setProjectData(data);
      } catch (error) {
        if (error) console.log(error);
        else console.log("Failed to fetch data");
      }
    };

    fetceProjects();
  }, [cardType]);

  const selectProjectType = (type: string) => {
    setCardType(type);
  };

  const openProjectCard = (project: Project) => {
    dispatch(updateIsOpen(project));
    setIsCardOpen(true);
  };

  const closeProjectCard = () => {
    dispatch(updateIsOpen(null));
    setIsCardOpen(false);
  };

  return (
    <section className="bg-background relative">
      <div className="max-w-7xl mx-auto px-4 py-24 h-auto overflow-hidden">
        <h2
          data-aos="fade-up"
          className="md:text-5xl text-4xl text-center font-bold mb-12 text-secondary"
          style={{ fontFamily: "Priestacy" }}
        >
          Project Section
        </h2>
        {/* Project Buttons */}
        <div className="grid grid-cols-2 gap-2 md:flex md:flex-wrap md:justify-center mb-10">
          {ProjectButtons.map((btn) => (
            <button
              onClick={() => selectProjectType(btn.name)}
              key={btn.id}
              className={`px-3 py-2 rounded-3xl bg-gray-800 text-sm hover:scale-105 transition-all cursor-none ${
                cardType === btn.name
                  ? "bg-primary text-black border font-medium"
                  : "border-none hover:bg-gray-700"
              }`}
            >
              {btn.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div
          data-aos="fade-up"
          className="grid lg:grid-cols-3 md:grid-cols-2 gap-8"
        >
          {projectData.map((project) => (
            <Card
              onClick={() => openProjectCard(project)}
              className="lg:p-8 p-6 hover:bg-gradient-to-b from-primary/30 to-transparent rounded-3xl shadow-none hover:border-primary border-gray-600 bg-gray-800 transition-all hover:text-primary text-white"
              key={project.$id}
            >
              <CardTitle className="text-2xl font-semibold p-0 md:text-start text-center">
                {project.name}
              </CardTitle>
              <CardDescription className="text-gray-300 p-0 md:text-start text-center line-clamp-3 overflow-ellipsis">
                {project.details}
              </CardDescription>
              {/* Tech Stack */}
              <ul className="flex gap-2 md:justify-start items-center justify-center flex-wrap">
                {project.techStack.slice(0, 4).map((stack) => (
                  <li
                    className="px-3 py-2 text-sm text-secondary bg-secondary/10 rounded-full hover:text-primary hover:bg-secondary/20 hover:scale-105 transition-all"
                    key={stack}
                  >
                    {stack}
                  </li>
                ))}
                {project.techStack.length > 4 && (
                  <button className="px-3 cursor-none py-2 text-sm text-secondary bg-secondary/10 rounded-full hover:text-primary hover:bg-secondary/20 hover:scale-105 transition-all">
                    + {project.techStack.length - 4} more
                  </button>
                )}
              </ul>
              <a rel="noopener noreferrer">
                <button className="flex cursor-none items-center justify-center gap-2 border-none w-full rounded-full px-3 py-2 bg-primary/20 hover:bg-primary/40 hover:scale-105 transition-all font-medium text-primary">
                  View Project
                  <GithubIcon />
                </button>
              </a>
            </Card>
          ))}
        </div>

        {/* Modal (Project Card) */}
        {isCardOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center md:p-0 p-4">
            <div
              onClick={closeProjectCard}
              className="absolute inset-0 bg-black/80 backdrop-blur-xs"
            />
            <div className="relative bg-background border border-gray-700 rounded-3xl w-full md:w-1/2 md:px-12 px-4 z-50 md:mt-0 mt-12 pt-6 md:pt-12 md:pb-6">
              <ProjectCard />
              <button
                onClick={closeProjectCard}
                className="absolute top-4 right-4 text-5xl hover:text-secondary h-auto hover:scale-110 transition-all"
              >
                &times;
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectSection;
