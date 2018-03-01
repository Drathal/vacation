// this is to get rid of that switch statements in "normal" reducers
export default (initialState, handlers) =>
    (state, action) => {
        if (state === undefined) {state = initialState}

        if (handlers.hasOwnProperty(action.type)) {
            return handlers[action.type](state, action)
        }

        return state
    }

