import React, {useState} from "react";

const Navbar = props => {
    const [data] = useState([
        {href: '#projects', title: 'projects'},
        {href: '#contacts', title: 'contacts'},
        {href: '#about', title: 'about'},
        {href: '#resume', title: 'resume'},
        {href: 'https://github.com/aaltoo', title: 'github'},
    ])
    return (
        <nav className={'grid grid-cols-5 h-14 2xl:h-32 xl:h-28 lg:h-24 md:h-20 sm:h-16 bg-darkgray'}>
            {data.map((link) => {
                return <a key={link.title} href={link.href} className={'flex text-white justify-center items-center hover:bg-white hover:text-black transition duration-500 ease-in-out'}>{link.title}</a>
            })}
        </nav>
    )
}

export default Navbar