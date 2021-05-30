import React from "react";
import s from './About.module.scss'

const About = props => {
    return (
        <div className={s.main} id='about'>
            <h1>About Me</h1>
            <p>Hello there, my name is Pavlov Stanislav.</p>
            <p>Designing and creating responsive websites is some of the most fulfilling work I do, and I always look forward to starting a new project.</p>
        </div>
    )
}

export default About