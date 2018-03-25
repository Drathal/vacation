import React from 'react'
//import { Subscribe } from 'unstated'
import { Switch, Route } from 'react-router-dom'
//import { push } from 'react-router-redux'

import Layout from 'components/Layout'
import routes from 'config/routes'

const mapMenuItems = routes => routes.map(
    ({ path, icon, name }) => ({
        path,
        icon,
        name
    })
)

const RouteItem = ({ path,exact,routes, component: Component }) => (
    <Route path={ path } exact={ exact || false } render={ props => (
        <Component { ...props } routes={ routes } />
    ) }/>
)

const mainMenuItems = mapMenuItems(routes)

export default ({ title = 'Urlaubsplaner' }) => (
    <Layout mainMenuItems={ mainMenuItems } onMainMenuItemClick={ console.info }>
        <Switch>
            { routes.map((route, i) => <RouteItem key={ i } { ...route }/>) }
        </Switch>
    </Layout>
)

/*
const mapStateToProps = (state, ownProps) => ({
    routes: routes,
    mainMenuItems: mainMenuItems(routes),
    title: 'Urlaubsplaner'
})

const mapDispatchToProps = dispatch => ({
    onMainMenuItemClick: path => dispatch(push(path))
})

export default connect(mapStateToProps, mapDispatchToProps)(Contents)
*/
