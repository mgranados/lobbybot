import React from 'react'
import classNames from 'classNames/bind'
import { Field, reduxForm } from 'redux-form'
import styles from './style.css'

const cx = classNames.bind(styles)

class HotelForm extends React.Component {
  render () {
    const { handleSubmit } = this.props
    debugger
    return (
      <form onSubmit={handleSubmit}>
        <div className={cx('hotelInfo')}>
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
              name='menuImage'
              className='input'
              component='input'
              placeholder='Imagen del menu'
            />
          </p>
          <p className='control'>
            <Field
              name='wifiPassword'
              className='input'
              component='input'
              placeholder='password del wifi'
            />
          </p>
          <p className='control'>
            <Field
              name='googleMaps'
              className='input'
              component='input'
              placeholder='locacion de GMaps'
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
          <p className='control'>
            <Field
              name='weather'
              className='input'
              component='input'
              placeholder='Clima'
            />
          </p>
          <p className='control'>
            <Field
              name='places'
              className='input'
              component='input'
              placeholder='Lugares recomendados'
            />
          </p>
        </div>

        <button type='submit' className={cx('button is-primary')}>Crear hotel</button>
      </form>
    )
  }
}

export default reduxForm({
  form: 'simple'
})(HotelForm)
