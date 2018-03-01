import { asyncComponent } from 'react-async-component'

export default {
    path: '/',
    name: 'Approve',
    icon:  asyncComponent({ resolve: () => import('material-ui-icons/Done') }),
    component:  asyncComponent({ resolve: () => import('./Approve') }),
    isIndex: true,
    exact: true
}
