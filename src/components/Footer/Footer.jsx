import s from './Footer.module.scss'

const Footer = props => {
    return (
        <div className={s.footer}>
            <a className={s.github} href="https://github.com/y2k01">
                <h1>Stas Pavlov</h1>
                <img className={s.icon} src="https://www.flaticon.com/svg/vstatic/svg/2111/2111425.svg?token=exp=1620786944~hmac=6e9f5c52839ba6dec79cc021ba588384" alt=""/>
            </a>
        </div>
    )
}

export default Footer