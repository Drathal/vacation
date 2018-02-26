import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form/immutable'
import { compose, defaultProps, setDisplayName, setPropTypes, pure } from 'recompose'
import Button from 'material-ui/Button'
import TextField from '../TextField'
import DatePicker from '../DatePicker'
import Select from '../Select'

// field should be an injected dependency
const Vacation = ({ title, remainingHolydays, employeeSelectbox, selectedEmployee, handleSubmit, onSubmit }) => (
    <section>
        <h1>Urlaubsantrag</h1>
        <form onSubmit={ handleSubmit(onSubmit) }>
            <div><Field name="fromId" label="Mitarbeiter" options={ employeeSelectbox } component={ Select }/></div>
            <div><Field name="startDate" label="Urlaubsanfang" component={ DatePicker }/></div>
            <div><Field name="endDate" label="Urlaubsende" component={ DatePicker } /></div>
            <div><TextField label="Resturlaubstage" value={ remainingHolydays } /></div>
            <br />
            <div className={ 'right' }>
                <Button variant="raised" color="primary" type='submit' value="ok">Senden</Button>
            </div>
        </form>
    </section>
)

export default compose(
    setDisplayName('Vacation'),
    setPropTypes({
        title: PropTypes.string.isRequired
    }),
    defaultProps({
        title: '#FormVacation#',
        employeeIds: []
    }),
    pure
)(Vacation)
