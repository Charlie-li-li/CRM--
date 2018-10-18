import 'babel-polyfill'
import 'fastclick'
import 'isomorphic-fetch'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import '../styles/main.scss'
import App from './containers/App'
import configureStore from './store/configureStore'

const store = configureStore()

if (module.hot) {
  /**
  * Warning from React Router, caused by react-hot-loader.
  * The warning can be safely ignored, so filter it from the console.
  * Otherwise you'll see it every time something changes.
  * See https://github.com/gaearon/react-hot-loader/issues/298
  */
  // const orgError = console.error
  // console.error = (...args) => {
  //   if (args && args[0] && typeof args[0] === 'string' &&
  //     args[0].indexOf('You cannot PUSH the same path using hash history') > -1) {
  //     console.info('error')
  //   } else {
  //     orgError.apply(console, args)
  //   }
  // }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('main')
)
