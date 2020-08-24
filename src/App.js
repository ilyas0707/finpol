import React from 'react'
import styles from './App.module.css'
import { BrowserRouter as Router } from "react-router-dom"
import { useRoutes } from './routes.js'
import { useAuth } from "./hooks/auth.hook"
import { AuthContext } from "./context/AuthContext"

const App = () => {
	const { token, login, logout, userId } = useAuth()
	const isAuthentificated = !!token
	const routes = useRoutes(isAuthentificated)
	return (
		<AuthContext.Provider value={{
			token, login, logout, userId, isAuthentificated
		}}>
			<Router>
				<div className={styles.app}>
					{ isAuthentificated }
					{ routes }
				</div>
			</Router>
		</AuthContext.Provider>
	)
}

export default App