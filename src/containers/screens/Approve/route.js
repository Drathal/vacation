import { asyncComponent } from 'react-async-component'
import DoneIcon from 'material-ui-icons/Done'

export default {
    path: `${process.env.PUBLIC_URL}/`,
    name: 'Approve',
    icon: DoneIcon,
    component: asyncComponent({ resolve: () => import('./Approve') }),
    isIndex: true,
    exact: true
}
