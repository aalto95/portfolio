import React from "react";
import s from './Projects.module.css'
import Project from "./Project/Project";

const Projects = (props) => {
    return (
        <div>
            <Project
                state={props.projects[0]}
            />
            <Project
                state={props.projects[1]}
            />
        </div>
    )
}

export default Projects