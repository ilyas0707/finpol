import React from 'react'

import styles from './NewsContent.module.css'
import root from './../../../App.module.css'

export const NewsContent = () => { 
    return (
        <div className={styles.newsContent}>
            <div className={root.container}>
                <div className={styles.top}>
                    <h2 className={styles.heading}>Последние новости <span></span><span></span></h2>
                    <a href="#">Смотреть все</a>
                </div>
                <div className={styles.block}>
                    <span className={styles.empty}>Пусто!</span>
                </div>
            </div>
        </div>
    )
}