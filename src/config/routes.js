//import approveRoute from 'containers/screens/Approve/route'
//import employeeRoute from 'containers/screens/Employee/route'
//import vacationRoute from 'containers/screens/Vacation/route'

import { asyncComponent } from 'react-async-component'
import FaceIcon from 'material-ui-icons/Face'

export default [
    //approveRoute,
    //employeeRoute
    //vacationRoute
    {
        path: `${process.env.PUBLIC_URL}/test`,
        name: 'Employee',
        icon: FaceIcon,
        component: asyncComponent({ resolve: () => import('components/EmployeeForm') })
    }
]
