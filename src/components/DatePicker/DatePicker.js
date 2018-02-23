import React from "react"
import moment from 'moment'
import PropTypes from "prop-types"
import { compose, defaultProps, setDisplayName, setPropTypes, pure} from "recompose";
import { DatePicker } from 'material-ui-pickers'

// quick date formating
const  format = (date, formatting) =>{
    if (date === null) {
      return '';
    }
    return moment(date).format(formatting);
}

// configure our datepicker
const customDatepicker = ({
    label,
    input: { onChange, value, onBlur, ...inputProps },
    onChange: onChangeFromField,
    meta: { touched, error },
    ...custom
}) => {
    return(
        <DatePicker
            clearable
            {...inputProps}
            {...custom}
            value={value || null}
            onChange={(value) => {
                onChange(value)
            }}
            fullWidth
            labelFunc={date => format(date, 'DD.MM.YYYY')}
            label={label}
            helperText={(touched && error) || ' '}
            returnMoment={false}
        />
)};

export default compose(
    setDisplayName("customDatepicker"),
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
        meta: { touched: false, error: "" }
    }),
    pure
)(customDatepicker);
