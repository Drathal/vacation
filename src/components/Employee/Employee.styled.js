import React from 'react'
import { withStyles } from 'material-ui/styles'

import Button from 'material-ui/Button'

const styles = theme => ({
    right: {
        textAlign: 'right'
    }
})

const SendButtonComponent = ({ children, classes }) => (
    <div className={classes.right}>
        <Button variant="raised" color="primary" type="submit" value="ok">
            {children}
        </Button>
    </div>
)

export const SendButton = withStyles(styles, { withTheme: true })(SendButtonComponent)
