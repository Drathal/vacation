export const getEmplyees = state => state.get('employees')

export const getFullNameById = (state, id) =>
    state
        .get('employees')
        .filter(emplyee => emplyee.get('uuid') === id)
        .map(emplyee => `${emplyee.get('firstname')} ${emplyee.get('name')}`)
        .first()
        .toString()
