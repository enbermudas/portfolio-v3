import Navbar from "./components/Navbar";
import Project from "./components/Project";

import projects from "./data/projects";

function App() {
  return (
    <div
      id="app"
      className="h-screen w-screen bg-base-100 text-accent-content antialiased"
    >
      <div className="relative isolate">
        <Navbar />

        <div className="container mx-auto mt-6 flex max-w-5xl flex-col gap-12 p-6">
          {!!projects.length &&
            projects.map((project) => {
              return (
                <Project
                  key={project.id}
                  {...project}
                />
              );
            })}
        </div>

        <svg
          id="patternId"
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 -z-10 h-full w-full opacity-20 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        >
          <defs>
            <pattern
              id="a"
              patternUnits="userSpaceOnUse"
              width="30"
              height="30"
              patternTransform="scale(7) rotate(0)"
            >
              <rect
                x="0"
                y="0"
                width="100%"
                height="100%"
              />
              <path
                d="M 10,-2.55e-7 V 20 Z M -1.1677362e-8,10 H 20 Z"
                stroke-width="0.15"
                fill="none"
                className="stroke-neutral"
              />
            </pattern>
          </defs>
          <rect
            width="800%"
            height="800%"
            transform="translate(0,0)"
            fill="url(#a)"
          />
        </svg>
      </div>
    </div>
  );
}

export default App;
