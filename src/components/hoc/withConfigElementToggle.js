import { compose, withState, withHandlers } from 'recompose'

export default name => compose(
    withState(`anchorElement${name}`, 'element', null),
    withHandlers({
        [`show${name}`]: ({ element }) => ({ currentTarget }) => element(currentTarget),
        [`hide${name}`]: ({ element }) => e => element(null),
        [`toggle${name}`]: ({ element }) => ({ currentTarget }) => element(currentElement => currentElement ? null : currentTarget)
    })
)
