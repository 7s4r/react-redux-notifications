import Notifications from './containers/Notifications'
import reducer from './store/reducer'
import { NOTIFICATION_ADD, NOTIFICATION_REMOVE, addNotification, removeNotification } from './store/actions'

export {
  NOTIFICATION_ADD,
  NOTIFICATION_REMOVE,
  reducer,
  addNotification,
  removeNotification,
}

export default Notifications
