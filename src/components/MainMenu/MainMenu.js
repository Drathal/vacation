import React from 'react'
import { compose, defaultProps, setDisplayName, setPropTypes, pure } from 'recompose'

import Drawer from 'material-ui/Drawer'

import MainMenuItem from './MainMenuItem'

const MainMenu = ({ children, open, classes, hide, onSelect }) =>
    !open ? null : (
        <Drawer variant={'temporary'} open={open} ModalProps={{ onBackdropClick: hide }}>
            {React.Children.map(
                children,
                child =>
                    child.type === MainMenuItem
                        ? React.cloneElement(child, {
                              onClick: () => {
                                  hide()
                                  onSelect(child.props.value)
                              }
                          })
                        : child
            )}
        </Drawer>
    )

export default compose(
    setDisplayName('MainMenu'),
    setPropTypes({}),
    defaultProps({
        onSelect: f => f
    }),
    pure
)(MainMenu)
