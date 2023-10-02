import Project from "../components/Project";

import projectsData from "../data/projects";

export default function Home() {
  return (
    <div className="flex flex-col gap-12 p-6">
      {!!projectsData.length &&
        projectsData.map((project) => {
          return (
            <Project
              key={project.id}
              {...project}
            />
          );
        })}
    </div>
  );
}
