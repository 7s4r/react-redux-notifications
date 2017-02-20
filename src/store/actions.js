export const NOTIFICATION_ADD = 'NOTIFICATION_ADD'
export const NOTIFICATION_REMOVE = 'NOTIFICATION_REMOVE'

export const addNotification = options => ({
  type: NOTIFICATION_ADD,
  ...options,
  id: Date.now(),
})

export const removeNotification = id => ({
  type: NOTIFICATION_REMOVE,
  id,
})
