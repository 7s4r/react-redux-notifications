import React from 'react'
import { shallow } from 'enzyme'
import Notification from './'

it('renders the Notification component', () => {
  const handleDismiss = jest.fn()
  const wrapper = shallow(<Notification id="1" message="test" handleDismiss={handleDismiss} />)

  expect(wrapper).toMatchSnapshot()
})
