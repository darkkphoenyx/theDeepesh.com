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
        <CardTitle dir="ltr" className="text-3xl font-semibold p-0 text-center">
          {project.name}
        </CardTitle>
        <CardDescription dir="ltr" className="text-primary p-0 text-center">
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
          <a href={project.github} target="_blank" rel="noopener noreferrer">
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
</div>;
