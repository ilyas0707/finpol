import React from "react"
import styles from "./Scene.module.css"

import { NewsContent } from './../../Content/NewsContent/NewsContent'
import { Switch, Route } from "react-router-dom"

export const Scene = () => {
    return(
        <div className={styles.scene}>
            <Switch>
                <Route path="/admin/panel/news">
                    Пресс-центр
                </Route>
                <Route path="/admin/panel/activity">
                    Деятельность
                </Route>
                <Route path="/admin/panel/history">
                    История
                </Route>
                <Route path="/admin/panel/manual">
                    Руководство
                </Route>
                <Route path="/admin/panel/call">
                    Контакты
                </Route>
                <Route path="/admin/panel/message">
                    Прием заявлений
                </Route>
            </Switch>
        </div>
    )
}