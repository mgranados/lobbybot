import React, { Component } from 'react'
import { branch } from 'baobab-react/higher-order'
import AppBar from 'material-ui/AppBar'
import SideNav from './SideNav'

const cursors = {
  isAuthenticated: ['isAuthenticated']
}

class App extends Component {
  render () {
    return (
      <div style={{ height: '100%', flexDirection: 'column', display: 'flex' }}>
        <AppBar title='Example' showMenuIconButton={false} />
        <div style={{ display: 'flex', flexGrow: 1 }}>
          <SideNav />

          <div style={{ background: 'white', width: '100%' }}>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

export default branch(cursors, App)
