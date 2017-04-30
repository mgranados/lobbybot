import React, { Component } from 'react'
import { hotelActions } from 'core/hotel'
import { connect } from 'react-redux'

class ListHotels extends Component {
  render () {
    const {createHotel} = this.props
    return (
      <div>
        Crear Hotel
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
)(ListHotels)
