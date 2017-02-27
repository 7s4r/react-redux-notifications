import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import Notifications, { addNotification } from '../../../src'

class App extends Component {
  static propTypes = {
    addNotification: PropTypes.func.isRequired,
  }

  constructor() {
    super()
  }

  componentDidMount() {
    const { addNotification } = this.props

    addNotification({
      title: 'Thank you!',
      message: 'Account created with success',
      level: 'success',
    })
  }

  render() {
    return (
      <Notifications />
    )
  }
}

export default connect(null, { addNotification })(App)
