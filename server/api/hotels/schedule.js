const Hotel = require('../../models/Hotel')

module.exports = {
  method: 'get',
  path: '/:uuid/schedule',
  handler: function *() {
    const {uuid} = this.params
    const hotel = yield Hotel.findOne({uuid})
    const data = {
      checkIn: hotel.checkIn,
      checkOut: hotel.checkOut
    }

    this.body = {
      schedule: data
    }
  }
}
