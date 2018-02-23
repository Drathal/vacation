import { connect } from "react-redux"
import { reduxForm } from "redux-form/immutable"
import { Map } from "immutable"

import { diffDate, rangeString } from '../utils/date'
import { actions as vacationActions, getVacationDaysLeft } from "../reducers/vacation"
import { getFullName } from "../reducers/employee"
import Approve from "../components/Approve"

// could be moved to reducers / selectors - Map section is hard to read -> refactor
const enrichEmployeeData = state =>
    state
        .get('vacations')
        .filter(vacation => vacation.get('approved') === null)
        .map(vacation => vacation.merge(
            Map({
                name: getFullName(state.get('employees'), vacation.get('fromId')),
                vacationDays:
                    diffDate(vacation.get('endDate'), vacation.get('startDate'))
                    + " / "
                    + getVacationDaysLeft(state, vacation.get('fromId'))
                ,
                period: rangeString(vacation.get('startDate'),vacation.get('endDate'))
            })
        ))

// we could also inject translations from here. at the moment only title is "translated"
const mapStateToProps = (state, ownProps) => ({
    data: enrichEmployeeData(state).toJS(),
    title: "Urlaubsantrag"
})

const mapDispatchToProps = dispatch => ({
    onApprove: vacationId => dispatch(vacationActions.approve(vacationId)),
    onDecline: vacationId => dispatch(vacationActions.decline(vacationId)),
})

// connect should be composed -> refactor
export default connect(mapStateToProps, mapDispatchToProps)(
    reduxForm({ form: "approveForm" })(Approve)
)
