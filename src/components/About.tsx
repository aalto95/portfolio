import React from "react";

const About: React.FC = () => {
  return (
    <div id="about">
      <section
        w-display="flex"
        w-justify="center"
        w-items="center"
        w-flex="col"
        w-px="4"
      >
        <h1 className="text-3xl font-bold mb-4">About Me</h1>
        <div
          w-display="flex"
          w-flex="start col"
          w-items="start"
          w-w="full sm:4/6"
        >
          <p className="">Hello there, my name is Pavlov Stanislav.</p>
          <p className="">
            Designing and creating responsive websites is some of the most
            fulfilling work I do, and I always look forward to starting a new
            project.
          </p>
          <p className="">
            In my free time I enjoy learning new technologies, playing computer
            games and helping people online with their web development problems.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
