import { root } from './initialState'

export const getEmplyees = state => state.get(root)

export const getFullNameById = (state, id) =>
    state
        .get(root)
        .filter(emplyee => emplyee.get('uuid') === id)
        .map(emplyee => `${emplyee.get('firstname')} ${emplyee.get('name')}`)
        .first()
        .toString()
