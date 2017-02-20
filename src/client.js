import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, compose, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { reducer as notificationsReducer } from './'
import App from './components/App'

const createStoreWithMiddleware = compose(applyMiddleware(thunk))(createStore)
const store = createStoreWithMiddleware(combineReducers({
  notifications: notificationsReducer(),
}), {})

render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root')
)
