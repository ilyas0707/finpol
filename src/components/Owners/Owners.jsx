import React from 'react'

import styles from './Owners.module.css'
import root from './../../App.module.css'

import img1 from './../../assets/images/gov-ru.png'
import img2 from './../../assets/images/goszakupki.png'
import img3 from './../../assets/images/jk.png'

export const Owners = () => { 
    return (
        <div className={styles.owners}>
            <div className={root.container}>
                <div className={styles.block}>
                    <div className={styles.item}>
                        <img src={img1} alt=""/>
                    </div>
                    <div className={styles.item}>
                        <img src={img2} alt=""/>
                    </div>
                    <div className={styles.item}>
                        <img src={img3} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}