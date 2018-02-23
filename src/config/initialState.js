import { fromJS } from 'immutable'
import uuid from 'uuid/v4'

const id1 = uuid();
const id2 = uuid();

export default fromJS({
    employees: [
        {
            uuid: id1,
            firstname: 'Markus',
            name: 'Dethlefsen',
            birthdate: '1970-11-21',
            vacationDays: 30
        },
        {
            uuid: id2,
            firstname: 'Theo',
            name: 'Müller',
            birthdate: '1986-01-01',
            vacationDays: 25
        }
    ],
    vacations: [
        {
            uuid: uuid(),
            fromId: id1,
            startDate: '2018-10-01',
            endDate: '2018-10-05',
            approved: null
        },
        {
            uuid: uuid(),
            fromId: id1,
            startDate: '2018-06-05',
            endDate: '2018-06-15',
            approved: null
        },
        {
            uuid: uuid(),
            fromId: id2,
            startDate: '2018-07-04',
            endDate: '2018-07-13',
            approved: null
        }
    ],
});
