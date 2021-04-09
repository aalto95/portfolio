import React from "react";
import {NavLink, Route} from 'react-router-dom'
import s from './Navbar.module.css'

const Navbar = props => {
    return (
        <nav className={s.nav}>
            <NavLink to="/projects" className={s.item}>projects</NavLink>
            <NavLink to="/contacts" className={s.item}>contacts</NavLink>
            <NavLink to="/about" className={s.item}>about</NavLink>
            <NavLink to="/resume" className={s.item}>resume</NavLink>
            <a href="https://github.com/y2k01" className={s.item}>github</a>
        </nav>
    )
}

export default Navbar