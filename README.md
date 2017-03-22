# react-redux-notifications
A simple react redux isomorphic notifications system

## Installation

```
npm install react-redux-notifications --save
```
or
```
yarn add react-redux-notifications
```

## Usage

Import the reducer and pass it to your store:

``` js
import { createStore, compose, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { reducer as notificationsReducer } from 'react-redux-notifications'

const createStoreWithMiddleware = compose(
  applyMiddleware(thunk)
)(createStore)
const store = createStoreWithMiddleware(combineReducers({
    notifications: notificationsReducer(),
    // your reducers here
  }), {})
```

Render this component at the root of your web application:

``` js
import React, { Component } from 'react'
import Notifications from 'react-redux-notifications'

class App extends Component {
  render() { 
    return (
      <div>
        <Notifications />
      </div>
    )
  }
}
```

Dispatch notification actions from any other component:

``` js
import React, { Component } from 'react'
import { addNotification } from 'react-redux-notifications'

const onSubmit = props => dispatch => {
  fetch('/users')
    .then(() => {
      dispatch(addNotification({
        title: 'Thank you!',
        message: 'Account created with success',
        level: 'success',
      }))
    })
}
```
