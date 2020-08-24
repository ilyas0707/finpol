import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import styles from './Header.module.css'
import root from './../../App.module.css'

import logo from './../../assets/icons/logo.svg'
import search from './../../assets/icons/search.svg'

export const Header = () => {
    const [open, setOpen] = useState(false)

    const menuOpen = event => {
        event.preventDefault()

        if (open === false){
            setOpen(true)
        } else {
            setOpen(false)
        }
    }

    const closeMenu = event => {
        event.preventDefault()

        setOpen(false)
    }

    const elems = ['пресс-центр', 'деятельность', 'история', 'руководство', 'контакты', 'прием заявлений']
    
    const items = elems.map((name, i) => {
        return (
            <div key={ i } onClick={closeMenu}>
                <NavLink activeClassName={styles.active} to={ name } className={styles.item}><span>{ name }</span></NavLink>
            </div>
        )
    })
    
	return (
		<header className={styles.header}>
            <div className={styles.topline}>
                <div className={root.container}>
                    <div className={styles.topline_block}>
                        <select className={styles.select}>
                            <option value="">ру</option>
                            <option value="">англ</option>
                            <option value="">кр</option>
                        </select>
                        <input className={styles.input} type="text" placeholder="Поиск"/>
                        <a href="#"><img src={ search } alt="search"/></a>
                    </div>
                </div>
            </div>
            <div className={styles.main}>
                <div className={root.container}>
                    <div className={styles.main_block}>
                        <NavLink to="пресс-центр" className={styles.link}><img src={ logo } alt="logo"/>Финансовая <br/> полиция</NavLink>
                        <nav className={`${styles.navigation} ${open ? styles.open : ""}`}>
                            <ul>
                                { items }
                            </ul>
                        </nav>
                        <a href="/" className={styles.ham} onClick={menuOpen}>
                            <span className={`${styles.line} ${open ? styles.open : ""}`}></span>
                            <span className={`${styles.line} ${open ? styles.open : ""}`}></span>
                            <span className={`${styles.line} ${open ? styles.open : ""}`}></span>
                        </a>
                    </div>
                </div>
            </div>
		</header>
	)
}