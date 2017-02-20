import * as selectors from './selectors'

test('initialState', () => {
  expect(selectors.initialState).toEqual([])
})

test('getList', () => {
  expect(selectors.getList(selectors.initialState)).toEqual([])
})
