import React from "react";
import styles from './About.module.scss'

const About = props => {
    return (
        <section className={styles.aboutMeWrapper} id='about'>
            <div className={styles.aboutMeSection} >
                <h1>About Me</h1>
                <div className={styles.textWrapper}>
                    <p>Hello there, my name is Pavlov Stanislav.</p>
                    <p>Designing and creating responsive websites is some of the most fulfilling work I do, and I always look forward to starting a new project.</p>
                    <p>When I'm not coding I enjoy boxing, playing video games, and helping people online with their web development problems.</p>
                </div>
            </div>
        </section>
    )
}

export default About