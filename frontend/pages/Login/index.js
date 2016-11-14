import React, { Component } from 'react'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import CircularProgress from 'material-ui/CircularProgress'
import { branch } from 'baobab-react/higher-order'
import { create as createSession } from '../../actions/Session'
import style from './style.css'

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
      this.setState({ errorText: 'Invalid e-mail or password', submitting: false })
      return
    }

    const redirectUrl = location.state && location.state.nextPathname
      ? location.state.nextPathname
      : '/'
    router.replace(redirectUrl)
  }

  render () {
    const { submitting, errorText } = this.state

    return (
      <div className={style.Page}>
        <div className={style.Content}>
          <Paper style={{ width: 450, maxWidth: '100vw' }}>
            <div style={{ maxWidth: 400, padding: 20, margin: 'auto' }}>
              <p style={{ color: 'rgba(0,0,0,.54)', textAlign: 'center' }}>Sign in with your e-mail</p>
              <TextField
                hintText='E-mail'
                fullWidth
                value={this.state.email}
                errorText={errorText}
                onChange={(event) => this.setState({ email: event.target.value })}
              />
              <TextField
                hintText='Password'
                type='password'
                fullWidth
                value={this.state.password}
                onChange={(event) => this.setState({ password: event.target.value })}
              />
              <div style={{ marginTop: 10, marginBottom: 10, textAlign: 'center' }}>
                <RaisedButton label='Log in' secondary onClick={this.handleSubmit} />
              </div>
              <div style={{ textAlign: 'center' }}>
                {submitting &&
                  <CircularProgress />
                }
              </div>
            </div>
          </Paper>
        </div>
      </div>
    )
  }
}

export default branch({}, Login)
