import React from 'react'

import styles from './Contacts.module.css'
import root from './../../App.module.css'

export const Contacts = () => {
    return (
        <div className={styles.contacts}>
            <div className={root.container}>
                <h2 className={styles.heading}>
                    Контакты
                </h2>
                <div className={styles.block}>
                    <span className={styles.empty}>Пусто!</span>
                </div>
            </div>
        </div>
    )
}