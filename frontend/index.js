import 'babel-polyfill'
import React from 'react'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { AppContainer } from 'react-hot-loader'
import { render } from 'react-dom'
import { browserHistory } from 'react-router'
import Root from './components/Root'
import './style/main.css'

injectTapEventPlugin()

const rootEl = document.getElementById('app')

render(
  <AppContainer>
    <Root history={browserHistory} />
  </AppContainer>, rootEl
)

if (module.hot) {
  module.hot.accept('./components/Root', () => {
    const NextRoot = require('./components/Root').default
    render(
      <AppContainer>
        <NextRoot history={browserHistory} />
      </AppContainer>,
      rootEl
    )
  })
}
