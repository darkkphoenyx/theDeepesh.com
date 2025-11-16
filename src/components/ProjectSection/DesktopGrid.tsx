import { GithubIcon } from "lucide-react";
import type { Project } from "../../interfaces/projectCrad.interface";
import { Card, CardDescription, CardTitle } from "../ui/card";
import ProjectCardLoader from "./ProjectCardLoader";

const DesktopGrid = ({
  page,
  loading,
  projectData,
  openProjectCard,
}: {
  page: number;
  loading: boolean;
  projectData: Project[];
  openProjectCard: (project: Project) => void;
}) => {
  const ITEMS_PER_PAGE = 6;
  return (
    <>
      {loading ? (
        <ProjectCardLoader cards={6} />
      ) : (
        <div className="lg:grid-cols-3 md:grid-cols-2 gap-8 hidden md:grid">
          {projectData
            .slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE)
            .map((project) => (
              <Card
                onClick={() => openProjectCard(project)}
                className="lg:p-8 p-6 hover:bg-gradient-to-b from-primary/30 to-transparent rounded-3xl shadow-none hover:border-primary border-gray-600 bg-gray-800 transition-all hover:text-primary text-white"
                key={project.$id}
              >
                <CardTitle className="text-2xl font-semibold p-0 md:text-start text-center text-secondary">
                  {project.name}
                </CardTitle>
                <CardDescription className="text-gray-300 p-0 md:text-start text-center line-clamp-3 overflow-ellipsis">
                  {project.details}
                </CardDescription>

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

                <button className="flex cursor-none items-center justify-center gap-2 border-none w-full rounded-full px-3 py-2 bg-primary/20 hover:bg-primary/40 hover:scale-105 transition-all font-medium text-primary">
                  View Project
                  <GithubIcon />
                </button>
              </Card>
            ))}
        </div>
      )}
    </>
  );
};

export default DesktopGrid;
