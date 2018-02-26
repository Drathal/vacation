import { Approve } from './'

export default {
    path: '/',
    name: 'Approve',
    childRoutes: [
        [
            {
                path: 'approve',
                name: 'Approve',
                component: Approve,
                isIndex: true
            }
        ]
    ]
}
