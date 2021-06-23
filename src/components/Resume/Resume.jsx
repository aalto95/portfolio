import React from "react";
import styles from './Resume.module.css'
import externalLinkIcon from '../../assets/icons/external-link.png'
import downloadIcon from '../../assets/icons/download.png'
import resume from './resume.pdf'

const Resume = props => {
    return (
        <div className={styles.resumeWrapper}>
            <section className={styles.resumeSection}>
                <h2>Resume</h2>
                <div className={styles.linkBlock}>
                    <a href="https://drive.google.com/file/d/1OG-rULBRuMy8cq4a0rsxkfuJMQa-opNA/view" className={styles.link}>
                        <p className={styles.linkText}>View online</p>
                        <img src={externalLinkIcon} alt="" className={styles.linkIcon}/>
                    </a>
                    <a href={resume} download className={styles.link}>
                        <p className={styles.linkText}>Download PDF</p>
                        <img src={downloadIcon} alt="" className={styles.linkIcon}/>
                    </a>
                </div>
            </section>
        </div>
    )
}

export default Resume