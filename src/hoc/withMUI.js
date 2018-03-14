import React from 'react'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import CssBaseline from 'material-ui/CssBaseline'
import teal from 'material-ui/colors/teal'
import MomentUtils from 'material-ui-pickers/utils/moment-utils'
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider'

const theme = createMuiTheme({
    palette: {
        primary: teal
    }
})

export default Component => props => (
    <MuiPickersUtilsProvider utils={ MomentUtils }>
        <MuiThemeProvider theme={ theme }>
            <CssBaseline />
            <Component { ...props } />
        </MuiThemeProvider>
    </MuiPickersUtilsProvider>
)
