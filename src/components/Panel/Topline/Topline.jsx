import React, { useState, useContext, useEffect, useCallback } from "react"

import styles from "./Topline.module.css"
import overlay from "./../../../App.module.css"

import { useHistory } from "react-router-dom"
import { AuthContext } from "../../../context/AuthContext"

export const Topline = () => {
    const [show, setShow] = useState(false)
    const history = useHistory()
    const auth = useContext(AuthContext)

    const logoutHandler = event => {
        event.preventDefault()
        auth.logout()
        history.push("/")
    }

    const showModal = event => {
        event.preventDefault()
        setShow(true)
    }

    const logoutCancel = useCallback(() => {
        setShow(false)
    }, [setShow])

    const escHandler = useCallback((event) => {
        if(event.keyCode === 27) {
            logoutCancel()
        }
    }, [logoutCancel])

    useEffect(() => {
        document.addEventListener("keydown", escHandler, false)
        return () => {
            document.removeEventListener("keydown", escHandler, false)
        }
    }, [escHandler])

    return(
        <div className={styles.topline}>
            <div className={styles.item}>
                <a href="/" className={styles.link} onClick={showModal}>
                    Выйти
                </a>
            </div>
            <div className={`${overlay.overlay} ${show ? styles.active : !show}`} onClick={logoutCancel}></div>
            <div className={`${styles.message} ${show ? styles.active : !show}`}>
                <p className={styles.text}>Вы уверены, что хотите выйти?</p>
                <a href="/" className={styles.submit} onClick={logoutHandler}>Да</a>
                <a href="/" className={styles.submit} onClick={e => {e.preventDefault(); logoutCancel()}}>Нет</a>
            </div>
        </div>
    )
}