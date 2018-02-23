import { createStore, /* applyMiddleware,*/ compose } from "redux"
import throttle from 'lodash.throttle'
import { loadState, saveState } from './localStorage';
import { fromJS } from 'immutable'
import initialState from './config/initialState'
import reducers from "./reducers"

// init store with localStorage or default values
const persistedState = fromJS(loadState()) || initialState;

const store = createStore(
    reducers,
    persistedState,
    compose(
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

// save from time to time (1000ms)
store.subscribe(throttle(() => {
    const state = store.getState().toJS()
    saveState({
        employees: state.employees,
        vacations: state.vacations,
    });
}, 1000))

export default store
