import React from 'react'
import PropTypes from 'prop-types'
import { compose, defaultProps, setDisplayName, setPropTypes, pure } from 'recompose'
import Button from 'material-ui/Button'
import { Field } from "redux-form/immutable"
import TextField from '../TextField'
import DatePicker from '../DatePicker'

const Employee = ({ title, handleSubmit, onSubmit }) => (
    <section>
        <h1>Mitarbeiter hinzufügen</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div><Field name="firstname" component={TextField} label="Name"/></div>
            <div><Field name="name" label="Nachname" component={TextField} /></div>
            <div><Field name="birthdate" label="Geburtsdatum" component={DatePicker}/></div>
            <div><Field name="vacationDays" label="Urlaubstage im Jahr" component={TextField} /></div>
            <br />
            <div className={'right'}>
                <Button variant="raised" color="primary" type='submit'>Speichern</Button>
            </div>
        </form>
    </section>
);

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
