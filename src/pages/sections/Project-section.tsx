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
      <div className="max-w-7xl mx-auto px-4 py-24 h-auto overflow-hidden">
        <div className="md:mb-16">
          <h1
            data-aos="fade-up"
            className="md:text-5xl text-3xl text-secondary font-extrabold text-center mb-4"
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
        <div className="grid md:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <Card
              data-aos="fade-up"
              data-aos-delay={`${index * 50}`}
              className="p-8 hover:bg-gradient-to-b from-primary/30 to-transparent rounded-3xl shadow-none hover:border-primary border-gray-600 bg-gray-800 transition-all hover:text-primary text-white"
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
                  <button className="px-3 py-2 text-sm text-secondary bg-secondary/10 rounded-full hover:text-primary hover:bg-secondary/20 hover:scale-105 transition-all">
                    + {project.techStack.length - 4} more
                  </button>
                )}
              </ul>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="flex items-center justify-center gap-2 border-none w-full rounded-full px-3 py-2 bg-primary/20 hover:bg-primary/40 hover:scale-105 transition-all font-medium text-primary">
                  View Project
                  <GithubIcon />
                </button>
              </a>
            </Card>
          ))}
        </div>
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
