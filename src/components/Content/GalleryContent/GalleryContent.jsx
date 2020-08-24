import React from 'react'

import styles from './GalleryContent.module.css'
import root from './../../../App.module.css'

export const GalleryContent = () => { 
    return (
        <div className={styles.galleryContent}>
            <div className={root.container}>
                <div className={styles.top}>
                    <h2 className={styles.heading}>Галерея <span></span><span></span></h2>
                    <a href="#">Смотреть все</a>
                </div>
                <div className={styles.block}>
                    <span className={styles.empty}>Пусто!</span>
                </div>
            </div>
        </div>
    )
}