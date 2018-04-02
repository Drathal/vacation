import React from 'react'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import CssBaseline from 'material-ui/CssBaseline'
import teal from 'material-ui/colors/teal'

import DateFnsUtils from 'material-ui-pickers/utils/date-fns-utils'
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider'
import deLocale from 'date-fns/locale/de'

const theme = createMuiTheme({
    palette: {
        primary: teal
    }
})

export default Component => props => (
    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={deLocale}>
        <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <Component {...props} />
        </MuiThemeProvider>
    </MuiPickersUtilsProvider>
)
