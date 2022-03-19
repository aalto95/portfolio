import React from "react";
import Project from "./Project/Project";

const Projects = (props) => {
    return (
        <>
            {props.projects.map((project) => <Project key={project.id} state={project}/>)}
        </>
    )
}

export default Projects
