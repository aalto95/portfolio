import githubIcon from "../assets/icons/github.png";

const Footer = props => {
    return (
        <div className={'bg-black flex justify-center items-center h-24'}>
            <a className={'flex items-center'} href="https://github.com/y2k01">
                <h2 className={'text-xl font-bold m-6'}>Stas Pavlov</h2>
                <img src={githubIcon} alt="github-icon" className={'w-16'}/>
            </a>
        </div>
    )
}

export default Footer