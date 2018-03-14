import React from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import { push } from 'react-router-redux'

import Layout from 'components/Layout'
import routes from 'config/routes'

const mainMenuItems = routes => routes.map(
    ({ path, icon, name }) => ({
        path,
        icon,
        name
    })
)

const RouteItem = route => (
    <Route path={ route.path } exact={ route.exact || false } render={ props => (
        <route.component { ...props } routes={ route.routes } />
    ) }
    />
)

const Contents = ({ routes, mainMenuItems, ...props }) => (
    <Layout mainMenuItems={ mainMenuItems } { ...props }>
        <Switch>
            { routes.map((route, i) => <RouteItem key={ i } { ...route } />) }
        </Switch>
    </Layout>
)

const mapStateToProps = (state, ownProps) => ({
    routes: routes,
    mainMenuItems: mainMenuItems(routes),
    title: 'Urlaubsplaner'
})

const mapDispatchToProps = dispatch => ({
    onMainMenuItemClick: path => dispatch(push(path))
})

export default connect(mapStateToProps, mapDispatchToProps)(Contents)

