import * as types from '../constants/ActionTypes'

const initialState = {
  list: {}
}

const demoReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.REMOVE_ITEM:
      state.list.splice(action.id, 1)
      return Object.assign({}, state, { list: state.list })

    case types.ADD_LIST:
      state.list.push(action.data)
      return Object.assign({}, state, { list: state.list })

    case types.GET_LIST:
      if (state.list.length > 0) {
        return Object.assign({}, state)
      }
      return Object.assign({}, state, { list: action.payLoad })
    default:
      return state
  }
}

export default demoReducer
