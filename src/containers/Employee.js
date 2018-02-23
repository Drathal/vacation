import { connect } from "react-redux";
import Employee from "../components/Employee";
import { actions as employeeActions } from "../reducers/employee";
import { reduxForm, reset } from "redux-form/immutable";

// easy dump validation - just a PoC
const validate = values => {
    const errors = {};

    if (!values.get("firstname")) {
        errors.firstname = "Pflichtfeld";
    }

    if (!values.get("name")) {
        errors.name = "Pflichtfeld";
    }

    if (!values.get("vacationDays")) {
        errors.vacationDays = "Pflichtfeld";
    } else if (isNaN(Number(values.get("vacationDays")))) {
        errors.vacationDays = "Nur Zahlen sind erlaubt.";
    }

    if (!values.get("birthdate")) {
        errors.birthdate = "Pflichtfeld";
    }

    return errors;
};

const mapStateToProps = (state, ownProps) => ({
    title: "Mitarbeiter hinzufügen"
});

// on Submit dispatch changes and clear form - could also dispatch save notice here
const mapDispatchToProps = dispatch => ({
    validate,
    onSubmit: employee => {
        dispatch(employeeActions.add(employee))
        dispatch(reset('employeeForm'))
    }
});

// connect should be composed -> refactor
export default connect(mapStateToProps, mapDispatchToProps)(
    reduxForm({ form: "employeeForm", validate})(Employee)
);
