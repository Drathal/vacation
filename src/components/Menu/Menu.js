import React from 'react'
import { compose, setDisplayName, pure } from 'recompose'
import { withStyles } from 'material-ui/styles'
import { Link } from 'react-router-dom'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/IconButton'
import routes from '../../routes'

const styles = {
    flex: {
        flex: 1
    }
}

const MyLink = props => <Link { ...props } />

const MenuItem = route => (
    <Button component={ MyLink } color="inherit" to={ route.path }>
        { <route.icon/> }
    </Button>
)

const Menu = ({ classes }) => (
    <AppBar>
        <Toolbar>
            <Typography variant="title" color="inherit" className={ classes.flex }>Urlaubsplaner</Typography>
            <div>
                { routes.map((route, i) => <MenuItem key={ i } { ...route } />) }
            </div>
        </Toolbar>
    </AppBar>
)

export default compose(
    setDisplayName('Menu'),
    pure,
    withStyles(styles)
)(Menu)
