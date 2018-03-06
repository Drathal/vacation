import React from 'react'
import { Switch, Route } from 'react-router-dom'

import './App.css'
import { MainMenu } from '../../features/MainMenu'

const RouteItem = route => (
    <Route path={ route.path } exact={ route.exact || false } render={ props => (
        <route.component { ...props } routes={ route.routes } />
    ) }
    />
)

export default ({ routes }) => (
    <React.Fragment>
        <MainMenu/>
        <Switch>
            { routes.map((route, i) => <RouteItem key={ i } { ...route } />) }
        </Switch>
    </React.Fragment>
)
