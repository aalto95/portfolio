import React from "react";

const About = props => {
    return (
        <div id='about'>
            <section className={'flex justify-center flex-col items-center flex-column pr-10 pl-10'} >
                <h1>About Me</h1>
                <div className={'m-8'}>
                    <p className={'m-4'}>Hello there, my name is Pavlov Stanislav.</p>
                    <p className={'m-4'}>Designing and creating responsive websites is some of the most fulfilling work I do, and I always look forward to starting a new project.</p>
                    <p className={'m-4'}>When I'm not coding I enjoy taking walks, playing video games, and helping people online with their web development problems.</p>
                </div>
            </section>
        </div>
    )
}

export default About