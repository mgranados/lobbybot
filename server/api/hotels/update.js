const Hotel = require('../../models/Hotel')

module.exports = {
  method: 'put',
  path: '/:uuid',
  validate: {
    type: 'json'
  },
  handler: function *() {
    const { uuid } = this.params
    const { name, checkIn, checkOut, wifiNetwork, wifiPassword, lat, lng, roomsAvailable } = this.request.body
    console.log(this.request.body)
    const hotel = yield Hotel.findOne({uuid})
    this.assert(hotel, 404, 'hotel not found')
    hotel.name = name
    hotel.checkIn = checkIn
    hotel.checkOut = checkOut
    hotel.wifiNetwork = wifiNetwork
    hotel.wifiPassword = wifiPassword
    hotel.lat = lat
    hotel.lng = lng
    hotel.roomsAvailable = roomsAvailable
    yield hotel.save()

    this.body = {
      hotel
    }
  }
}
