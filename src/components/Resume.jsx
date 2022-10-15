import React from "react";
import externalLinkIcon from "../assets/icons/external-link.png";

const Resume = () => {
  return (
    <div className="flex justify-center items-center m-10" id="resume">
      <section className="flex-col w-5/6 justify-center items-center border-t-2 border-solid border-darkgray">
        <h2 className="mb-8 text-center mt-10 text-3xl font-bold">Resume</h2>
        <div className="flex justify-center items-center">
          <a
            href="https://docs.google.com/document/d/1DkuV3yF5Khfrxrt7gbNMhiPgxc-cz9UvSluiw-9vI7E/edit?usp=sharing"
            className="flex justify-center items-center border-2 border-solid border-darkgray m-0.5 p-2"
          >
            <p>View online</p>
            <img src={externalLinkIcon} alt="linkIcon" className="w-8" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Resume;
