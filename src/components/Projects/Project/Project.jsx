import React from "react";
import s from './../Projects.module.scss'
import Technologies from "./Technologies/Technologies";

const Project = (props) => {
    let techs = props.state.technologies
    let img = props.state.img
    let info = props.state.info
    let source = props.state.source
    let address = props.state.address

    let techElements = techs.map(tech => <Technologies name={tech.name} id={tech.id}/>)
    return (
        <section className={s.projectSection}>
            <img src={img} className={s.projectImg}/>
            <div className={s.projectContext}>
                <p className={s.projectInfo}>{info}</p>
                <ul className={s.technologiesList}>
                    { techElements }
                </ul>
                <div className={s.projectLinks}>
                    <a href={source} className={s.projectLink}>SOURCE CODE</a>
                    <a href={address} className={s.projectLink}>VIEW SITE</a>
                </div>
            </div>
        </section>
    )
}

export default Project