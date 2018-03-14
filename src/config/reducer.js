import { combineReducers } from 'redux-immutable'
import { reducer as form } from 'redux-form/immutable'
import { routerReducer as router } from 'react-router-redux'

import employees from 'containers/screens/Employee/redux/reducer'
import vacations from 'containers/screens/Vacation/redux/reducer'

export default combineReducers({
    employees,
    vacations,
    form,
    router
})
