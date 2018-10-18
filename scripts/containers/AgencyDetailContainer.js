import { connect } from 'react-redux'
import * as Actions from '../actions/Actions'
import AgencyDetail from '../components/AgencyDetail'

const mapStateToProps = (state) => {
  return {
    data: state.agency.detail
  }
}

const mapDispatchProps = (dispatch) => ({
  getAgencyDetail: (args) => {
    dispatch(Actions.fetchAgencyDetail(args))
  }
})

export default connect(mapStateToProps, mapDispatchProps)(AgencyDetail)
