import React from 'react'
import PropTypes from 'prop-types'
import { compose, defaultProps, setDisplayName, setPropTypes, pure } from 'recompose'

import TextField from 'material-ui/TextField'

const customTextField = ({
    input,
    label,
    meta: { touched, error },
    ...custom
}) => (
    <TextField
        label={ label }
        { ...input }
        { ...custom }
        helperText={ (touched && error) || ' ' }
        fullWidth
    />
)

export default compose(
    setDisplayName('customTextField'),
    setPropTypes({
        input: PropTypes.object,
        label: PropTypes.string,
        custom: PropTypes.object,
        meta: PropTypes.shape({
            touched: PropTypes.bool,
            error: PropTypes.string
        }).isRequired
    }),
    defaultProps({
        meta: { touched: false, error: '' }
    }),
    pure
)(customTextField)
