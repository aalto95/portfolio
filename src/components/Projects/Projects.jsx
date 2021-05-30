import React from "react";
import Project from "./Project/Project";

const Projects = (props) => {
    return (
        <div>
            <Project state={props.projects[0]}/>
            <Project state={props.projects[1]}/>
            <Project state={props.projects[2]}/>
        </div>
    )
}

export default Projects