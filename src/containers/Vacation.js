import { connect } from "react-redux"
import Vacations from "../components/Vacation"
import { actions as vacationActions, getVacationDaysLeft } from "../reducers/vacation"
import { getEmplyees } from "../reducers/employee"
import { reduxForm, formValueSelector, reset } from "redux-form/immutable"

const selector = formValueSelector('vacationForm')

const validate = values => {
    const errors = {}

    if (!values.get("fromId")) {
        errors.fromId = "Pflichtfeld";
    }

    if (!values.get("startDate")) {
        errors.startDate = "Pflichtfeld";
    }

    if (!values.get("endDate")) {
        errors.endDate = "Pflichtfeld";
    }

    if (values.get("vacationLeft") < 0) {
        errors.vacationLeft = "No Days Left";
    }

    return errors;
}

const mapStateToProps = (state) => ({
    employeeIds: getEmplyees(state).toJS(),
    formValues: selector(state, 'fromId', 'startDate', 'endDate', 'vacationLeft'),
    vacationLeft: getVacationDaysLeft(state),
    title: "Urlaubsantrag"
})

const mapDispatchToProps = dispatch => ({
    validate,
    onSubmit: vacation => {
        dispatch(vacationActions.add(vacation))
        dispatch(reset('vacationForm'))
    }
})

// connect should be composed -> refactor
export default connect(mapStateToProps, mapDispatchToProps)(
    reduxForm({ form: "vacationForm", validate})(Vacations)
)
