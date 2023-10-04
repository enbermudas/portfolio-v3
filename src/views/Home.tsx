import React from "react";
import { motion } from "framer-motion";

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
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "50%" }}
                  transition={{ type: "spring", stiffness: 100, delay: 0.05 }}
                  className="divider self-center"
                ></motion.div>
              )}
            </React.Fragment>
          );
        })}
    </main>
  );
}
