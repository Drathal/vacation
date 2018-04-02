import { Container } from 'unstated'
import uuid from 'uuid/v4'

const initalState = {
    employees: [
        {
            uuid: '1',
            firstname: 'Peter',
            name: 'Pummeluf',
            birthdate: '1970-11-21',
            vacationDays: 30
        },
        {
            uuid: '2',
            firstname: 'Annie',
            name: 'Art',
            birthdate: '1986-01-01',
            vacationDays: 25
        }
    ]
}

export default class Employee extends Container {
    constructor() {
        super()
        this.state = initalState
    }
    add = employee => {
        this.setState({
            employees: [
                ...this.state.employees,
                {
                    uuid: uuid(),
                    firstname: employee.firstname,
                    name: employee.name,
                    birthdate: employee.birthdate,
                    vacationDays: employee.vacationDays
                }
            ]
        })
    }
}
