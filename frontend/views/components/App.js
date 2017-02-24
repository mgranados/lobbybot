import React, { Component } from 'react'
import { branch } from 'baobab-react/higher-order'
import Header from './header'

class App extends Component {
  render () {
    if (!this.props.isAuthenticated) {
      return this.props.children
    }

    return (
      <div style={{ height: '100%', flexDirection: 'column', display: 'flex' }}>
        <Header />
        <div className='container'>
          {this.props.children}
        </div>
      </div>
    )
  }
}

const cursors = {
  isAuthenticated: ['isAuthenticated']
}

export default branch(cursors, App)
