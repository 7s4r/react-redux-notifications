import React from 'react'
import { addNotification } from '../store/actions'
import DemoForm from '../components/DemoForm'

const onClick = (options, dispatch) => {
  dispatch(addNotification({
    title: 'test',
    message: 'test',
    level: 'success',
  }))
}

const DemoFormContainer = props => (
  <DemoForm onClick={onClick} />
)

export default DemoFormContainer
