import React from 'react'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import Reboot from 'material-ui/Reboot'
import teal from 'material-ui/colors/teal'

const theme = createMuiTheme({
    palette: {
      primary: teal,
    },
})

export default Component => props => (
    <MuiThemeProvider theme={theme}>
        <Reboot />
        <Component {...props} />
    </MuiThemeProvider>
)
