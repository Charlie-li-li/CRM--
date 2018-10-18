import React, { Component, PropTypes } from 'react'
import { Field } from 'redux-form'
import { hashHistory } from 'react-router'
import Navigator from './Navigator'

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div className="formEml">
    <label>{label}</label>
    <input
      {...input}
      placeholder={label}
      type={type}
    />
    {
      touched && (
        (error && <span style={{ color: 'red' }} >{error}</span>
      ) || (
        warning && <span>{warning}</span>)
      )
    }
  </div>
)

const renderFieldPropTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  meta: PropTypes.object.isRequired
}

renderField.propTypes = renderFieldPropTypes

const propTypes = {
  saveItem: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
}

class Form extends Component {
  constructor(props) {
    super(props)
    this.submit = this.submit.bind(this)
  }

  submit(formResult) {
    const { saveItem } = this.props
    saveItem(formResult, () => {
      hashHistory.push('list')
    })
  }

  render() {
    const { handleSubmit, submitting } = this.props
    return (
      <div className="addItem" >
        <form
          className="animated fadeIn"
          onSubmit={handleSubmit((formResult) => this.submit(formResult))}
        >
          <Field name="name" type="text" component={renderField} label="Name" />
          <Field name="age" type="number" component={renderField} label="Age" />
          <div className="btns">
            <button type="submit" disabled={submitting}>Submit</button>
          </div>
        </form>
        <Navigator />
      </div>
    )
  }
}

Form.propTypes = propTypes

export default Form
