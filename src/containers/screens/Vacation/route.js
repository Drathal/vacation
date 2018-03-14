import { asyncComponent } from 'react-async-component'
import BeachAccessIcon from 'material-ui-icons/BeachAccess'

export default {
    path: `${process.env.PUBLIC_URL}/vacation/add`,
    name: 'Vacation',
    icon: BeachAccessIcon,
    component: asyncComponent({ resolve: () => import('./Vacation') })
}
