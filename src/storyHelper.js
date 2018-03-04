import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'
import { host } from 'storybook-host'
import { storiesOf } from '@storybook/react'

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import Reboot from 'material-ui/Reboot'

const ThemeDecorator = StoryComponent => (
    <MuiThemeProvider theme={ createMuiTheme({}) }>
        <Reboot />
        <StoryComponent />
    </MuiThemeProvider>
)

export default (storyName, storyModule, readme, useTheme = true) => {

    const stories = storiesOf(storyName, storyModule)

    if (process.env.NODE_ENV === 'test') {
        return stories
    }

    const withReadme = require('storybook-readme/with-readme').default

    return stories
        .addDecorator(ThemeDecorator)
        .addDecorator(withKnobs)
        .addDecorator(host({
            title: `${storyName} component`,
            align: 'center middle',
            height: '100%',
            width: '100%',
            backdrop: '#eee',
            background: '#fff',
            border: '1px solid #ccc'
        }))
        .addDecorator(withReadme(readme || ''))
}
