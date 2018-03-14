import React from 'react'

import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'

const drawerWidth = 240

const styles = theme => ({
    wrapper: {
        width: '100%',
        height: '100%',
        display: 'flex',
        position: 'relative',
        marginTop: theme.spacing.unit * 3,
        zIndex: 1,
        overflow: 'hidden'
    },

    appBar: {
        zIndex: theme.zIndex.drawer + 1
    },

    drawer: {
        width: drawerWidth,
        position: 'relative'
    },

    content: {
        width: '100%',
        margin: theme.spacing.unit * 3,
        marginTop: theme.spacing.unit * 8
    }
})

export const MainMenuButton = props => (<IconButton color="inherit" { ...props }><MenuIcon /></IconButton>)

export const Title = ({ children }) => (<Typography variant="title" color="inherit">{ children }</Typography>)

const ContentComponent = ({ children, classes }) => (<main className={ classes.content }>{ children }</main>)
export const Content = withStyles(styles, { withTheme: true })(ContentComponent)

const LeftMenuComponent = ({ children, classes }) => (
    <Drawer variant="permanent" className={ classes.drawer }>
        { children }
    </Drawer>
)
export const LeftMenu = withStyles(styles, { withTheme: true })(LeftMenuComponent)

const AppBarComponent = ({ children, classes }) => (
    <AppBar className={ classes.appBar }>
        { children }
    </AppBar>
)
export const ApplicationBar = withStyles(styles, { withTheme: true })(AppBarComponent)

const WrapperComponent = ({ classes, children }) => (
    <div className={ classes.wrapper }>
        { children }
    </div>
)
export const Wrapper = withStyles(styles, { withTheme: true })(WrapperComponent)
