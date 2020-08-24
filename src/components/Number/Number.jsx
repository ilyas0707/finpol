import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from './Number.module.css'
import root from './../../App.module.css'

import phone from './../../assets/icons/phone.svg'

export const Number = () => {
    const elems = ['пресс-центр', 'деятельность', 'история', 'руководство', 'контакты', 'прием заявлений']

    const items = elems.map((name, i) => {
        return (
            <NavLink activeClassName={styles.active} to={ name } key={ i } className={styles.item}>
                <div className={styles.img}></div>
                <span>{ name }</span>
            </NavLink>
        )
    })

    return (
        <div className={styles.number}>
            <div className={root.container}>
                <h2 className={styles.heading}>Горячая линия <br/> Финансовой полиции</h2>
                <div className={styles.icon}>
                    <a href="tel:1955" className={styles.link}>
                        <img src={ phone } alt="phone"/>
                    </a>
                    <span>1955</span>
                </div>
            </div>
            <nav className={styles.navigation}>
                <div className={root.container}>
                    <ul className={styles.menu}>
                        { items }
                    </ul>
                </div>
            </nav>
        </div>
    )
}