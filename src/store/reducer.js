import { initialState } from './selectors'
import { NOTIFICATION_ADD, NOTIFICATION_REMOVE } from './actions'

export default (state = initialState, action) => {
  switch (action.type) {
    case NOTIFICATION_ADD: {
      const { ...rest } = action

      return [
        ...state,
        { ...rest, id: action.id },
      ]
    }
    case NOTIFICATION_REMOVE: {
      return state.filter(item => item.id !== action.id)
    }
    default: {
      return state
    }
  }
}
