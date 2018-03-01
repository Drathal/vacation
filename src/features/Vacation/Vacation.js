import { connect } from 'react-redux'
import { Map } from 'immutable'
import { reduxForm, reset } from 'redux-form/immutable'
import { push } from 'react-router-redux'

import Vacations from '../../components/Vacation'
import { toJS } from '../../hoc/toJS'
import { addVacation } from './redux/actions'
import { getRemainingHolydayById } from './redux/selectors'
import { getEmplyees } from '../../features/Employee/redux/selectors'
import validate from './validateForm'

const employees2SelectboxOptions = employees =>
    employees.map(
        employee => Map({
            label: `${employee.get('firstname')} ${employee.get('name')}`,
            value: employee.get('uuid')
        })
    )

const mapStateToProps = state => ({
    employeeSelectbox: employees2SelectboxOptions(getEmplyees(state)),
    remainingHolydays: getRemainingHolydayById(state),
    title: 'Urlaubsantrag'
})

const addVacationAndClearForm = dispatch => vacation => {
    dispatch(addVacation(vacation))
    dispatch(reset('vacationForm'))
    dispatch(push('/'))
}

const mapDispatchToProps = dispatch => ({
    onSubmit: vacation => addVacationAndClearForm(dispatch)(vacation)
})

export default connect(mapStateToProps, mapDispatchToProps)(
    reduxForm({ form: 'vacationForm', validate })(toJS(Vacations))
)
