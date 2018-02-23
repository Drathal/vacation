import { fromJS , Map } from "immutable"
import uuid from "uuid/v4"
import createReducer from "../utils/createReducer"

// more than a simple reducer - module pattern used to have reducer / selectors / action in one place

const initialState = fromJS([]);

export const EMPLOYEE_ADD = 'VM:EMPLOYEE_ADD'

const add = payload => ({
    type: EMPLOYEE_ADD,
    payload
});

export const actions = { add };

const reducerAdd = (state, { payload }) =>
    state.push(
        payload.set('uuid', uuid())
    )

export default createReducer(initialState, {
    [EMPLOYEE_ADD] : reducerAdd
})

export const getEmplyees = (state) => state.get('employees').map(
    employee => Map({
        label: `${employee.get('firstname')} ${employee.get('name')}`,
        value: employee.get('uuid')
    })
);

export const getFullName = (emplyees, uuid) =>
    emplyees
        .filter(emplyee => emplyee.get('uuid') === uuid)
        .map(emplyee => `${emplyee.get('firstname')} ${emplyee.get('name')}`)
        .first()
        .toString()
