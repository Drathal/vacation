import React from 'react'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import CssBaseline from 'material-ui/CssBaseline'
import teal from 'material-ui/colors/teal'

const theme = createMuiTheme({
    palette: {
        primary: teal
    }
})

export default Component => props => (
    <MuiThemeProvider theme={ theme }>
        <CssBaseline />
        <Component { ...props } />
    </MuiThemeProvider>
)
