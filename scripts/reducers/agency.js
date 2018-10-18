import * as types from '../constants/ActionTypes'


const initialState = {
  list: [],
  search: {
    orderBy: 1,
    pageNum: 1,
    pageSize: 13,
    queryString: [],
  },
  detail: {}
}


const Agency = (state = initialState, action) => {
  switch (action.type) {
    case types.RECEIVE_AGENCYLIST:
        const arr = action.data
      // const arr = state.list.concat(action.data)
      return Object.assign({}, state, { list: arr })
    case types.RECEIVE_SEARCHAGENCYLIST:
      state.list = action.data;
      return Object.assign({}, state, { list: state.list })
    case types.RECEIVE_AGENCYDETAILLIST:
      state.detail = action.data;
      return Object.assign({}, state, { detail: state.detail })
    default:
      return state
  }
}

export default Agency
