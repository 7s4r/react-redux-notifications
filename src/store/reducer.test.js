import { initialState } from './selectors'
import * as actions from './actions'
import reducer from './reducer'

it('returns the initial state', () => {
  expect(reducer(undefined, {})).toEqual(initialState)
})

it('handles NOTIFICATION_ADD', () => {
  const action = { type: actions.NOTIFICATION_ADD, id: 1, title: 'test', message: 'test' }
  expect(reducer(initialState, action)).toEqual({ ...initialState, id: 1, title: 'test', message: 'test' })
})

it('handles NOTIFICATION_REMOVE', () => {
  const action = { type: actions.NOTIFICATION_REMVOE, id: 1 }
  expect(reducer(initialState, action)).toEqual({ ...initialState })
})
