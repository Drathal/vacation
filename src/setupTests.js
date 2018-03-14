import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

process.env.NODE_ENV = 'test'
jasmine.DEFAULT_TIMEOUT_INTERVAL = 240000

Enzyme.configure({ adapter: new Adapter() })

