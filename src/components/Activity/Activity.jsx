import React from 'react'

import styles from './Activity.module.css'
import root from './../../App.module.css'

export const Activity = () => {
    return (
        <div className={styles.activity}>
            <div className={root.container}>
                <h2 className={styles.heading}>
                    Деятельность
                </h2>
                <div className={styles.block}>
                    <span className={styles.empty}>Пусто!</span>
                </div>
            </div>
        </div>
    )
}