import { connect } from 'react-redux'
import * as Actions from '../actions/Actions'
import List from '../components/List'

const mapStateToProps = (state) => ({
  list: state.demoReducer.list
})

const mapDispatchProps = (dispatch) => ({
  getList: () => {
    dispatch(Actions.getList())
  },
  delItem: (id) => {
    dispatch(Actions.delItem(id))
  }
})

export default connect(mapStateToProps, mapDispatchProps)(List)
