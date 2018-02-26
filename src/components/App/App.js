import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import './App.css'
import Approve from '../../containers/Approve'
import { Employee  } from '../../features/Employee'
import Vacation from '../../containers/Vacation'
import withTheme from '../../hoc/withTheme'
import Menu from '../Menu'


// Main Layout
class App extends Component {
    render() {
        return (
            [
                <Menu key={ '1' }/>,
                <Switch key={ '2' }>
                    <Route exact path={ '/' } component={ Approve } />
                    <Route path={ '/vacation/add' } component={ Vacation } />
                    <Route path={ '/employee/add' } component={ Employee }/>
                </Switch>
            ]
        )
    }
}

export default withTheme(App)
