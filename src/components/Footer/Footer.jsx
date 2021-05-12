import s from './Footer.module.scss'
import GithubIcon from "./GithubIcon";

const Footer = props => {
    return (
        <div className={s.footer}>
            <a className={s.github} href="https://github.com/y2k01">
                <h1>Stas Pavlov</h1>
                <GithubIcon />
            </a>
        </div>
    )
}

export default Footer