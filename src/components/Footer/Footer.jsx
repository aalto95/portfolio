import styles from './Footer.module.css'
import githubIcon from "../../assets/icons/github.png";

const Footer = props => {
    return (
        <div className={styles.footer}>
            <a className={styles.github} href="https://github.com/y2k01">
                <h2>Stas Pavlov</h2>
                <img src={githubIcon} alt="" className={styles.githubIcon}/>
            </a>
        </div>
    )
}

export default Footer