import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'

import './index.css'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
import store, { history } from './store'

render(
    <Provider store={ store }>
        <ConnectedRouter history={ history }>
            <App />
        </ConnectedRouter>
    </Provider>
    , document.getElementById('root')
)

registerServiceWorker()
