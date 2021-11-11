import React from "react";
import externalLinkIcon from '../assets/icons/external-link.png'
import downloadIcon from '../assets/icons/download.png'
import resume from '../assets/resume.pdf'

const Resume = props => {
    return (
        <div className={'flex justify-center items-center m-10'} id="resume">
            <section className={'flex-col w-5/6 justify-center items-center border-t-2 border-solid border-darkgray'}>
                <h2 className={'mb-8 text-center mt-10'}>Resume</h2>
                <div className={'flex justify-center items-center'}>
                    <a href="https://drive.google.com/file/d/1KBTidJzFg76S3ny3Qns9VLgSIrOiSc_3/view?usp=sharing" className={'flex justify-center items-center border-2 border-solid border-darkgray m-0.5 p-2'}>
                        <p>View online</p>
                        <img src={externalLinkIcon} alt="linkIcon" className={'w-8'}/>
                    </a>
                    <a href={resume} download className={'flex justify-center items-center border-2 border-solid border-darkgray m-0.5 p-2'}>
                        <p>Download PDF</p>
                        <img src={downloadIcon} alt="download-icon" className={'w-8'}/>
                    </a>
                </div>
            </section>
        </div>
    )
}

export default Resume
