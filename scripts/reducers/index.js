import { combineReducers } from 'redux'
import demoReducer from './demoReducer.js'
import agency from './agency'
import { reducer as reduxFormReducer } from 'redux-form'

const rootReducer = combineReducers({
  demoReducer,
  form: reduxFormReducer,
  agency
})

export default rootReducer
