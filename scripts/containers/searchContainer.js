import { connect } from 'react-redux'
import * as Actions from '../actions/Actions'
import Search from '../components/Search'

const mapStateToProps = (state) => (
  {
    search: state.agency.search
  }
)

const mapDispatchProps = (dispatch) => ({
  getAgencyList: (args) => {
    dispatch(Actions.fetchAgencyList(args))
  }
})

export default connect(mapStateToProps, mapDispatchProps)(Search)
