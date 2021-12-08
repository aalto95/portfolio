import React from "react";
import LinkedInIcon from "./LinkedInIcon";
import MailIcon from "./MailIcon";
import {CopyToClipboard} from "react-copy-to-clipboard/lib/Component";

const Contacts = props => {
    return (
        <div id='contacts' className={'flex justify-center items-center'}>
            <section className={'flex flex-col justify-center items-center'}>
                <h1>Get in touch</h1>
                <a href="https://www.linkedin.com/in/stanislav-pavlov-9776ba206/" className={'h-14 w-72 md:w-96 bg-white flex justify-center items-center mb-2'}>
                    <p className={'mr-2 text-black text-sm'}>LinkedIn</p>
                    <LinkedInIcon className={'w-8 h-8'}/>
                </a>
                <a href="mailto:scotlandfjord@protonmail.com" className={'h-14 w-72 md:w-96 bg-white flex justify-center items-center mb-2'}>
                    <p className={'mr-2 text-black text-sm'} id='mail'>scotlandfjord@protonmail.com</p>
                    <MailIcon className={'w-8 h-8'}/>
                </a>
                <button onClick={() => {alert('Email was copied to clipboard!')}}>
                    <CopyToClipboard className={'h-14 w-72 md:w-96 bg-black flex justify-center items-center'} text='scotlandfjord@protonmail.com'>
                        <p className={'mr-2 text-black text-sm'}>COPY EMAIL TO CLIPBOARD</p>
                    </CopyToClipboard>
                </button>
            </section>
        </div>
    )
}

export default Contacts