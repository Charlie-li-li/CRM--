import { applyMiddleware, compose, createStore } from 'redux'
import rootReducer from '../reducers/index'
import thunk from 'redux-thunk'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

export default () => {
  const enhancers = []
  const devToolsExtension = window.devToolsExtension
  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }

  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(
        thunk
      ),
      ...enhancers
    )
  )

  return store
}
