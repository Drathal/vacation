import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import Menu from '../../components/Menu'
import routes from '../../routes'

const menuitems = routes.map(
    ({ path, icon }) => ({
        path,
        icon
    })
)

const mapStateToProps = (state, ownProps) => ({
    menuitems,
    title: 'Urlaubsplaner'
})

const mapDispatchToProps = dispatch => ({
    onMenuItemClick: path => dispatch(push(path))
})

export default connect(mapStateToProps, mapDispatchToProps)(Menu)
