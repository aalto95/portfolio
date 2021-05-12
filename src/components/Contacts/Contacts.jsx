import React from "react";
import {NavLink} from 'react-router-dom'
import s from './Contacts.module.scss'

const Contacts = props => {
    return (
        <section id='contacts' className={s.contactSection}>
            <h1>Get in touch</h1>
            <div className={s.infoField}>
                <a href="">
                    <p>LinkedIn</p>
                    <img className={s.icon} src="https://www.flaticon.com/svg/vstatic/svg/1384/1384030.svg?token=exp=1620786721~hmac=031f6c6528eb51f8d92f5684b6d871aa" alt=""/>
                </a>
            </div>
            <div className={s.infoField}>
                <a href="mailto:scotlandfjord@protonmail.com">
                    <p>scotlandfjord@protonmail.com</p>
                    <img className={s.icon} src="https://www.flaticon.com/svg/vstatic/svg/3616/3616595.svg?token=exp=1620784123~hmac=1794c5bc975505e0d1e339b99e533cf7" alt=""/>
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