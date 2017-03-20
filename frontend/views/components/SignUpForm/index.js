import React from 'react'
import classNames from 'classnames/bind'
import { Field, reduxForm } from 'redux-form'
import styles from './style.css'

const cx = classNames.bind(styles)

class SignUpForm extends React.Component {
  render () {
    const { handleSubmit, error, submitting } = this.props

    return (
      <form className={cx('box', 'form')} onSubmit={handleSubmit}>
        <h5 className='title is-5 has-text-centered'>Sign up with your e-mail</h5>

        <p className='control'>
          <Field 
            name='screenName'
            className='input'
            component='input'
            placeholder='Nickname'
            required
          />
        </p>

        <p className='control'>
          <Field 
            name='displayName'
            className='input'
            placeholder='Name'
            component='input'
            required
          />
        </p>


        <p className='control'>
          <Field
            name='email'
            type='email'
            className='input'
            component='input'
            placeholder='E-mail'
            required
          />
        </p>

        <p className='control'>
          <Field
            name='password'
            type='password'
            className='input'
            component='input'
            placeholder='Password'
            required
          />
        </p>

        <p className='control'>
          <Field
            name='passwordConfirmation'
            type='password'
            className='input'
            component='input'
            placeholder='Password Confirmation'
            required
          />
        </p>

        {!error ? null : (
        <span className='help is-danger has-text-centered'>{error}</span>
        )}

        <div style={{ textAlign: 'right' }}>
          <button type='submit' className={cx('button is-primary', { 'is-loading': submitting })}>Sign up</button>
        </div>
      </form>
    )
  }
}

export default reduxForm({
  form: 'signUp'
})(SignUpForm)

