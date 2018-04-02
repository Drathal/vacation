import React from 'react'
import PropTypes from 'prop-types'
import { compose, defaultProps, setDisplayName, setPropTypes } from 'recompose'

import Typography from 'material-ui/Typography'

import { SendButton } from './EmployeeForm.styled'
import TextField from 'components/TextField'
import DatePicker from 'components/DatePicker'

const BithdayField = props => <DatePicker {...props} disableFuture={true} openToYearSelection={true} />

const Employee = ({ i18n, isValid, handleSubmit, getFieldProps, ...props }) => (
    <React.Fragment>
        <Typography variant="title" gutterBottom>
            {i18n.title}
        </Typography>
        <form onSubmit={handleSubmit}>
            <TextField {...getFieldProps('firstname')} label={i18n.firstnameLabel} />
            <TextField {...getFieldProps('name')} label={i18n.nameLabel} />
            <BithdayField {...getFieldProps('birthdate', true)} label={i18n.birthdateLabel} />
            <TextField {...getFieldProps('vacationDays')} label={i18n.vacationDaysLabel} />
            <br />
            <SendButton disabled={!isValid}>{i18n.send}</SendButton>
        </form>
    </React.Fragment>
)

export default compose(
    setDisplayName('Employee'),
    setPropTypes({
        i18n: PropTypes.object.isRequired,
        handleSubmit: PropTypes.func.isRequired,
        getFieldProps: PropTypes.func.isRequired
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
        handleSubmit: f => f,
        getFieldProps: f => f
    })
)(Employee)
