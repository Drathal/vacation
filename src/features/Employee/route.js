import { Employee } from './'

export default {
    path: '/',
    name: 'Employee',
    childRoutes: [
        [
            {
                path: 'employee',
                name: 'Employee',
                component: Employee,
                isIndex: true
            }
        ]
    ]
}
