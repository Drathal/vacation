import { asyncComponent } from 'react-async-component'
import FaceIcon from 'material-ui-icons/Face'

export default {
    path:  `${process.env.PUBLIC_URL}/employee/add`,
    name: 'Employee',
    icon: FaceIcon,
    component: asyncComponent({ resolve: () => import('./Employee') })
}
