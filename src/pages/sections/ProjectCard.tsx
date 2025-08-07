import { CpuIcon, Eye, GithubIcon, Info, Link } from "lucide-react";
import { Card, CardDescription, CardTitle } from "../../components/ui/card";
import { useSelector } from "react-redux";

const ProjectCard = () => {
  const cardDetails = useSelector((state: any) => state.project);
  return (
    <>
      <div key={cardDetails.$id}>
        <span
          className={`uppercase font-medium md:text-sm text-xs px-3 py-1 rounded-full ${
            cardDetails.type === "Frontend" &&
            "text-purple-600  bg-purple-700/20"
          } ${
            cardDetails.type === "FullStack" &&
            "text-green-600  bg-green-700/20"
          } ${
            cardDetails.type === "Others" && "text-yellow-600  bg-yellow-700/20"
          }`}
        >
          {cardDetails.type}
        </span>

        <Card className="bg-transparent border-none shadow-none text-primary md:gap-4 gap-3 mt-1 m-0">
          <CardTitle
            dir="ltr"
            className="lg:text-5xl md:text-4xl text-2xl md:text-start text-center font-medium p-0"
          >
            {cardDetails.name}
          </CardTitle>
          <CardDescription
            dir="ltr"
            className="text-white p-0 md:text-start text-center"
          >
            {cardDetails.details}
          </CardDescription>
          <div className="grid lg:grid-cols-2 mt-4 gap-6 w-full">
            <Card className=" w-full p-0 rounded-3xl border-none shadow-none m-0">
              <img
                className="w-full h-full rounded-2xl object-center object-cover"
                src={cardDetails.image}
                alt={`${cardDetails.name} image`}
              />
            </Card>
            <div className="w-full flex flex-col gap-4">
              <Card className="hidden md:block space-y-4 rounded-2xl p-4 bg-gray-800 gap-0 w-full">
                <span className="flex gap-2 items-center md:text-xl font-medium text-primary">
                  <CpuIcon
                    className="block md:hidden p-1.5 bg-primary/20 rounded-lg"
                    size={16}
                  />
                  <CpuIcon
                    className="hidden md:block p-1.5 bg-primary/20 rounded-lg"
                    size={32}
                  />
                  Technologies Used
                </span>
                <ul
                  dir="ltr"
                  className="flex md:items-start items-center gap-2 flex-wrap"
                >
                  {cardDetails.techStack.map((stack: string) => (
                    <li
                      className="bg-gray-700 px-3 py-1 rounded-full text-secondary hover:scale-105 transition-all hover:text-white md:text-sm text-xs"
                      key={stack}
                    >
                      {stack}
                    </li>
                  ))}
                </ul>
              </Card>
              <Card className="hidden lg:block bg-gray-800 text-white border-none p-4 gap-3">
                <CardTitle className="flex gap-2 items-center md:text-xl font-medium text-primary mb-2">
                  <Info className="p-1.5 bg-primary/20 rounded-lg" size={30} />
                  Project Details
                </CardTitle>
                <div className="flex justify-between md:text-sm text-xs border-b border-gray-500 pb-1 text-gray-200">
                  <p>Category</p>
                  <p>{cardDetails.type}</p>
                </div>
                <div className="flex justify-between text-sm border-b border-gray-500 pb-1 text-gray-200">
                  <p>Technologies</p>
                  <p>{cardDetails.techStack.length}</p>
                </div>
              </Card>
              <div
                dir="ltr"
                className="rounded-2xl p-4 bg-gray-800 md:gap-12 gap-8 w-full"
              >
                <CardTitle className="flex gap-2 items-center md:justify-start justify-center md:text-xl font-medium text-primary">
                  <Link className="p-1.5 bg-primary/20 rounded-lg" size={30} />
                  Project Links
                </CardTitle>
                <div
                  className={`grid ${
                    cardDetails.deployLink ? "grid-cols-2" : "grid-cols-1"
                  } justify-between mt-4 w-full gap-2`}
                >
                  <a
                    href={cardDetails.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className=" py-1 bg-gray-700 rounded-full flex gap-2 md:text-lg text-sm items-center justify-center cursor-none hover:scale-105 hover:text-secondary w-full h-full">
                      GitHub{" "}
                      <GithubIcon size={20} className="hidden md:block" />
                      <GithubIcon size={16} className="block md:hidden" />
                    </button>
                  </a>
                  {cardDetails.deployLink && (
                    <a
                      href={cardDetails.deployLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="py-1 bg-gray-700 rounded-full flex gap-2 md:text-lg text-sm items-center justify-center cursor-none hover:scale-105 hover:text-secondary w-full">
                        Live Demo <Eye size={20} className="hidden md:block" />
                        <Eye size={16} className="block md:hidden" />
                      </button>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default ProjectCard;
