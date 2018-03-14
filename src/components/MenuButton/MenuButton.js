import React from 'react'
import PropTypes from 'prop-types'
import { compose, defaultProps, setDisplayName, setPropTypes } from 'recompose'

import IconButton from 'material-ui/IconButton'
import Menu from 'material-ui/Menu'

import withElementToggle from 'components/hoc/withElementToggle'

const DefaultMenu = ({ children, id, open, anchorEl }) => (<Menu
    anchorEl={ anchorEl }
    id={ id }
    open={ open }
    anchorOrigin={{
        vertical: 'top',
        horizontal: 'right'
    }}
    transformOrigin={{
        vertical: 'top',
        horizontal: 'right'
    }}
>
    { children }
</Menu>)

const MenuButton = withElementToggle(({ children, toggle, show, hide, anchorElement, onSelect, icon: Icon }) => (
    <React.Fragment>
        <IconButton onClick={ toggle } color="inherit"><Icon /></IconButton>
        <DefaultMenu id="menu-appbar" anchorEl={ anchorElement } open={ !!anchorElement }>
            { React.Children.map(
                children, child => React.cloneElement(child, {
                    onClick: () => {
                        hide()
                        onSelect(child.props.value)
                    }
                })
            ) }
        </DefaultMenu>
    </React.Fragment>
))

export default compose(
    setDisplayName('MenuButton'),
    setPropTypes({
        onSelect: PropTypes.func.isRequired
    }),
    defaultProps({
        onSelect: f => f
    }),
)(MenuButton)
