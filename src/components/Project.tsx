import React from "react";
import { ProjectModel } from "../models/project.model";
import LinkButton from "./LinkButton";

const Project: React.FC<{ project: ProjectModel }> = ({ project }) => {
  return (
    <section
      w-my="20"
      w-mx="md:20"
      w-display="flex xl:grid"
      w-justify="center"
      w-items="center"
      w-flex="col"
      w-grid="cols-12"
    >
      <a
        w-mb="4"
        w-grid="col-span-4"
        w-display="flex"
        w-justify="center"
        w-transform="transform duration-500 hover:-translate-y-5 focus:-translate-y-5"
        w-outline="none"
        w-mx="4"
        href={project.address}
      >
        <img
          w-w="80 sm:90 md:100"
          w-min-w="40"
          w-h="100 sm:120 md:140"
          w-border="rounded-xl"
          w-object="cover"
          src={project.img}
          alt="project-img"
        />
      </a>
      <div
        w-display="flex"
        w-flex="col"
        w-align="center"
        className=" col-span-8"
      >
        <h1 w-text="2xl sm:3xl md:4xl center" w-font="bold">
          {project.name}
        </h1>
        <p w-mx="sm:20" w-text="lg sm:xl md:2xl" w-m="4">
          {project.info}
        </p>
        <ul w-display="flex" w-flex="wrap" w-justify="center" w-mx="sm:20">
          {project.technologies.map((tech) => (
            <li
              key={tech.name}
              w-display="flex"
              w-justify="center"
              w-m="1"
              w-p="2"
              w-list="none"
              w-bg="gray-100 dark:gray-800"
              w-border="rounded-xl"
            >
              {tech.name}
            </li>
          ))}
        </ul>
        <div w-display="flex" w-justify="center">
          <LinkButton href={project.source}>SOURCE CODE</LinkButton>
          <LinkButton href={project.address}>VIEW SITE</LinkButton>
        </div>
      </div>
    </section>
  );
};

export default Project;
