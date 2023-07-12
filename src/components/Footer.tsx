import React from "react";
import githubIcon from "../assets/icons/github.png";

const Footer: React.FC = () => {
  return (
    <div
      w-display="flex"
      w-justify="center"
      w-items="center"
      w-h="32"
      w-bg="black"
      className="bg-gradient-to-bl from-blue-400 to-orange-500 background-animate"
    >
      <a
        className="flex items-center px-4 h-24"
        w-border="focus:white focus:2 focus:solid rounded-xl"
        href="https://github.com/aaltoo"
      >
        <h3 className="text-xl font-bold mr-6 text-white dark:text-white">
          Stanislav Pavlov
        </h3>
        <img src={githubIcon} alt="github-icon" className="w-16" />
      </a>
    </div>
  );
};

export default Footer;
