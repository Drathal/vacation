import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'

import './index.css'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
import withTheme from './hoc/withTheme'
import store, { history } from './store'
import routes from './routes'

const AppWithTheme = withTheme(App)

render(
    <Provider store={ store }>
        <ConnectedRouter history={ history }>
            <AppWithTheme routes={ routes }/>
        </ConnectedRouter>
    </Provider>
    , document.getElementById('root')
)

registerServiceWorker()
