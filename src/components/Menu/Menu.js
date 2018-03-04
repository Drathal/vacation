import React from 'react'
import PropTypes from 'prop-types'
import { compose, defaultProps, setDisplayName, setPropTypes, pure } from 'recompose'
import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/IconButton'

const styles = {
    flex: {
        flex: 1
    }
}

const MenuButton = ({ path, icon: Icon, onMenuItemClick }) => (
    <Button color="inherit" onClick={ e => onMenuItemClick(path) }>
        <Icon/>
    </Button>
)

const Menu = ({ title, menuitems, classes, onMenuItemClick }) => (
    <AppBar>
        <Toolbar>
            <Typography variant="title" color="inherit" className={ classes.flex }>{ title }</Typography>
            <div>
                { menuitems.map((props, i) => <MenuButton key={ i } { ...props } onMenuItemClick={ onMenuItemClick }/>) }
            </div>
        </Toolbar>
    </AppBar>
)

export default compose(
    setDisplayName('Menu'),
    setPropTypes({
        title: PropTypes.string.isRequired,
        menuitems: PropTypes.arrayOf(
            PropTypes.shape({
                path: PropTypes.string.isRequired,
                icon: PropTypes.func.isRequired
            }).isRequired
        ),
        onMenuItemClick: PropTypes.func.isRequired
    }),
    defaultProps({
        onMenuItemClick: f => f,
        title: '#title#',
        menuitems: []
    }),
    pure,
    withStyles(styles)
)(Menu)
