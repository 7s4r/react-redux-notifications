import React, { PropTypes } from 'react'

import Notifications from '../containers/Notifications'
import Button from '../containers/Button'

const App = props => (
  <div>
    <Notifications />
    {props.children}
  </div>
)

App.propTypes = {
  children: PropTypes.any,
}

export default App
