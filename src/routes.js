import React from 'react'
import root from './App.module.css'
import { Switch, Route, Redirect } from "react-router-dom"

import { Header } from './components/Header/Header'
import { Number } from './components/Number/Number'
import { Press } from './components/Press/Press'
import { Activity } from './components/Activity/Activity'
import { History } from './components/History/History'
import { Manual } from './components/Manual/Manual'
import { Contacts } from './components/Contacts/Contacts'
import { Message } from './components/Message/Message'
import { Owners } from './components/Owners/Owners'
import { Footer } from './components/Footer/Footer'

import { Login } from './components/Login/Login'
import { Panel } from './pages/Panel/Panel'

export const useRoutes = (isAuthentificated) => {
    const elems = [
        { component: <Press />, name: 'пресс-центр' },
        { component: <Activity />, name: 'деятельность' },
        { component: <History />, name: 'история' },
        { component: <Manual />, name: 'руководство' },
        { component: <Contacts />, name: 'контакты' },
        { component: <Message />, name: 'прием заявлений' },
    ]
    
    const items = elems.map(({component, name}, i) => {
        return (
            <Route key={i} path={`/${name}`} exact>
                { component }
            </Route>
        )
    })

    if (isAuthentificated) {
        return(
            <div>
                <Panel />
                <Redirect to="/admin/panel/news" />
            </div>      
        )
    }

    return (
        <>
            <Switch>
                <Route path="/admin" exact>
                    <Login />
                </Route>
                <Route path="/"> 
                    <div className={root.scene}>
                        <Header />
                        <Number />
                        <Switch>
                            { items }
                            <Redirect to="/пресс-центр" />
                        </Switch>
                        <Owners />
                        <Footer />
                    </div>
                </Route>
            </Switch>
        </>
    )
}