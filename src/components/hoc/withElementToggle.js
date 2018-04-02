import { compose, withState, withHandlers } from 'recompose'

export default compose(
    withState('anchorElement', 'element', null),
    withHandlers({
        show: ({ element }) => ({ currentTarget }) => element(currentTarget),
        hide: ({ element }) => e => element(null),
        toggle: ({ element }) => ({ currentTarget }) =>
            element(currentElement => (currentElement ? null : currentTarget))
    })
)
