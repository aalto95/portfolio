import React from "react";
import s from './../Projects.module.scss'
import Technologies from "./Technologies/Technologies";

const Project = (props) => {
    let techElements = props.techs.map(tech => <Technologies name={tech.name} id={tech.id}/>)
    return (
        <section className={s.projectSection}>
            <img src={props.img} className={s.projectImg}/>
            <div className={s.projectContext}>
                <p className={s.projectInfo}>{props.info}</p>
                <ul className={s.technologiesList}>
                    { techElements }
                </ul>
                <div className={s.projectLinks}>
                    <a href="" className={s.projectLink}>SOURCE CODE</a>
                    <a href="" className={s.projectLink}>VIEW SITE</a>
                </div>
            </div>
        </section>
    )
}

export default Project