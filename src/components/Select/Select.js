import React from "react"
import PropTypes from "prop-types"
import { compose, defaultProps, setDisplayName, setPropTypes, pure} from "recompose";
import Select from 'material-ui/Select'
import { MenuItem } from 'material-ui/Menu'
import { FormControl, FormHelperText } from 'material-ui/Form'
import { InputLabel } from 'material-ui/Input'

// config our select comp
const customSelect = ({
    input,
    label,
    options,
    meta: { touched, error },
    ...custom
}) => (
    <FormControl fullWidth>
        <InputLabel htmlFor="fromId">{label}</InputLabel>
        <Select
            {...input}
            onBlur={(event, index, value) => input.onChange(value)}
            {...custom}
            autoWidth={true}
        >
            {options.map(
                ({ label, value }, index) => <MenuItem key={value} value={value}>{label}</MenuItem>)
            }
        </Select>
        <FormHelperText>{touched && error}</FormHelperText>
    </FormControl>
)

export default compose(
    setDisplayName("customSelect"),
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
)(customSelect);
