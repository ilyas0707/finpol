import React from 'react'
import styles from './Panel.module.css'

import { Dashboard } from './../../components/Panel/Dashboard/Dashboard'

export const Panel = () => {

    return (
        <div className={styles.panel}>
            <Dashboard />
        </div>
    )
}