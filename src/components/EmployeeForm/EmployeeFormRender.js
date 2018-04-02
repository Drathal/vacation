// move this file out later -- sate / business logic

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

    Object.keys(values).forEach((name, y) => {
        if (!!!values[name]) {
            errors[name] = `${name} is required`
        }
    })

    return errors
}

const onSubmit = employee => (values, options) => {
    options.setSubmitting(false)
    options.resetForm()
    employee.add(values)
    console.info('onSubmit', values, employee.state)
}

const handleBlurCustom = (name, setFieldTouched) => () => setFieldTouched(name, true)
const handleChangeCustom = (name, setFieldValue) => value => setFieldValue(name, value)

const getFieldProps = props => (name, thirdParty = false) => ({
    name: name,
    onChange: thirdParty ? handleChangeCustom(name, props.setFieldValue) : props.handleChange,
    onBlur: thirdParty ? handleBlurCustom(name, props.setFieldTouched) : props.handleBlur,
    value: props.values[name],
    errorText: props.touched && props.touched[name] && props.errors && props.errors[name]
})

export default () => (
    <Subscribe to={[EmployeeContainer]}>
        {employee => (
            <Formik
                onSubmit={onSubmit(employee)}
                validate={validate}
                initialValues={initialValues}
                render={props => <EmployeeForm {...props} getFieldProps={getFieldProps(props)} />}
            />
        )}
    </Subscribe>
)
