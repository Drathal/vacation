import React from 'react'
import { text, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import getstory from 'config/storyHelper'

import AccountCircle from 'material-ui-icons/AccountCircle'
import MainMenu from './MainMenu'
import MainMenuItem from './MainMenuItem'
import readme from './README.md'

getstory('MainMenu', module, readme).add('default', () => (
    <MainMenu open={boolean('open', true)} onSelect={action('onSelect')} hide={action('willHide')}>
        <MainMenuItem value={'1'} icon={AccountCircle} label={text('label1', 'MenuItem1')} />
        <MainMenuItem value={'2'} icon={AccountCircle} label={text('label2', 'MenuItem2')} />
        <MainMenuItem value={'3'} icon={AccountCircle} label={text('label3', 'MenuItem3')} />
    </MainMenu>
))
