import React from 'react'
import classNames from 'classNames/bind'
import { Field, reduxForm } from 'redux-form'
import ImageDropzone from '../ImageDropzone'
import styles from './style.css'

const cx = classNames.bind(styles)

class HotelConfig extends React.Component {
  render () {
    return (
      <form>
        <div className={cx('hotelInfo')}>
          <p className='control'>
            <Field
              name='hotelName'
              className='input'
              component='input'
              placeholder='Nombre del Hotel'
              required
            />
          </p>
          <p className='control'>
            <Field
              name='checkIn'
              className='input'
              component='input'
              placeholder='Hora de CheckIn'
              required
            />
          </p>

          <p className='control'>
            <Field
              name='CheckOut'
              className='input'
              component='input'
              placeholder='Hora de CheckOut'
              required
            />
          </p>
        </div>

        {/* <div className={cx('wifiInfo')}>
          <p className='control'>
            <Field
              name='wifiNetwork'
              className='input'
              component='input'
              placeholder='Red de WIFI'
              required
            />
          </p>

          <p className='control'>
            <Field
              name='wifiNetworkPassword'
              className='input'
              component='input'
              placeholder='Contraseña de WIFI'
              required
            />
          </p>
        </div> */}
        <button type='submit' className={cx('button is-primary')}>Crear hotel</button>
      </form>
    )
  }
}

export default reduxForm({
  form: 'simple'
})(HotelConfig)