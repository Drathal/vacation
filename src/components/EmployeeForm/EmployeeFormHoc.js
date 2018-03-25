import React from 'react'
import { Formik } from 'formik'
import { Subscribe } from 'unstated'

import EmployeeForm from './EmployeeForm'
import EmployeeContainer from 'containers/EmployeeContainer'

const initialValues = {
    firstname: '',
    name: '',
    birthdate: null,
    vacationDays: ''
}

const validate = (values, props) => {

    const errors = {}

    if (!!!values.firstname) {
        errors.firstname = 'Firstname is required'
    }

    const xxx = Object.keys(values).map((x, y) => {
        console.info(x, values[x])
        return null
    })

    console.info('xxx',xxx)

    return errors

    /*
    firstname: !!!values.firstname && 'Firstname is required' ,
    name: !!!values.name && 'Name is required',
    birthdate: !!!values.birthdate  && 'Birthdate is required'
    */
}

const onSubmit = employee => (values, options) => {
    options.setSubmitting(false)
    options.resetForm()
    employee.add(values)
    console.info('onSubmit',values,employee.state)
}

export default () => (
    <Subscribe to={ [EmployeeContainer] } >
        { employee => (
            <Formik
                onSubmit={ onSubmit(employee) }
                validate= { validate }
                initialValues = { initialValues }
                component={ EmployeeForm }
            />
        ) }
    </Subscribe>
)
