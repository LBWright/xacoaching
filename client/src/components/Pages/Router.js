import React from 'react'
import { Route, Switch } from 'react-router-dom'
import CoachesPage from './Coaches/CoachesPage'

const Router = () => {
    return (
        <Switch>
            <Route path="/coaches" component={CoachesPage} />
            <Route path="/coaches/:id" component={CoachesPage} />
        </Switch>
    )
}

export default Router
