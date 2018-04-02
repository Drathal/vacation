import React from 'react'
import PropTypes from 'prop-types'
import { compose, defaultProps, setDisplayName, setPropTypes } from 'recompose'

import AccountCircle from 'material-ui-icons/AccountCircle'
import Toolbar from 'material-ui/Toolbar'
import { MenuItem } from 'material-ui/Menu'

import MenuButton from 'components/MenuButton'
import MainMenu, { MainMenuItem } from 'components/MainMenu'
import withElementToggle from 'components/hoc/withConfigElementToggle'
import { Wrapper, ApplicationBar, Title, Content, MainMenuButton } from './Layout.styled'

const Layout = ({
    children,
    title,
    mainMenuItems,
    onMainMenuItemClick,
    onAccountMenuClick,
    anchorElementMainMenu,
    toggleMainMenu,
    hideMainMenu
}) => (
    <Wrapper>
        <ApplicationBar>
            <Toolbar>
                <MainMenuButton onClick={toggleMainMenu} />
                <Title>{title}</Title>
                <MenuButton icon={AccountCircle} onSelect={onAccountMenuClick}>
                    <MenuItem value={'/login'}>Login (not now)</MenuItem>
                </MenuButton>
            </Toolbar>
        </ApplicationBar>
        <MainMenu open={!!anchorElementMainMenu} onSelect={onMainMenuItemClick} hide={hideMainMenu}>
            {mainMenuItems.map((item, i) => (
                <MainMenuItem key={i} {...{ value: item.path, icon: item.icon, label: item.name }} />
            )) || null}
        </MainMenu>
        <Content>{children}</Content>
    </Wrapper>
)

export default compose(
    setDisplayName('Layout'),
    withElementToggle('MainMenu'),
    setPropTypes({
        title: PropTypes.string.isRequired,
        mainMenuItems: PropTypes.arrayOf(
            PropTypes.shape({
                path: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired,
                icon: PropTypes.func
            })
        ),
        toggleMainMenu: PropTypes.func.isRequired,
        hideMainMenu: PropTypes.func.isRequired
    }),
    defaultProps({
        title: '#Layout Title#',
        onMainMenuItemClick: p => console.info('onMainMenuItemClick', p),
        onAccountMenuClick: p => console.info('onAccountMenuClick', p)
    })
)(Layout)
