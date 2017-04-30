import React, { Component } from 'react'
import HotelForm from 'views/components/HotelForm'
import { hotelActions } from 'core/hotel'
import { connect } from 'react-redux'

class UpdateHotel extends Component {

  componentDidMount(){
    const { uuid } = this.props.params
    const { fetchHotelDetails, currentHotel } = this.props

    if (!currentHotel) {
      fetchHotelDetails({hotelUUID: uuid})
    }
  }

  render () {
    const {UpdateHotel, hotel} = this.props
    const { currentHotel } = hotel
    let {initialValues} = this.props

    if(currentHotel){
      console.log("current hotel =>", this.props)
    }

    return (
      <div>
        Actualizar Hotel
        <br/>
        <HotelForm onSubmit={(values) => createHotel(values)} />
      </div>
    )
  }
}

const mapStateToProps = function (state) {
  return {hotel: state.hotel}
}

const mapDispatchToProps = {
  fetchHotelDetails: hotelActions.fetchHotelDetails,
  updateHotel: hotelActions.updateHotel
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UpdateHotel)
