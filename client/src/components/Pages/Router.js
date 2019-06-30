import React from 'react'
import { Route, Switch } from 'react-router-dom'
import CoachesPage from './Coaches/CoachesPage'
import SingleCoachPage from './Coaches/SingleCoachPage'
import ClientsPage from './Clients/ClientsPage'

const Router = () => {
    return (
        <Switch>
            <Route path="/coaches" exact component={CoachesPage} />
            <Route path="/coaches/:id" component={SingleCoachPage} />
            <Route path="/clients" exact component={ClientsPage} />
        </Switch>
    )
}

export default Router
