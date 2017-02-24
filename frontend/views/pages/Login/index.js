import React, { Component } from 'react'
import { branch } from 'baobab-react/higher-order'
import classNames from 'classnames/bind'
import { create as createSession } from '../../../actions/Session'
import { Button } from '~components'
import styles from './style.css'

const cx = classNames.bind(styles)

class Login extends Component {
  constructor () {
    super()

    this.state = {
      email: '',
      password: '',
      submitting: false
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  async handleSubmit () {
    const { email, password } = this.state
    const { dispatch, location, router } = this.props

    this.setState({ submitting: true, errorText: '' })

    try {
      await dispatch(createSession, { email, password })
    } catch (err) {
      this.setState({ errorMessage: 'Invalid e-mail or password', submitting: false })
      return
    }

    const redirectUrl = location.state && location.state.nextPathname
      ? location.state.nextPathname
      : '/'
    router.replace(redirectUrl)
  }

  render () {
    const { errorMessage } = this.state

    return (
      <div className={styles.page}>
        <div className={cx('box', 'form')}>
          <h5 className='title is-5 has-text-centered'>Sign in with your e-mail</h5>

          <p className='control'>
            <input
              className='input'
              placeholder='E-mail'
              value={this.state.email}
              onChange={(event) => this.setState({ email: event.target.value })}
            />
          </p>

          <p className='control'>
            <input
              className='input'
              placeholder='Password'
              type='password'
              value={this.state.password}
              onChange={(event) => this.setState({ password: event.target.value })}
            />
          </p>

          {errorMessage &&
            <span className='help is-danger has-text-centered'>{errorMessage} email is invalid</span>
          }

          <div style={{ textAlign: 'right' }}>
            <Button primary onClick={this.handleSubmit}>Log in</Button>
          </div>
        </div>
      </div>
    )
  }
}

export default branch({}, Login)
