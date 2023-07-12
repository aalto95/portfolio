import React from "react";
import { ProjectModel } from "../models/project.model";

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
          <a
            w-p="4"
            w-m="2"
            w-border="2 gray-800 hover:gray-800 focus:gray-800 dark:hover:white dark:focus:white"
            w-transform="transition ease-in-out duration-500"
            w-bg="hover:gray-800 focus:gray-800 dark:hover:white dark:focus:white"
            w-text="dark:white center hover:white focus:white dark:hover:black dark:focus:black"
            w-outline="none"
            href={project.source}
            onClick={(e) => e.currentTarget.blur()}
          >
            SOURCE CODE
          </a>
          <a
            w-p="4"
            w-m="2"
            w-border="2 gray-800 hover:gray-800 focus:gray-800 dark:hover:white dark:focus:white"
            w-transform="transition ease-in-out duration-500"
            w-bg="hover:gray-800 focus:gray-800 dark:hover:white dark:focus:white"
            w-text="dark:white center hover:white focus:white dark:hover:black dark:focus:black"
            w-outline="none"
            href={project.address}
            onClick={(e) => e.currentTarget.blur()}
          >
            VIEW SITE
          </a>
        </div>
      </div>
    </section>
  );
};

export default Project;
