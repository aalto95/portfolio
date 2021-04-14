import React from "react";
import s from './../../Projects.module.scss'

const Technologies = (props) => {
    return (
        <li className={s.technology}>
            {props.name}
        </li>

    )
}

export default Technologies