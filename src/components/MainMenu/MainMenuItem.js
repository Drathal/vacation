import React from 'react'
import { compose, defaultProps, setDisplayName, setPropTypes, pure } from 'recompose'

import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'

const MainMenuItem = ({ label, icon: Icon, ...props }) => (
    <ListItem button { ...props }>
        <ListItemIcon>
            <Icon />
        </ListItemIcon>
        <ListItemText primary={ label } />
    </ListItem>
)

export default compose(
    setDisplayName('MainMenuItem'),
    setPropTypes({
    }),
    defaultProps({
        label: '#label#'
    }),
    pure
)(MainMenuItem)
