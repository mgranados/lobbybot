import React from 'react'
import classNames from 'classNames/bind'
import { Field, reduxForm } from 'redux-form'
import styles from './style.css'

const cx = classNames.bind(styles)

class HotelForm extends React.Component {
  render () {
    const { handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <div className={cx('hotelInfo')}>

          <p className='control'>
            <Field
              name='name'
              className='input'
              component='input'
              placeholder='Nombre del hotel'
            />
          </p>

          <p className='control'>
            <Field
              name='checkIn'
              className='input'
              component='input'
              placeholder='Hora de CheckIn'
            />
          </p>

          <p className='control'>
            <Field
              name='checkOut'
              className='input'
              component='input'
              placeholder='Hora de CheckOut'
            />
          </p>

          <p className='control'>
            <Field
              name='wifiNetwork'
              className='input'
              component='input'
              placeholder='Red de Wifi'
            />
          </p>

          <p className='control'>
            <Field
              name='wifiPassword'
              className='input'
              component='input'
              placeholder='Contraseña de WIFI'
            />
          </p>
          <p className='control'>
            <Field
              name='lat'
              className='input'
              component='input'
              placeholder='Latitud'
            />
          </p>
          <p className='control'>
            <Field
              name='lng'
              className='input'
              component='input'
              placeholder='Longitud'
            />
          </p>
          <p className='control'>
            <Field
              name='roomsAvailable'
              className='input'
              component='input'
              placeholder='Cuartos disponibles'
            />
          </p>
        </div>
        <button type='submit' className={cx('button is-primary')}>{this.props.submitLabel}</button>
      </form>
    )
  }
}

export default reduxForm({
  form: 'simple'
})(HotelForm)
