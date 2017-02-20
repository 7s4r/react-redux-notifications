import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import TransitionGroup from 'react-addons-css-transition-group'

import { removeNotification } from '../store/actions'
import { Notification } from '../components/Notification'

class NotificationsContainer extends Component {
  static propTypes = {
    notifications: PropTypes.array.isRequired,
    transitionEnterTimeout: PropTypes.number,
    transitionLeaveTimeout: PropTypes.number,
    removeNotification: PropTypes.func.isRequired,
  }

  static defaultProps = {
    notifications: [],
    transitionEnterTimeout: 600,
    transitionLeaveTimeout: 600,
    smallScreenMin: '400',
  }

  constructor(props) {
    super(props)

    this.handleDismiss = this.handleDismiss.bind(this)

    this.state = {
      windowWidth: '100',
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateWindowWidth)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowWidth)
  }

  updateWindowWidth() {
    this.setState({ windowWidth: window.innerWidth })
  }

  handleDismiss(id) {
    const { removeNotification } = this.props

    removeNotification(id)
  }

  renderNotifications() {
    const { notifications } = this.props

    return notifications.map(notification => (
      <Notification
        key={notification.id}
        id={notification.id}
        title={notification.title}
        message={notification.message}
        level={notification.level}
        handleDismiss={this.handleDismiss}
      />
    ))
  }

  render() {
    const { transitionEnterTimeout, transitionLeaveTimeout } = this.props

    return (
      <TransitionGroup
        transitionName={'notification-transition'}
        transitionEnterTimeout={transitionEnterTimeout}
        transitionLeaveTimeout={transitionLeaveTimeout}
      >
        {this.renderNotifications()}
      </TransitionGroup>
    )
  }
}

const mapStateToProps = state => ({
  notifications: state.notifications,
})

export default connect(mapStateToProps, { removeNotification })(NotificationsContainer)
