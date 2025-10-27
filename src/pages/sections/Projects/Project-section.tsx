import { useEffect, useState } from "react";
import type { Project } from "../../../interfaces/projectCrad.interface";
import { useDispatch } from "react-redux";
import project from "../../../appwrite/APIs";
import { updateIsOpen } from "../../../redux/projectSlice";
import { Card, CardDescription, CardTitle } from "../../../components/ui/card";
import { ArrowRight, GithubIcon } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";

import "../../../../node_modules/swiper/swiper.css";

import { Pagination, Autoplay } from "swiper/modules";
import { Dialog, DialogContent } from "../../../components/ui/dialog";

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
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [cardType, setCardType] = useState<string>(ProjectButtons[0].name);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetceProjects = async () => {
      try {
        const response = await project.getProjectDetails(cardType);
        const data: any = response?.documents || [];
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
    setSelectedProject(project);
    setIsDialogOpen(true);
  };

  const closeProjectCard = () => {
    dispatch(updateIsOpen(null));
    setSelectedProject(null);
    setIsDialogOpen(false);
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

        {/* Projects Grid (desktop) */}
        <div
          data-aos="fade-up"
          className="lg:grid-cols-3 md:grid-cols-2 gap-8 hidden md:grid"
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

        {/* Modal Dialog (single dialog) */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="cursor-default">
            {selectedProject ? (
              <>
                <h2 className="text-xl font-semibold mb-2">
                  {selectedProject.name}
                </h2>
                <p className="text-gray-300 mb-4">{selectedProject.details}</p>
                <ul className="flex gap-2 flex-wrap">
                  {selectedProject.techStack.map((stack) => (
                    <li
                      key={stack}
                      className="px-3 py-2 text-sm text-secondary bg-secondary/10 rounded-full"
                    >
                      {stack}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={closeProjectCard}
                  className="mt-4 bg-primary px-4 py-2 rounded text-black"
                >
                  Close
                </button>
              </>
            ) : (
              <p>Loading...</p>
            )}
          </DialogContent>
        </Dialog>

        {/* mobile swiper */}
        <div className="block md:hidden">
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination, Autoplay]}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            loop={true}
            spaceBetween={30}
            className="mySwiper"
          >
            {projectData.map((project) => (
              <SwiperSlide key={project.$id}>
                <Card
                  onClick={() => openProjectCard(project)}
                  className="lg:p-8 p-6 hover:bg-gradient-to-b from-primary/30 to-transparent rounded-3xl shadow-none hover:border-primary border-gray-600 bg-gray-800 transition-all hover:text-primary text-white"
                >
                  <CardTitle className="text-2xl font-semibold p-0 md:text-start text-center">
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
              </SwiperSlide>
            ))}
            <p className="mt-1 text-center flex gap-2 justify-center items-center">
              Swipe <ArrowRight />
            </p>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
