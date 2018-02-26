import { Vacation } from './'

export default {
    path: '/',
    name: 'Vacation',
    childRoutes: [
        [
            {
                path: 'vacation',
                name: 'Vacation',
                component: Vacation,
                isIndex: true
            }
        ]
    ]
}
