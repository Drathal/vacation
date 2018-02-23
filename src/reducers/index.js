import { combineReducers } from 'redux-immutable'
import { reducer as form } from 'redux-form/immutable'

import employees from './employee'
import vacations from './vacation'

export default combineReducers({
    employees,
    vacations,
    form
})
