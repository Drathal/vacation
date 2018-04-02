import React from 'react'
import PropTypes from 'prop-types'
import { compose, defaultProps, setDisplayName, setPropTypes, pure } from 'recompose'

import TextField from 'material-ui/TextField'

const customTextField = ({ errorText, ...custom }) => (
    <TextField fullWidth error={!!errorText} helperText={(errorText && errorText) || ' '} {...custom} />
)

export default compose(
    setDisplayName('customTextField'),
    setPropTypes({
        onChange: PropTypes.func.isRequired
    }),
    defaultProps({
        onChange: x => x
    }),
    pure
)(customTextField)
