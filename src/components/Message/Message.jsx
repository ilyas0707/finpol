import React from 'react'

import styles from './Message.module.css'
import root from './../../App.module.css'

export const Message = () => {
    return (
        <div className={styles.message}>
            <div className={root.container}>
                <h2 className={styles.heading}>
                    Прием заявлений
                </h2>
                <div className={styles.block}>
                    <span className={styles.empty}>Пусто!</span>
                </div>
            </div>
        </div>
    )
}