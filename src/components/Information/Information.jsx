import React from "react";
import {NavLink, Route} from 'react-router-dom'
import s from './Information.module.css'

const Information = props => {
    return (
        <div className={s.main}>
            My name is Stas Pavlov
        </div>
    )
}

export default Information