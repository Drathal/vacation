import React from 'react'

import PropTypes from 'prop-types'
import { compose, defaultProps, setDisplayName, setPropTypes } from 'recompose'

import { DatePicker } from 'material-ui-pickers'

const customDatepicker = ({ errorText, ...props }) => (
    <DatePicker error={!!errorText} helperText={(errorText && errorText) || ' '} keyboard fullWidth {...props} />
)

export default compose(
    setDisplayName('customDatepicker'),
    setPropTypes({
        onChange: PropTypes.func.isRequired,
        format: PropTypes.string.isRequired
    }),
    defaultProps({
        onChange: x => console.info(x),
        format: 'DD.MM.YYYY'
    })
)(customDatepicker)
