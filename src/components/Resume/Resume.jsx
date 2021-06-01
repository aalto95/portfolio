import React from "react";
import styles from './Resume.module.css'
import externalLinkIcon from './../../assets/external-link.png'
import downloadIcon from './../../assets/download.png'

const Resume = props => {
    return (
        <div className={styles.resumeWrapper}>
            <section className={styles.resumeSection}>
                <h2>Resume</h2>
                <div className={styles.linkBlock}>
                    <a href="" className={styles.link}>
                        <p className={styles.linkText}>View online</p>
                        <img src={externalLinkIcon} alt="" className={styles.linkIcon}/>
                    </a>
                    <a href="" className={styles.link}>
                        <p className={styles.linkText}>Download PDF</p>
                        <img src={downloadIcon} alt="" className={styles.linkIcon}/>
                    </a>
                </div>
            </section>
        </div>
    )
}

export default Resume