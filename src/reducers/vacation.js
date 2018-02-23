import { fromJS } from "immutable"
import createReducer from "../utils/createReducer"
import { diffDate } from "../utils/date"
import uuid from "uuid/v4"

// more than a simple reducer - module pattern used to have reducer / selectors / action in one place

const initialState = fromJS([])

export const VACATION_ADD = "VM:VACATION_ADD"
export const VACATION_APPROVE = "VM:VACATION_APPROVE"
export const VACATION_DECLINE = "VM:VACATION_DECLINE"

const add = payload => ({
    type: VACATION_ADD,
    payload
})

const approve = uuid => ({
    type: VACATION_APPROVE,
    payload: {
        uuid
    }
})

const decline = uuid => ({
    type: VACATION_DECLINE,
    payload: {
        uuid
    }
})

export const actions = {
    add,
    approve,
    decline
}

const reducerAdd = (state, { payload }) =>
    state.push(
        payload
            .set('uuid', uuid())
            .set('approved', null)
    )

const reducerApprove = (state, { payload: { uuid } }) =>
    state.update(
        state.findIndex(item => item.get("uuid") === uuid),
        item => item.set("approved", true)
    )

const reducerDecline = (state, { payload: { uuid } }) =>
    state.delete(
        state.findIndex(item => item.get("uuid") === uuid)
    )

/*
with this impementation we dont throw declined vacations away:

const reducerDecline = (state, { payload: { uuid } }) =>
    state.update(
        state.findIndex(item => item.get("uuid") === uuid),
        item => item.set("approved", false)
    );
*/

export default createReducer(initialState, {
    [VACATION_ADD]: reducerAdd,
    [VACATION_APPROVE]: reducerApprove,
    [VACATION_DECLINE]: reducerDecline
});

// hard to read - should be split -> refactor
export const getVacationDaysLeft = (state, employeeId = null) => {

    // check if we have a employeeId
    employeeId = employeeId || state.getIn(['form', 'vacationForm', 'values', 'fromId'])
    if (!employeeId) return ""

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

    let currentDays = 0;
    if (startDate && endDate) {
        currentDays = diffDate(endDate, startDate)
        currentDays = (currentDays > 0) ? currentDays : 0
    }

    // go trough all accepted vacations and substract from max vacation days
    const leftDays = state
        .get('vacations')
        .filter(f => f.get('fromId') === employeeId && f.get('approved') === true)
        .reduce((days, entry) => {
            return days - diffDate(entry.get('endDate'), entry.get('startDate'))
        }, baseDays )

    return leftDays - currentDays
}
