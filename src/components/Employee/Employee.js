import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form/immutable'
import { compose, defaultProps, setDisplayName, setPropTypes, pure } from 'recompose'

import Typography from 'material-ui/Typography'

import { SendButton } from './Employee.styled'
import TextField from 'components/TextField'
import DatePicker from 'components/DatePicker'

const BithdayField = props => (<DatePicker { ...props } disableFuture={ true } openToYearSelection={ true }/>)

const Employee = ({ title, handleSubmit, onSubmit }) => (
    <React.Fragment>
        <Typography variant="title" gutterBottom>{ title }</Typography>
        <form onSubmit={ handleSubmit(onSubmit) }>
            <div><Field name="firstname" component={ TextField } label="Name"/></div>
            <div><Field name="name" label="Nachname" component={ TextField } /></div>
            <div><Field name="birthdate" label="Geburtsdatum" component={ BithdayField }/></div>
            <div><Field name="vacationDays" label="Urlaubstage im Jahr" component={ TextField }/></div>
            <br />
            <SendButton>Speichern</SendButton>
        </form>
    </React.Fragment>
)

// isRequired is not needed because of default props. but we want a "robust" component :D
export default compose(
    setDisplayName('Employee'),
    setPropTypes({
        title: PropTypes.string.isRequired,
        onSubmit: PropTypes.func.isRequired
    }),
    defaultProps({
        title: '#FormUser#',
        onSubmit: f => f
    }),
    pure
)(Employee)
