import React from 'react'
import styles from './Press.module.css'

import { NewsContent } from '../Content/NewsContent/NewsContent'
import { VideoContent } from '../Content/VideoContent/VideoContent'
import { GalleryContent } from '../Content/GalleryContent/GalleryContent'
import { StatsContent } from '../Content/StatsContent/StatsContent'

export const Press = () => {
    return (
        <div className={styles.press}>
            <div className={styles.block}>
                <NewsContent />
                <VideoContent />
                <GalleryContent />
                <StatsContent />
            </div>
        </div>
    )
}