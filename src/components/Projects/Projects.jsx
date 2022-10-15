import React from "react";
import Project from "./Project/Project";
import { projects } from "../../raw-data/projects.json";

const Projects = () => {
  return (
    <>
      {projects.map((project) => (
        <Project key={project.id} state={project} />
      ))}
    </>
  );
};

export default Projects;
