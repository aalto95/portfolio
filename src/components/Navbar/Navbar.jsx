import React from "react";
import s from './Navbar.module.css'

const Navbar = props => {
    return (
        <nav className={s.nav}>
            <a href="#projects" className={s.item}>projects</a>
            <a href="#contacts" className={s.item}>contacts</a>
            <a href="#about" className={s.item}>about</a>
            <a href="/resume" className={s.item}>resume</a>
            <a href="https://github.com/y2k01" className={s.item}>github</a>
        </nav>
    )
}

export default Navbar