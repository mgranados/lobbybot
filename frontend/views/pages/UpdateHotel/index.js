import React, { Component } from 'react'
import HotelForm from 'views/components/HotelForm'
import { hotelActions } from 'core/hotel'
import { connect } from 'react-redux'

class UpdateHotel extends Component {

  componentDidMount(){
    const { uuid } = this.props.params
    const { fetchHotel, currentHotel } = this.props

    fetchHotel({uuid})
  }

  render () {
    const {updateHotel, hotel} = this.props
    const { currentHotel } = hotel
    let {initialValues} = this.props

    if(currentHotel){
      initialValues = {
        initialValues: {
          name: currentHotel.name,
          checkIn: currentHotel.checkIn,
          checkOut: currentHotel.checkOut,
          lat: currentHotel.lat,
          lng: currentHotel.lng,
          wifiNetwork: currentHotel.wifiNetwork,
          wifiPassword: currentHotel.wifiPassword,
          roomsAvailable: currentHotel.roomsAvailable
        }
      }
      console.log("current hotel =>", this.props.hotel)
    }

    return (
      <div>
        Actualizar Hotel
        <br/>
        <HotelForm {...initialValues} submitLabel="Actualizar Hotel" onSubmit={(values) => {
          values.uuid = currentHotel.uuid
          updateHotel(values)
        }} />
      </div>
    )
  }
}

const mapStateToProps = function (state) {
  return {hotel: state.hotel}
}

const mapDispatchToProps = {
  fetchHotel: hotelActions.fetchHotel,
  updateHotel: hotelActions.updateHotel
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UpdateHotel)
