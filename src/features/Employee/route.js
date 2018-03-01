import { asyncComponent } from 'react-async-component'

export default {
    path: '/employee/add',
    name: 'Employee',
    icon: asyncComponent({ resolve: () => import('material-ui-icons/Face') }),
    component: asyncComponent({ resolve: () => import('./Employee') })
}
