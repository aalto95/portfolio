import React from "react";
import {NavLink} from 'react-router-dom'
import s from './Contacts.module.scss'
import LinkedInIcon from "./LinkedInIcon";
import MailIcon from "./MailIcon";

const Contacts = props => {
    return (
        <section id='contacts' className={s.contactSection}>
            <h1>Get in touch</h1>
            <div className={s.infoField}>
                <a href="">
                    <p>LinkedIn</p>
                    <LinkedInIcon />
                </a>
            </div>
            <div className={s.infoField}>
                <a href="mailto:scotlandfjord@protonmail.com">
                    <p>scotlandfjord@protonmail.com</p>
                    <MailIcon />
                </a>
            </div>
            <div className={s.infoField}>
                <a href="">
                    <p>COPY</p>
                </a>
            </div>
        </section>
    )
}

export default Contacts