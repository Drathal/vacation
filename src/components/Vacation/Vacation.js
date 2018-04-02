import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form/immutable'
import { compose, defaultProps, setDisplayName, setPropTypes, pure } from 'recompose'

import Typography from 'material-ui/Typography'

import TextField from 'components/TextField'
import DatePicker from 'components/DatePicker'
import Select from 'components/Select'
import { SendButton } from './Vacation.styled'

const StartVacactionField = props => <DatePicker {...props} disablePast={true} />
const EndVacactionField = props => <DatePicker {...props} disablePast={true} />

const Vacation = ({ title, remainingHolydays, employeeSelectbox, handleSubmit, onSubmit }) => (
    <React.Fragment>
        <Typography variant="title" gutterBottom>
            {title}
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <Field name="fromId" label="Mitarbeiter" options={employeeSelectbox} component={Select} />
            </div>
            <div>
                <Field name="startDate" label="Urlaubsanfang" component={StartVacactionField} />
            </div>
            <div>
                <Field name="endDate" label="Urlaubsende" component={props => <EndVacactionField {...props} />} />
            </div>
            <div>
                <TextField label="Resturlaubstage" value={remainingHolydays} />
            </div>
            <br />
            <SendButton>Speichern</SendButton>
        </form>
    </React.Fragment>
)

export default compose(
    setDisplayName('Vacation'),
    setPropTypes({
        title: PropTypes.string.isRequired
    }),
    defaultProps({
        title: '#FormVacation#'
    }),
    pure
)(Vacation)
