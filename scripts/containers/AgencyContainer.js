import { connect } from 'react-redux'
import * as Actions from '../actions/Actions'
import Agency from '../components/Agency'

const mapStateToProps = (state) => {
  return {
    agencyList: state.agency.list,
    search: state.agency.search
  }
}

const mapDispatchProps = (dispatch) => ({
  getAgencyList: (args) => {
    dispatch(Actions.fetchAgencyList(args))
  }
})

export default connect(mapStateToProps, mapDispatchProps)(Agency)
