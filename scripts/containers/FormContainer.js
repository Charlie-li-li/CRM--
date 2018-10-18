import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { createSelector } from 'reselect'
import Form from '../components/Form'
import * as Actions from '../actions/Actions'

const validate = values => {
  const errors = {}
  const validateList = [
    { key: 'name', errorText: '请输入用户名' },
    { key: 'age', errorText: '请输入用户名' }
  ]
  for (const item of validateList) {
    if (values[item.key] === '') {
      errors[item.key] = item.errorText
    }
  }
  return errors
}

const FormContainer = reduxForm({
  form: 'demoForm',
  validate
})(Form)

const selectorItem = state => {
  const { demoReducer } = state
  if (demoReducer.list && demoReducer.list.list) {
    return demoReducer.list.list.length
  }
  return 'none'
}

const itemName = createSelector(
  selectorItem,
  list => list
)

const itemAge = createSelector(
  itemName,
  (val) => val + val
)

const mapStateToProps = (state) => ({
  initialValues: {
    name: `Name：${itemName(state)}`,
    age: itemAge(state)
  }
})

const mapDispatchProps = (dispatch) => ({
  saveItem: (data, callback) => {
    dispatch(Actions.saveItem(data, callback))
  }
})

export default connect(mapStateToProps, mapDispatchProps)(FormContainer)
