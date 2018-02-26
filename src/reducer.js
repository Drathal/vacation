import { combineReducers } from 'redux-immutable'
import { reducer as form } from 'redux-form/immutable'

import employees from './features/Employee/redux/reducer'
import vacations from './features/Vacation/redux/reducer'

export default combineReducers({
    employees,
    vacations,
    form
})
