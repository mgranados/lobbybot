const Joi = require('koa-joi-router').Joi
const Hotel = require('../../models/Hotel')

module.exports = {
  method: 'post',
  path: '/register',
  validate: {
    type: 'json'
  },
  handler: function *() {
    const { name, checkIn, checkOut, wifiNetwork, wifiPassword, lat, lng, roomsAvailable } = this.request.body

    const hotel = yield Hotel.create({name, checkIn, checkOut, wifiNetwork, wifiPassword, lat, lng, roomsAvailable})

    this.body = {
      hotel: hotel
    }
  }
}
