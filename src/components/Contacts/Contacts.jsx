import React from "react";
import styles from './Contacts.module.scss'
import LinkedInIcon from "./LinkedInIcon";
import MailIcon from "./MailIcon";
import {CopyToClipboard} from "react-copy-to-clipboard/lib/Component";

const Contacts = props => {
    return (
        <div id='contacts' className={styles.contactWrapper}>
            <section className={styles.contactSection}>
                <h1>Get in touch</h1>
                <div className={styles.infoField}>
                    <a href="https://www.linkedin.com/in/stanislav-pavlov-9776ba206/">
                        <p>LinkedIn</p>
                        <LinkedInIcon />
                    </a>
                </div>
                <div className={styles.infoField}>
                    <a href="mailto:scotlandfjord@protonmail.com">
                        <p id='mail'>scotlandfjord@protonmail.com</p>
                        <MailIcon />
                    </a>
                </div>
                <div className={styles.infoField}>
                    <CopyToClipboard className={styles.copyButton} text='scotlandfjord@protonmail.com'>
                        <p>COPY EMAIL TO CLIPBOARD</p>
                    </CopyToClipboard>
                </div>
            </section>
        </div>
    )
}
console.log()

export default Contacts