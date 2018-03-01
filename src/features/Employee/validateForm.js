export default values => {
    const errors = {}

    if (!values.get('firstname')) {
        errors.firstname = 'Pflichtfeld'
    }

    if (!values.get('name')) {
        errors.name = 'Pflichtfeld'
    }

    if (!values.get('vacationDays')) {
        errors.vacationDays = 'Pflichtfeld'
    } else if (isNaN(Number(values.get('vacationDays')))) {
        errors.vacationDays = 'Nur Zahlen sind erlaubt.'
    }

    if (!values.get('birthdate')) {
        errors.birthdate = 'Pflichtfeld'
    }

    return errors
}
