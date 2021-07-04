import React from "react";
import styles from './../Projects.module.scss'
import Technologies from "./Technologies/Technologies";

const Project = (props) => {
    let name = props.state.name
    let techs = props.state.technologies
    let img = props.state.img
    let info = props.state.info
    let source = props.state.source
    let address = props.state.address

    let techElements = techs.map(tech => <Technologies name={tech.name} id={tech.id} key={tech.id}/>)
    return (
        <section className={styles.projectSection}>
            <a href={address} className={styles.imageLink}>
                <img src={img} className={styles.projectImg} alt="project-img"/>
            </a>

            <div className={styles.projectContext}>
                <h1>{name}</h1>
                <p className={styles.projectInfo}>{info}</p>
                <ul className={styles.technologiesList}>
                    { techElements }
                </ul>
                <div className={styles.projectLinks}>
                    <a href={source} className={styles.projectLink}>SOURCE CODE</a>
                    <a href={address} className={styles.projectLink}>VIEW SITE</a>
                </div>
            </div>
        </section>
    )
}

export default Project
