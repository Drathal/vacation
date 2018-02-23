import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import './App.css'
import Approve from '../../containers/Approve'
import Employee from '../../containers/Employee'
import Vacation from '../../containers/Vacation'
import withTheme from '../../hoc/withTheme'
import Menu from '../Menu'

// config Containers
const ApproveComp = props => (<Approve {...props} />)
const EmployeeComp = props => (<Employee {...props} />)
const VacationComp = props => (<Vacation {...props} />)

// Main Layout
class App extends Component {
    render() {
        return (
            [
                <Menu key={'1'}/>,
                <Switch key={'2'}>
                    <Route exact path={'/'} render={ApproveComp} />
                    <Route exact path={'/employee/add'} render={EmployeeComp} />
                    <Route exact path={'/vacation/add'} render={VacationComp}/>
                </Switch>
            ]
        );
    }
}

export default withTheme(App)
