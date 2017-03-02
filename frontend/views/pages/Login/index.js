import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import classNames from 'classnames/bind'
import { sessionActions, getSession } from 'core/session'
import Button from 'views/components/Button'
import styles from './style.css'

const cx = classNames.bind(styles)

class Login extends Component {
  constructor () {
    super()

    this.state = {
      email: '',
      password: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit () {
    this.props.login(this.state)
  }

  render () {
    const { isLoading, errorText } = this.props

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

          {!errorText ? null : (
            <span className='help is-danger has-text-centered'>{errorText} email is invalid</span>
          )}

          <div style={{ textAlign: 'right' }}>
            <Button primary onClick={this.handleSubmit} loading={isLoading}>Log in</Button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = createSelector(
  getSession,
  session => ({
    isLoading: session.isSending,
    errorText: session.errorText
  })
)

const mapDispatchToProps = {
  login: sessionActions.login
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
