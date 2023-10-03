import Project from "../components/Project";

import projectsData from "../data/projects";

export default function Home() {
  return (
    <main className="flex flex-col gap-12 p-6 pb-32">
      {!!projectsData.length &&
        projectsData.map((project, idx) => {
          return (
            <>
              <Project
                key={project.id}
                {...project}
              />

              {idx !== projectsData.length - 1 && (
                <div className="divider"></div>
              )}
            </>
          );
        })}
    </main>
  );
}
