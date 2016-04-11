import { connect } from 'react-redux'

import Footer from '../components/Footer'
import { setVisibilityFilter } from '../actions'

const mapStateToProps = (state) => {
  return {
    activeFilter: state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setFilter: (filter) => {
      dispatch(setVisibilityFilter(filter))
    }
  }
}

const FooterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer)

export default FooterContainer
