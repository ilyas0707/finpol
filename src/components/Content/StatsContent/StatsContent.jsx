import React from 'react'

import styles from './StatsContent.module.css'
import root from './../../../App.module.css'

export const StatsContent = () => { 
    return (
        <div className={styles.statsContent}>
            <div className={root.container}>
                <div className={styles.top}>
                    <h2 className={styles.heading}>Статистика <span></span><span></span></h2>
                </div>
                <div className={styles.block}>
                    <span className={styles.empty}>Пусто!</span>
                </div>
                <div className={styles.show}>
                    <a href="#">Смотреть статистику</a>
                </div>
            </div>
        </div>
    )
}