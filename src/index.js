import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'unstated'
import { BrowserRouter as Router } from 'react-router-dom'

import App from 'containers/App'
import withMUI from 'hoc/withMUI'
import registerServiceWorker from 'config/registerServiceWorker'

const AppWithMUI = withMUI(App)

render(
    <Provider>
        <Router>
            <AppWithMUI />
        </Router>
    </Provider>,

    document.getElementById('root')
)

registerServiceWorker()
