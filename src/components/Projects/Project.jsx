import React from "react";

const Project = ({ name, technologies, img, info, source, address }) => {
  return (
    <section className="flex justify-center items-center flex-col xl:grid xl:grid-cols-12 grid:content-center grid:items-center grid:justify-center my-20 md:mx-20">
      <a href={address} className="flex justify-center mb-4 col-span-4">
        <img
          src={img}
          className="w-90vw h-500px usm:w-300px rounded-xl transition duration-500 object-cover transform hover:-translate-y-5"
          alt="project-img"
        />
      </a>
      <div className="flex flex-col items-center col-span-8">
        <h1 className="text-3xl font-bold">{name}</h1>
        <p className="sm:mx-20 text-xl sm:text-2xl m-8">{info}</p>
        <ul className="flex flex-wrap justify-center sm:mx-20">
          {technologies.map((tech) => (
            <li
              key={tech.name}
              className="flex justify-center m-1 list-none p-2 bg-gray-800 rounded-xl"
            >
              {tech.name}
            </li>
          ))}
        </ul>
        <div className="flex justify-center">
          <a
            href={source}
            className="p-4 m-2 border-2 border-gray-800 transition ease-in-out duration-500 hover:bg-white hover:text-black hover:border-2 hover:border-white"
          >
            SOURCE CODE
          </a>
          <a
            href={address}
            className="p-4 m-2 border-2 border-gray-800 transition ease-in-out duration-500 hover:bg-white hover:text-black hover:border-2 hover:border-white"
          >
            VIEW SITE
          </a>
        </div>
      </div>
    </section>
  );
};

export default Project;
