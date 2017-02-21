import React, { Component, PropTypes } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: absolute;
  top: 80px;
  right: 5px;
  width: 200px;
  height: 80px;
  background: #fff;
  z-index: 9999;
  border-left: 2px solid green;
`

const Heading = styled.h3`
  font-weight: 500;
  font-size: 0.75rem;
  margin: 0;
  color: #000;
`

const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.3;
  margin: 1rem 0 0;
`

class Notification extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    level: PropTypes.oneOf([
      'success',
      'info',
      'warning',
      'danger',
    ]),
    title: PropTypes.string,
    message: PropTypes.string.isRequired,
    handleDismiss: PropTypes.func.isRequired,
    duration: PropTypes.number,
  }

  static defaultProps = {
    level: 'info',
    position: 'top',
    duration: 5000,
  }

  componentDidMount() {
    const { handleDismiss, id, duration } = this.props

    setTimeout(() => { handleDismiss(id) }, duration)
  }

  render() {
    const { id, title, message, level } = this.props

    return (
      <Wrapper id={id} className={`notification--${level}`}>
        {title && <Heading>{title}</Heading>}
        <Paragraph>{message}</Paragraph>
      </Wrapper>
    )
  }
}

export default Notification
