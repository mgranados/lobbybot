import React from 'react'

export default class Header extends React.Component {
  render () {
    return (
      <nav className='nav has-shadow'>
        <div className='container'>
          <div className='nav-left'>
            <a className='nav-item is-tab is-hidden-mobile is-active'>Home</a>
            <a className='nav-item is-tab is-hidden-mobile'>Users</a>
          </div>
        </div>
      </nav>
    )
  }
}
