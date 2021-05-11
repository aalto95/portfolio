import React from "react";
import Projects from "./Projects";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        projects: state.projects
    }
}

const ProjectsContainer = connect(mapStateToProps) (Projects)
export default ProjectsContainer