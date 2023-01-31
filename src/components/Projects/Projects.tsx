import React from "react";
import Project from "./Project";
import { projects } from "../../data/projects.json";
import { ProjectModel } from "../../models/project.model";

const Projects: React.FC = () => {
  return (
    <>
      {projects.map((project: ProjectModel) => (
        <Project key={project.id} project={project} />
      ))}
    </>
  );
};

export default Projects;
