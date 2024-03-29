import React from "react";
import externalLinkIcon from "../assets/icons/external-link.png";
import LinkButton from "./LinkButton";

const Resume: React.FC = () => {
  return (
    <div
      w-display="flex"
      w-justify="center"
      w-items="center"
      w-my="10"
      id="resume"
    >
      <section
        w-items="center"
        w-justify="center"
        w-w="full md:4/6"
        w-mx="4"
        w-flex="col"
        w-border="t-2 solid darkgray"
      >
        <h2 w-mb="8" w-mt="10" w-text="3xl center" w-font="bold">
          Resume
        </h2>
        <div className="flex justify-center items-center ">
          <LinkButton
            href={
              "https://docs.google.com/document/d/1DkuV3yF5Khfrxrt7gbNMhiPgxc-cz9UvSluiw-9vI7E/edit?usp=sharing"
            }
          >
            View online
          </LinkButton>
        </div>
      </section>
    </div>
  );
};

export default Resume;
