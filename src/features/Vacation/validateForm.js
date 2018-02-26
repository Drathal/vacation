export default values => {
    const errors = {}

    if (!values.get('fromId')) {
        errors.fromId = 'Pflichtfeld'
    }

    if (!values.get('startDate')) {
        errors.startDate = 'Pflichtfeld'
    }

    if (!values.get('endDate')) {
        errors.endDate = 'Pflichtfeld'
    }

    if (values.get('vacationLeft') < 0) {
        errors.vacationLeft = 'No Days Left'
    }

    return errors
}
