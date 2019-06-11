import React from 'react'
import { Route, Switch } from 'react-router-dom'
import CoachesPage from './CoachesPage'

const Router = () => {
    return (
        <Switch>
            <Route path="/coaches" component={CoachesPage} />
        </Switch>
    )
}

export default Router
