import uuid from 'uuid/v4'
import { fromJS } from 'immutable'

import createReducer from '../../../utils/createReducer'
import { ADD_USER } from './constants'
import initialState from './initialState'

export const root = 'employees'

export const addUser = payload => ({
    type: ADD_USER,
    payload
})

const reducerAdd = (state, { payload }) =>
    state.push(payload.set('uuid', uuid()))

export default createReducer(fromJS(initialState), {
    [ADD_USER]: reducerAdd
})

