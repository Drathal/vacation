import React from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'
import { compose, defaultProps, setDisplayName, setPropTypes, pure } from 'recompose'
import { DatePicker } from 'material-ui-pickers'

// configure our datepicker
const customDatepicker = ({
    label,
    input: { onChange, value, onBlur, ...inputProps },
    meta: { touched, error },
    ...custom
}) => {
    return(
        <DatePicker
            clearable
            keyboard
            format={ 'DD.MM.YYYY' }
            { ...inputProps }
            { ...custom }
            value={ value ? moment(value, inputProps.format || 'DD.MM.YYYY') : null }
            onChange={ value => onChange(value) }
            fullWidth
            label={ label }
            helperText={ (touched && error) || ' ' }
            returnMoment={ false }
        />
    )}
// labelFunc={ date => format(date, 'DD.MM.YYYY') }
export default compose(
    setDisplayName('customDatepicker'),
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
)(customDatepicker)
