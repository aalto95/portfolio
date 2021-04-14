import React from "react";
import s from './Projects.module.css'
import Project from "./Project/Project";

const Projects = (props) => {
    return (
        <div>
            <Project
                techs={props.state.technologies.first}
                name={props.state.projects.first.name}
                img={props.state.projects.first.img}
                info={props.state.projects.first.info}
            />
            <Project
                techs={props.state.technologies.second}
                name={props.state.projects.second.name}
                img={props.state.projects.second.img}
                info={props.state.projects.second.info}
            />
        </div>
    )
}

export default Projects