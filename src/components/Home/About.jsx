import React from "react";
import s from './About.module.scss'

const About = props => {
    return (
        <div className={s.main} id='about'>
            <h1>About Me</h1>
            <p>My name is Pavlov Stanislav. I am a student in NEFU</p>
        </div>
    )
}

export default About