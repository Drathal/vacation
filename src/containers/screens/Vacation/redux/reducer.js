import uuid from 'uuid/v4'
import { fromJS } from 'immutable'

import createReducer from 'utils/createReducer'
import { VACATION_ADD, VACATION_APPROVE, VACATION_DECLINE } from './constants'
import initialState from './initialState'

export const root = 'vacations'

/**
 * actions
 */

export const addVacation = payload => ({
    type: VACATION_ADD,
    payload
})

export const approveVacation = uuid => ({
    type: VACATION_APPROVE,
    payload: {
        uuid
    }
})

export const declineVacation = uuid => ({
    type: VACATION_DECLINE,
    payload: {
        uuid
    }
})

/**
 * reducer functions
 */

export const reducerAdd = (state, { payload }) => state.push(payload.set('uuid', uuid()).set('approved', null))

export const reducerApprove = (state, { payload: { uuid } }) =>
    state.update(state.findIndex(item => item.get('uuid') === uuid), item => item.set('approved', true))

export const reducerDecline = (state, { payload: { uuid } }) =>
    state.delete(state.findIndex(item => item.get('uuid') === uuid))

export const reducerDeclineAlternative = (state, { payload: { uuid } }) =>
    state.update(state.findIndex(item => item.get('uuid') === uuid), item => item.set('approved', false))

/**
 * main reducer
 */
export default createReducer(fromJS(initialState), {
    [VACATION_ADD]: reducerAdd,
    [VACATION_APPROVE]: reducerApprove,
    [VACATION_DECLINE]: reducerDecline
})
