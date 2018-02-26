import { combineReducers } from 'redux-immutable'
import { reducer as form } from 'redux-form/immutable'

import employees from './employee'
import vacations from './vacation'
import user, { root } from '../features/Employee/redux/reducer'

export default combineReducers({
    employees,
    vacations,
    [root]: user,
    form
})
