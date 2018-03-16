import enzyme from 'enzyme/build/index'
import Adapter from 'enzyme-adapter-react-16'

process.env.NODE_ENV = 'test'
jasmine.DEFAULT_TIMEOUT_INTERVAL = 240000

enzyme.configure({ adapter: new Adapter() })

jest.mock('material-ui/Modal', () => {
    return function Modal(props) {
        return props.children
    }
})

