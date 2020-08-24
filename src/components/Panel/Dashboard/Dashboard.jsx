import React, { useState } from "react"
import styles from "./Dashboard.module.css"
import { NavLink } from "react-router-dom"

import { Topline } from "../Topline/Topline"
import { Scene } from "../Scene/Scene"

import press from './../../../assets/icons/newspaper_white.svg'
import activity from './../../../assets/icons/settings_white.svg'
import history from './../../../assets/icons/history_white.svg'
import manual from './../../../assets/icons/manual_white.svg'
import call from './../../../assets/icons/call_white.svg'
import message from './../../../assets/icons/message_white.svg'

export const Dashboard = () => { 
    const [open, setOpen] = useState(false)

    const menuOpen = event => {
        event.preventDefault()

        if (open === false){
            setOpen(true)
        } else {
            setOpen(false)
        }
    }

    const elems = [
        { name: 'Пресс-центр', img: press, url: '/admin/panel/news' },
        { name: 'Деятельность', img: activity, url: '/admin/panel/activity' },
        { name: 'История', img: history, url: '/admin/panel/history' },
        { name: 'Руководство', img: manual, url: '/admin/panel/manual' },
        { name: 'Контакты', img: call, url: '/admin/panel/call' },
        { name: 'Прием заявлений', img: message, url: '/admin/panel/message' }
    ]

    const items = elems.map(({name, img, url}, i) => {
        return (
            <div onClick={menuOpen} key={ i } className={styles.item}>
                <NavLink to={ url } className={styles.link}>
                    <img src={ img } alt={ name } /> <span>{ name }</span>
                </NavLink>
            </div>
        )
    })

    return(
        <div className={styles.interface}>
            <nav className={`${styles.navbar} ${open ? styles.open : ""}`}>
                <div className={styles.flexBlock}>
                    <div className={styles.title}>
                    <NavLink to="/admin/panel" className={`${styles.logo} ${open ? styles.open : ""}`}>Панель админа</NavLink>
                        <a href="/" className={styles.ham} onClick={menuOpen}>
                            <span className={`${styles.line} ${open ? styles.open : ""}`}></span>
                            <span className={`${styles.line} ${open ? styles.open : ""}`}></span>
                            <span className={`${styles.line} ${open ? styles.open : ""}`}></span>
                        </a>
                    </div>
                </div>
                { items }
            </nav>
            <div className={styles.main}>
                <Topline />
                <Scene />
            </div>
        </div>
    )
}