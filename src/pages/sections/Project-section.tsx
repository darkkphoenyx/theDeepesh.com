import { Eye, GithubIcon } from "lucide-react";
import { Card, CardDescription, CardTitle } from "../../components/ui/card";
import project from "../../appwrite/projectAPI";
import { useEffect, useState } from "react";

interface Project {
  $id: string;
  name: string;
  github: string;
  image: string;
  details: string;
  deployLink: string;
  techStack: string[];
  type: string;
}

const ProjectSection = () => {
  const [projectData, setProjectData] = useState<Project[]>([]);
  useEffect(() => {
    const fetceProjects = async () => {
      try {
        const response = await project.getAllProjectDetails();
        const data = response?.documents || [];
        setProjectData(data);
      } catch (error) {
        console.log("Failed to fetch projects :: ", error);
      }
    };

    fetceProjects();
  }, []);
  return (
    <section className="bg-background">
      <div className="max-w-7xl mx-auto px-4 pt-24 h-auto overflow-x-hidden">
        <div className="md:mb-16">
          <h1
            data-aos="fade-up"
            className="text-4xl text-secondary font-extrabold text-center mb-4"
            style={{ fontFamily: "Priestacy" }}
          >
            Project Section
          </h1>
          <h1
            data-aos="fade-up"
            data-aos-delay="50"
            className="text-secondary md:my-8 my-12 text-center"
          >
            Each project is a unique piece of development
          </h1>
        </div>
        {projectData.map((project) => (
          <div
            className="grid md:grid-cols-2 md:gap-8 md:space-y-20 space-y-8 border-b-2 md:border-none h-auto md:mb-0 mb-12 md:p-0 pb-4"
            dir={`${projectData.indexOf(project) % 2 === 0 ? "ltr" : "rtl"}`}
            key={project.$id}
          >
            <Card
              data-aos="fade-right"
              data-aos-delay="30"
              className="w-full md:h-[400px] h-[300px] p-0 rounded-4xl border-none shadow-none"
            >
              <img
                className="w-full h-full rounded-3xl object-center object-cover"
                src={project.image}
                alt={`${project.name} image`}
              />
            </Card>

            <Card
              data-aos="fade-left"
              className="bg-transparent md:h-[400px] h-[330px] border-none shadow-none text-primary flex justify-center items-center md:p-4 md:gap-8"
            >
              <CardTitle
                dir="ltr"
                className="text-3xl font-semibold p-0 text-center"
              >
                {project.name}
              </CardTitle>
              <CardDescription
                dir="ltr"
                className="text-primary p-0 text-center"
              >
                {project.details}
              </CardDescription>
              <ul
                dir="ltr"
                className="flex gap-4 items-center justify-center flex-wrap"
              >
                {project.techStack.map((stack) => (
                  <li
                    className="font-medium text-xl text-secondary hover:-translate-y-1 transition-all hover:text-accent"
                    key={stack}
                  >
                    {stack}
                  </li>
                ))}
              </ul>
              <div
                dir="ltr"
                className="flex justify-center md:gap-12 gap-8 w-full items-center"
              >
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="flex gap-2 text-xl md:text-3xl items-center cursor-none hover:scale-105 hover:text-secondary w-full">
                    GitHub <GithubIcon size={30} />
                  </button>
                </a>
                {project.deployLink && (
                  <a
                    href={project.deployLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="flex gap-2 text-xl md:text-3xl items-center cursor-none hover:scale-105 hover:text-secondary w-full">
                      Live Demo <Eye size={30} />
                    </button>
                  </a>
                )}
              </div>
            </Card>
          </div>
        ))}
      </div>
      <div className="h-1 bg-background"></div>
    </section>
  );
};

export default ProjectSection;

// const MyProjects = [
//   {
//     id: 1,
//     name: "BookWorm",
//     github: "https://github.com/darkkphoenyx/LMS",
//     image: "./ProjectImages/BookWorm.png",
//     details:
//       "BookWorm is a modern, feature-rich Learning Management System built with React, TypeScript, and Vite. This platform is designed to provide an intuitive and engaging learning experience for both educators and students.",
//     techStack: ["React", "Tailwind", "Typescript", "Dixie DB"],
//     deployLink: "https://bookwormlibrary.vercel.app/",
//   },
//   {
//     id: 2,
//     name: "Aktivferien Travels & Tours - Travel Web",
//     github: "https://github.com/darkkphoenyx/Travel-web",
//     image: "./ProjectImages/AktivferienNepal.png",
//     details:
//       "Aktivferien Travels & Tours is a user-friendly travel platform where you can discover destinations, access detailed travel info, and easily book your next adventure. It offers a seamless experience for planning trips, whether you're looking for relaxation or adventure.",
//     techStack: ["NextJS", "Tailwind", "Typescript"],
//     deployLink: "https://aktivferien-nepal.vercel.app/",
//   },
//   {
//     id: 3,
//     name: "Just Do It!",
//     github: "https://github.com/darkkphoenyx/Just_Do-It-TodoApp",
//     image: "./ProjectImages/JustDoIt.png",
//     details:
//       "Just Do It! is a full-stack task manager that lets you organize tasks, filter by status, and search efficiently. With offline support and a responsive design, it ensures seamless access and security for all your tasks.",
//     techStack: ["React", "Tailwind", "NodeJS", "Typescript", "PostgreSQL"],
//   },
//   {
//     id: 4,
//     name: "Foodey Restro",
//     github: "https://github.com/darkkphoenyx/Foodey-Your-Online-Restro",
//     image: "./ProjectImages/FoodeyRestro.png",
//     details:
//       "Aktivferien Travels & Tours is a user-friendly travel platform where you can discover destinations, access detailed travel info, and easily book your next adventure. It offers a seamless experience for planning trips, whether you're looking for relaxation or adventure.",
//     techStack: ["React", "Tailwind", "Typescript"],
//     deployLink: "https://foodey-restro.vercel.app/",
//   },
//   {
//     id: 5,
//     name: "Online Complaint System (OCS)",
//     github: "https://github.com/darkkphoenyx/OCS",
//     image: "./ProjectImages/OCS.png",
//     details:
//       "OCS is a full-stack web application designed to streamline the process of submitting and managing product-related complaints. It provides two interfaces: one for users to submit issues and another for admins to manage products and review complaints.",
//     techStack: ["PHP", "MySQL", "HTML", "Vanilla CSS"],
//   },
//   {
//     id: 6,
//     name: "Job Genie",
//     github: "https://github.com/darkkphoenyx/Foodey-Your-Online-Restro",
//     image:
//       "https://github.com/darkkphoenyx/JobGenie-Frontend/blob/master/gitassets/page1.png?raw=true",
//     details:
//       "Job Genie is a modern job search platform designed to connect job seekers with top companies across various industries. The homepage features a clean, user-friendly interface, showcasing a curated list of job openings from reputable companies.",
//     techStack: ["React", "Tailwind", "Typescript"],
//     deployLink: "https://jobgenie-website.vercel.app/",
//   },
// ];
