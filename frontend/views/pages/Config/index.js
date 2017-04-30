import React, { Component } from 'react'
import HotelForm from 'views/components/HotelForm'
import { hotelActions } from 'core/hotel'
import { connect } from 'react-redux'

class Config extends Component {
  render () {
    const {createHotel} = this.props
    debugger
    return (
      <div>
        Configuración de Hotel
        <br/>
        <HotelForm onSubmit={(values) => createHotel(values)} />
      </div>
    )
  }
}

const mapStateToProps = function (state) {
    return { currentUser: state.session.currentUser }
}

const mapDispatchToProps = {
  createHotel: hotelActions.createHotel
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Config)
