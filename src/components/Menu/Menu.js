import React from 'react'
import { compose, setDisplayName, pure } from 'recompose'
import { withStyles } from 'material-ui/styles'
import { Link } from 'react-router-dom'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/IconButton'
import { Done, Face, BeachAccess } from 'material-ui-icons'

const styles = {
    flex: {
        flex: 1
    }
}

// in real world link should be injected from the outside
const MyLink = props => <Link { ...props } />

const Menu = ({ classes }) => (
    <AppBar>
        <Toolbar>
            <Typography variant="title" color="inherit" className={ classes.flex }>Urlaubsplaner</Typography>
            <div>
                <Button component={ MyLink } color="inherit" to={ '/' }><Done/></Button>
                <Button component={ MyLink } color="inherit" to={ '/employee/add' }><Face/></Button>
                <Button component={ MyLink } color="inherit" to={ '/vacation/add' }><BeachAccess /></Button>
            </div>
        </Toolbar>
    </AppBar>
)

export default compose(
    setDisplayName('Menu'),
    pure,
    withStyles(styles)
)(Menu)
