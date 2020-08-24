import React from 'react'

import styles from './Manual.module.css'
import root from './../../App.module.css'

export const Manual = () => {
    return (
        <div className={styles.manual}>
            <div className={root.container}>
                <h2 className={styles.heading}>
                    Руководство
                </h2>
                <div className={styles.block}>
                    <span className={styles.empty}>Пусто!</span>
                </div>
            </div>
        </div>
    )
}