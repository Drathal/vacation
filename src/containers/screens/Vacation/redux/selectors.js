import { diffDate } from 'utils/date'

export const getRemainingHolydayById = (state, employeeId = null) => {
    // check if we have a employeeId
    employeeId = employeeId || state.getIn(['form', 'vacationForm', 'values', 'fromId'])
    if (!employeeId) {
        return ''
    }

    // get max vacation days for employee
    const baseDays = state
        .get('employees')
        .filter(f => f.get('uuid') === employeeId)
        .map(f => f.get('vacationDays'))
        .first()
        .toString()

    // calculate current vaction (hacky)
    const startDate = state.getIn(['form', 'vacationForm', 'values', 'startDate'])
    const endDate = state.getIn(['form', 'vacationForm', 'values', 'endDate'])

    let currentDays = 0
    if (startDate && endDate) {
        currentDays = diffDate(endDate, startDate)
        currentDays = currentDays > 0 ? currentDays : 0
    }

    // go trough all accepted vacations and substract from max vacation days
    const leftDays = state
        .get('vacations')
        .filter(f => f.get('fromId') === employeeId && f.get('approved') === true)
        .reduce((days, entry) => {
            return days - diffDate(entry.get('endDate'), entry.get('startDate'))
        }, baseDays)

    return leftDays - currentDays
}
