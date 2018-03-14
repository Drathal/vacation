import { connect } from 'react-redux'
import { reduxForm } from 'redux-form/immutable'
import { Map } from 'immutable'

import { diffDate, rangeString } from 'utils/date'
import { toJS } from 'hoc/toJS'
import Approve from 'components/Approve'
import { getRemainingHolydayById } from 'containers/screens/Vacation/redux/selectors'
import { approveVacation, declineVacation } from 'containers/screens/Vacation/redux/actions'
import { getFullNameById } from 'containers/screens/Employee/redux/selectors'

const vacationLength = vacation => diffDate(vacation.get('endDate'), vacation.get('startDate'))

const vacationString = (state, vacation) =>
    `${vacationLength(vacation)} / ${getRemainingHolydayById(state, vacation.get('fromId'))}`

const mergeProperties = (state,vacation) => vacation.merge(
    Map({
        name: getFullNameById(state, vacation.get('fromId')),
        vacationDays: vacationString(state, vacation),
        period: rangeString(vacation.get('startDate'),vacation.get('endDate'))
    })
)

const enrichEmployeeData = state =>
    state
        .get('vacations')
        .filter(vacation => vacation.get('approved') === null)
        .map(vacation => mergeProperties(state, vacation))

const mapStateToProps = (state, ownProps) => ({
    data: enrichEmployeeData(state).toJS(),
    title: 'Urlaubsantrag'
})

const mapDispatchToProps = dispatch => ({
    onApprove: vacationId => dispatch(approveVacation(vacationId)),
    onDecline: vacationId => dispatch(declineVacation(vacationId))
})

export default connect(mapStateToProps, mapDispatchToProps)(
    reduxForm({ form: 'approveForm' })(toJS(Approve))
)
