import Project from "../components/Project";

import projects from "../data/projects";

export default function Home() {
  return (
    !!projects.length &&
    projects.map((project) => {
      return (
        <Project
          key={project.id}
          {...project}
        />
      );
    })
  );
}
