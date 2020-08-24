import React, { useState, useEffect, useCallback, useContext } from "react"
import styles from "./Login.module.css"

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import { useError } from "./../../hooks/error.hook"
import { AuthContext } from './../../context/AuthContext'
import { useHttp } from "../../hooks/http.hook"

export const Login = () => {
    toast.configure({
        autoClose: 3000,
        draggable: true
    })

    const auth = useContext(AuthContext)
    const errorMessage = useError()
    const { loading, request } = useHttp()
    const [form, setForm] = useState({
        username: "",
        password: ""
    })

    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }
    
    const loginHandler = useCallback(async () => {
        try {
            const data = await request("http://188.120.255.68:18080/api/auth/login", "POST", { ...form })
            auth.login(data.token)
        } catch (e) {
            errorMessage('Данные введены неверно!')
        }
    }, [auth, form, request])

    const enterHandler = useCallback((event) => {
        if(event.keyCode === 13) {
            loginHandler()
        }
    }, [loginHandler])

    useEffect(() => {
        document.addEventListener("keydown", enterHandler, false)
        return () => {
            document.removeEventListener("keydown", enterHandler, false)
        }
    }, [enterHandler])

    return(
        <div className={styles.login}>
            <div className={styles.block}>
                <h2 className={styles.heading}>Вход</h2>
                <form action="#" className={styles.form}>
                    <div className={styles.inputBlock}>
                        <input 
                            type="text"
                            className={styles.input}
                            name="username"
                            placeholder="Логин"
                            autoComplete="off"
                            onChange={changeHandler} />
                        <label htmlFor="username" className={styles.label}>Логин</label>
                    </div>
                    <div className={styles.inputBlock}>
                        <input 
                            type="password"
                            className={styles.input}
                            name="password"
                            placeholder="Пароль"
                            autoComplete="off"
                            onChange={changeHandler} />
                        <label htmlFor="password" className={styles.label}>Пароль</label>
                    </div>
                    <div className={loading ? styles.loading : styles.buttons}>
                        <a 
                            href="/" 
                            className={loading ? 
                                styles.dn : styles.submit}
                            onClick={e => {e.preventDefault(); loginHandler()}}>Войти</a>
                    </div>
                </form>
            </div>
        </div>
    )
}