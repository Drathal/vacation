
import initStoryshots from '@storybook/addon-storyshots'

/*
jest.mock('material-ui/Modal', () => {
    return function Modal(props) {
        return props.children
    }
})
*/

initStoryshots({ storyKindRegex: /^MainMenu$/ })
