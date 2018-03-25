import React from 'react'
import PropTypes from 'prop-types'
import { compose, defaultProps, setDisplayName, setPropTypes } from 'recompose'

import Typography from 'material-ui/Typography'

import { SendButton } from './EmployeeForm.styled'
import TextField from 'components/TextField'
import DatePicker from 'components/DatePicker'

const BithdayField = props => (<DatePicker { ...props } disableFuture={ true } openToYearSelection={ true } />)
const handleBlurCustom = (name, setFieldTouched) => () => setFieldTouched(name, true)
const handleChangeCustom = (name, setFieldValue) => value => setFieldValue(name, value)

const mapProps = (props, name, thirdParty = false) => ({
    name: name,
    label: props.i18n[`${name}Label`],
    onChange: thirdParty
        ? handleChangeCustom(name, props.setFieldValue)
        : props.handleChange,
    onBlur: thirdParty
        ? handleBlurCustom(name, props.setFieldTouched)
        : props.handleBlur,
    value: props.values[name],
    errorText: props.touched && props.touched[name] && props.errors && props.errors[name]
})

const Employee = ({ isValid, handleSubmit, ...props }) => (
    <React.Fragment>
        <Typography variant="title" gutterBottom>{ props.i18n.title }</Typography>
        <form onSubmit={ handleSubmit } >
            <TextField { ...mapProps(props, 'firstname') } />
            <TextField { ...mapProps(props, 'name') } />
            <BithdayField { ...mapProps(props, 'birthdate', true) } />
            <TextField { ...mapProps(props, 'vacationDays') }/>
            <br />
            <SendButton disabled={ !isValid }>{ props.i18n.send }</SendButton>
        </form>
        { console.info('isValid', isValid) }
        { console.info('errors',props.errors) }
    </React.Fragment>
)

export default compose(
    setDisplayName('Employee'),
    setPropTypes({
        i18n: PropTypes.object.isRequired,
        values: PropTypes.object.isRequired,
        errors: PropTypes.object.isRequired,
        touched: PropTypes.object.isRequired,
        isSubmitting: PropTypes.bool.isRequired,
        handleChange: PropTypes.func.isRequired,
        handleBlur: PropTypes.func.isRequired,
        handleSubmit: PropTypes.func.isRequired,
        setFieldValue: PropTypes.func.isRequired,
        setFieldTouched: PropTypes.func.isRequired
    }),
    defaultProps({
        i18n: {
            title: '#title#',
            send: '#send#',
            firstnameLabel: '#firstnameLabel#',
            nameLabel: '#nameLabel#',
            birthdateLabel: '#birthdateLabel#',
            vacationDaysLabel: '#vacationDaysLabel#'
        },
        values: {},
        errors: {},
        touched: false,
        isSubmitting: false,
        handleChange: f => f,
        handleBlur: f => f,
        handleSubmit: f => f,
        setFieldValue: f => f,
        setFieldTouched: f => f
    })
)(Employee)
