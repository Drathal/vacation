import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'

import App from 'containers/App'
import withMUI from 'hoc/withMUI'
import registerServiceWorker from 'config/registerServiceWorker'
import store, { history } from 'config/store'

const AppWithMUI = withMUI(App)

render(
    <Provider store={ store }>
        <ConnectedRouter history={ history }>
            <AppWithMUI/>
        </ConnectedRouter>
    </Provider>
    , document.getElementById('root')
)

registerServiceWorker()
