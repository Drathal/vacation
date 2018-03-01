import request from 'superagent'

// example quick and dirty side effect (as middleware) - not used
export default store => next => action => {
    next(action)

    switch (action.type) {
        case 'GET_DATA':
            request.get('data/todo-data.json').end((err, res) => {
                if (err) {
                    return next({
                        type: 'GET_DATA_ERROR',
                        err
                    })
                }
                const data = JSON.parse(res.text)
                next({
                    type: 'GET_DATA_RECEIVED',
                    data
                })
            })
            break
        default:
            break
    }
}
