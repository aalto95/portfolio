import React from "react";
import Project from "./Project";
import { projects } from "../../data/projects.json";

const Projects = () => {
  return (
    <>
      {projects.map((project) => (
        <Project key={project.id} {...project} />
      ))}
    </>
  );
};

export default Projects;
