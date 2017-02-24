import 'babel-polyfill'
import React from 'react'
import { AppContainer } from 'react-hot-loader'
import ReactDOM from 'react-dom'
import { browserHistory } from 'react-router'
import './views/styles/styles.scss'
import Root from './views/components/Root'

const rootElement = document.getElementById('app')

function render (Root) {
  ReactDOM.render(
    <AppContainer>
      <Root
        history={browserHistory}
      />
    </AppContainer>,
    rootElement
  )
}

if (module.hot) {
  module.hot.accept('./views/components/Root', () => {
    render(require('./views/components/Root').default)
  })
}

render(Root)
