import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from './Footer.module.css'
import root from './../../App.module.css'

import obse from './../../assets/images/obse.png'
import undp from './../../assets/images/undp.png'

export const Footer = () => {
    const nav = ['пресс-центр', 'деятельность', 'история', 'руководство', 'контакты', 'прием заявлений']
    const contact = [
        { domain: 'www.net.kg', title: 'телефон', tel: '+996 (312) 323091', space: ', ', tel2: '+996 (312) 323707' },
        { title: 'горячая линия', tel: '1955' },
        { title: 'email', email: 'receivefinpol@gmail.com' },
    ]
    
    const menu = nav.map((name, i) => {
        return (
            <div className={styles.arrange} key={ i }>
                <NavLink to={ name } className={styles.item}><span>{ name }</span></NavLink>
            </div>
        )
    })

    const contacts = contact.map(({domain, title, tel, space, tel2, email}, i) => {
        return (
            <p key={ i } className={styles.item}>
                { domain } <br/> 
                { title } <br/> 
                <a href={`tel:${ tel }`}>{ tel }</a>{ space }
                <a href={`tel:${ tel2 }`}>{ tel2 }</a>
                <a href={`mailto:${ email }`}>{ email }</a>
            </p>
        )
    })

    return (
        <div className={styles.footer}>
            <div className={root.container}>
                {/* <div className={styles.img}>
                    <img src={ obse } alt="ОБСЕ"/>
                    <img src={ undp } alt=""/>
                </div> */}
            </div>
            <div className={styles.main}>
                <div className={root.container}>
                    <div className={styles.block}>
                        <nav className={styles.navigation}>
                            <h4 className={styles.heading}>меню</h4>
                            <ul>
                                { menu }
                            </ul>
                        </nav>
                        <div className={styles.contacts}>
                            <h4 className={styles.heading}>контакты</h4>
                            { contacts }
                        </div>
                        <div className={styles.text}>
                            <p className={styles.item}>
                                Государственная служба по борьбе с экономическими преступлениями при Правительстве Кыргызской Республики <br/><br/> Финансовая полиция <br/><br/> 720055, Кыргызская Республика г.Бишкек, пр. Манаса 101/1
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}