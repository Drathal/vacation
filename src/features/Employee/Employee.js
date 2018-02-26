import { connect } from 'react-redux'
import { reduxForm, reset } from 'redux-form/immutable'

import Employee from '../../components/Employee'
import { addUser } from './redux/actions'
import validate from './validateForm'

const mapStateToProps = state => ({
    title: 'User hinzufügen'
})

const addUserAndClearForm = dispatch => employee => {
    dispatch(addUser(employee))
    dispatch(reset('employeeForm'))
}

const mapDispatchToProps = dispatch => ({
    onSubmit: employee => addUserAndClearForm(dispatch)(employee)
})

export default connect(mapStateToProps, mapDispatchToProps)(
    reduxForm({ form: 'employeeForm', validate })(Employee)
)
