import React from 'react'

import styles from './History.module.css'
import root from './../../App.module.css'

export const History = () => {
    return (
        <div className={styles.history}>
            <div className={root.container}>
                <h2 className={styles.heading}>
                    История
                </h2>
                <div className={styles.block}>
                    <span className={styles.empty}>Пусто!</span>
                </div>
            </div>
        </div>
    )
}