import { createStore, compose, combineReducers, applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'

import { reducer as notificationsReducer } from '../store/reducer'

const configureStore = (initialState, history) => {
  const finalCreateStore = compose(applyMiddleware(thunk, routerMiddleware(history)))(createStore)
  const store = finalCreateStore(combineReducers({
    notifications: notificationsReducer(),
  }), {})(initialState)

  return store
}

export default configureStore
