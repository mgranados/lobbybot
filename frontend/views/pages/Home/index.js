import React, { Component } from 'react'

import styles from './style.css'

export default class Home extends Component {
  render () {
    return (
      <div className={styles.welcome}>
        <h1>Bienvenido a Lobbybot</h1>
      </div>
    )
  }
}
