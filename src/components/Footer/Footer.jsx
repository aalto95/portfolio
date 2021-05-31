import styles from './Footer.module.css'
import GithubIcon from "./GithubIcon";

const Footer = props => {
    return (
        <div className={styles.footer}>
            <a className={styles.github} href="https://github.com/y2k01">
                <h1>Stas Pavlov</h1>
                <GithubIcon />
            </a>
        </div>
    )
}

export default Footer