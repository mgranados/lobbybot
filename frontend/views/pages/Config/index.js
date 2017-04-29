import React, { Component } from 'react'
import HotelForm from 'views/components/HotelForm'


export default class Config extends Component {
  render () {
    return (
      <div>
        Configuración de Hotel
        <br/>
        <HotelForm></HotelForm>
      </div>
    )
  }
}
