import React, { Component } from 'react'
import { branch } from 'baobab-react/higher-order'

class App extends Component {
  render () {
    return (
      <div style={{ height: '100%', flexDirection: 'column', display: 'flex' }}>
        {this.props.children}
      </div>
    )
  }
}

const cursors = {
  isAuthenticated: ['isAuthenticated']
}

export default branch(cursors, App)
