import React from 'react'
import { text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import getstory from '../../storyHelper'

import Menu from './Menu'
import readme from './README.md'
import routes from '../../routes'

const menuitems = routes.map(
    ({ path, icon }) => ({
        path,
        icon
    })
)

getstory('Menu', module, readme)
    .add(
        'default',
        () => <Menu
            menuitems = { menuitems }
            onMenuItemClick={ action('button-click') }
            title={ text('title', 'Urlaubsplaner') }/>
    )
