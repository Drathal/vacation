import { connect } from 'react-redux'
import { reduxForm, reset } from 'redux-form/immutable'

import Employee from 'components/Employee'
import { addEmployee } from './redux/actions'
import validate from './validateForm'

const mapStateToProps = state => ({
    title: 'User hinzufügen'
})

const addEmployeeAndClearForm = dispatch => employee => {
    dispatch(addEmployee(employee))
    dispatch(reset('employeeForm'))
}

const mapDispatchToProps = dispatch => ({
    onSubmit: employee => addEmployeeAndClearForm(dispatch)(employee)
})

export default connect(mapStateToProps, mapDispatchToProps)(
    reduxForm({ form: 'employeeForm', validate })(Employee)
)
