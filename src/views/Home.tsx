import React from "react";

import Project from "../components/Project";

import projectsData from "../data/projects";

export default function Home() {
  return (
    <main className="mx-auto flex max-w-screen-lg flex-col gap-12 p-6 pb-32">
      {!!projectsData.length &&
        projectsData.map((project, idx) => {
          return (
            <React.Fragment key={project.id}>
              <Project {...project} />

              {idx !== projectsData.length - 1 && (
                <div className="divider"></div>
              )}
            </React.Fragment>
          );
        })}
    </main>
  );
}
