import { asyncComponent } from 'react-async-component'

export default {
    path: '/vacation/add',
    name: 'Vacation',
    icon: asyncComponent({ resolve: () => import('material-ui-icons/BeachAccess') }),
    component: asyncComponent({ resolve: () => import('./Vacation') })
}
