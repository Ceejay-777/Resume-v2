import Skillbar from "./Skillbar.jsx";

const Project = ({ project, isEven }) => {
  const { name, image, info, skills, link } = project;

  return (
    <div
      className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-12 items-center justify-between`}
    >
      <a
        href={link ? link : undefined}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative w-full md:w-[55%] aspect-video rounded-2xl overflow-hidden border border-accent/10 dark:border-white/10 bg-secondary/30 shadow-2xl transition-transform duration-500 hover:-translate-y-2  project"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-sec/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </a>

      <ProjectInfo name={name} info={info} skills={skills} link={link} />
    </div>
  );
};

export default Project;

const ProjectInfo = ({ name, info, skills, link }) => {
  return (
    <div className="w-full md:w-[40%] flex flex-col gap-6">
      <div className="space-y-2">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-accent dark:text-white">
          {name}
        </h2>
        <div className="h-1 w-12 bg-sec rounded-full" />
      </div>

      <p className="text-base md:text-lg text-accent/70 dark:text-dark-accent/80 leading-relaxed text-pretty">
        {info}
      </p>

      <Skillbar skills={skills} link={link} />
    </div>
  );
};
