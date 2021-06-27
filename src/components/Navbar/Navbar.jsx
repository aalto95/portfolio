import React from "react";
import styles from './Navbar.module.css'

const Navbar = props => {
    return (
        <nav className={styles.nav}>
            <a href="#projects" className={styles.item}>projects</a>
            <a href="#contacts" className={styles.item}>contacts</a>
            <a href="#about" className={styles.item}>about</a>
            <a href="#resume" className={styles.item}>resume</a>
            <a href="https://github.com/y2k01" className={styles.item}>github</a>
        </nav>
    )
}

export default Navbar