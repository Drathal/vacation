process.env.NODE_ENV = 'test'
jasmine.DEFAULT_TIMEOUT_INTERVAL = 240000

const enzyme = require('enzyme')
const Adapter = require('enzyme-adapter-react-16')
enzyme.configure({ adapter: new Adapter() })
