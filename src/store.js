import throttle from 'lodash.throttle'
import { fromJS } from 'immutable'
import { createStore, compose, applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

import { loadState, saveState } from './localStorage'
import reducer from './reducer'

export const history = createHistory()

const persistedState = fromJS(loadState() || {})

const store = createStore(
    reducer,
    persistedState,
    compose(
        applyMiddleware(routerMiddleware(history)),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    )
)

store.subscribe(throttle(() => {
    const state = store.getState().toJS()
    saveState({
        employees: state.employees,
        vacations: state.vacations
    })
}, 1000))

export default store
