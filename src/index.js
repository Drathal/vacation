import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'

import App from 'containers/App'
import withTheme from 'hoc/withTheme'
import registerServiceWorker from 'config/registerServiceWorker'
import store, { history } from 'config/store'

const AppWithTheme = withTheme(App)

render(
    <Provider store={ store }>
        <ConnectedRouter history={ history }>
            <AppWithTheme/>
        </ConnectedRouter>
    </Provider>
    , document.getElementById('root')
)

registerServiceWorker()
