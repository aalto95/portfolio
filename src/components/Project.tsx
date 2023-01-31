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
        w-w="80"
        w-h="140"
        w-mb="4"
        w-grid="col-span-4"
        w-display="flex"
        w-justify="center"
        w-transform="transform duration-500 hover:-translate-y-5 focus:-translate-y-5"
        w-outline="none"
        href={project.address}
      >
        <img
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
        <h1 w-text="3xl center" w-font="bold">
          {project.name}
        </h1>
        <p w-mx="sm:20" w-text="xl sm:2xl" w-m="8">
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
              w-bg="gray-800"
              w-border="rounded-xl"
            >
              {tech.name}
            </li>
          ))}
        </ul>
        <div w-display="flex" w-justify="center">
          <a
            href={project.source}
            w-p="4"
            w-m="2"
            w-border="2 gray-800 hover:white focus:white"
            w-transform="transition ease-in-out duration-500 "
            w-bg="hover:white focus:white"
            w-text="white hover:black focus:black"
            w-outline="none"
          >
            SOURCE CODE
          </a>
          <a
            href={project.address}
            w-p="4"
            w-m="2"
            w-border="2 gray-800 hover:white focus:white"
            w-transform="transition ease-in-out duration-500 "
            w-bg="hover:white focus:white"
            w-text="white hover:black focus:black"
            w-outline="none"
          >
            VIEW SITE
          </a>
        </div>
      </div>
    </section>
  );
};

export default Project;
