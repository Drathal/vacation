/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import { configure } from '@storybook/react'
import { setOptions } from '@storybook/addon-options'
import pkg from '../package.json'

setOptions({
    name: `Vacation Manager Components ${pkg.version}`,
    url: 'https://github.com/Drathal/vacation',
    goFullScreen: false,
    showSearchBox: false,
    downPanelInRight: true
})

const req = require
    .context('../src/components', true, /\.stories\.js$/)

const loadStories = () =>
    req
        .keys()
        .forEach(filename => req(filename))

configure(loadStories, module)
