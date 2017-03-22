import React, { PropTypes } from 'react'

const Html = ({ styles, assets, state, content }) => (
  <html {...attrs}>
  <head>
    <title>React-redux-notifications</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <body>
    <main id="app" dangerouslySetInnerHTML={{ __html: content }} />
    <script dangerouslySetInnerHTML={{ __html: state }} />
  </body>
  </html>
)

Html.propTypes = {
  state: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
}

export default Html
