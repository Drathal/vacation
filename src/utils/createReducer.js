export default (initialState, handlers) =>
    (state, action) => {
        if (state === undefined) {state = initialState}

        if (handlers.hasOwnProperty(action.type)) {
            return handlers[action.type](state, action)
        }

        return state
    }

