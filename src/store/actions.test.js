import * as actions from './actions'

test('addNotification', () => {
  expect(actions.addNotification({ id: 1, title: 'test', message: 'test' })).toEqual({
    type: actions.NOTIFICATION_ADD,
    id: 1,
    title: 'test',
    message: 'test',
  })
})

test('removeNotification', () => {
  expect(actions.removeNotification({ id: 1 })).toEqual({
    type: actions.NOTIFICATION_REMOVE,
    id: 1,
  })
})
