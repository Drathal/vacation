import uuid from 'uuid/v4'
import { fromJS } from 'immutable'

import createReducer from 'utils/createReducer'
import { EMPLOYEE_ADD } from './constants'
import initialState from './initialState'

export const root = 'employees'

/**
 * actions
 */

export const addEmployee = payload => ({
    type: EMPLOYEE_ADD,
    payload
})

/**
 * reducer functions
 */

export const reducerAdd = (state, { payload }) => state.push(payload.set('uuid', uuid()))

/**
 * main reducer
 */

export default createReducer(fromJS(initialState), {
    [EMPLOYEE_ADD]: reducerAdd
})
