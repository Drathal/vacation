import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import './App.css'
import withTheme from '../../hoc/withTheme'
import Menu from '../Menu'
import routes from '../../routes'

const RouteItem = route => (
    <Route
        path={ route.path }
        render={ props => (
            <route.component { ...props } routes={ route.routes } />
        ) }
    />
)

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Menu/>
                <Switch>
                    { routes.map((route, i) => <RouteItem key={ i } { ...route } />) }
                </Switch>
            </React.Fragment>
        )
    }
}

export default withTheme(App)
