import React, {createRef, useRef} from "react";
import s from './Contacts.module.scss'
import LinkedInIcon from "./LinkedInIcon";
import MailIcon from "./MailIcon";
import {CopyToClipboard} from "react-copy-to-clipboard/lib/Component";

let getParagraphValue = () => {
    return document.getElementById('mail')
}
const Contacts = props => {
    return (
        <section id='contacts' className={s.contactSection}>
            <h1>Get in touch</h1>
            <div className={s.infoField}>
                <a href="https://www.linkedin.com/in/stanislav-pavlov-9776ba206/">
                    <p>LinkedIn</p>
                    <LinkedInIcon />
                </a>
            </div>
            <div className={s.infoField}>
                <a href="mailto:scotlandfjord@protonmail.com">
                    <p id='mail'>scotlandfjord@protonmail.com</p>
                    <MailIcon />
                </a>
            </div>
            <div className={s.infoField}>
                <CopyToClipboard className={s.copyButton} text='scotlandfjord@protonmail.com'>
                    <p>COPY</p>
                </CopyToClipboard>
            </div>
        </section>
    )
}
console.log()

export default Contacts