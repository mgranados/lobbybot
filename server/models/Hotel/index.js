const mongoose = require('mongoose')
const { Schema } = require('mongoose')
const { extend } = require('lodash')
const { v4 } = require('uuid')
const statics = require('./statics')
const methods = require('./methods')

const hotelSchema = new Schema({
  uuid: {type: String, default: v4},
  checkIn: { type: String },
  name: { type: String },
  checkOut: { type: String },
  menuImage: { type: String },
  wifiPassword: {type: String},
  googleMaps: {type: String},
  roomsAvailable: {type: String},
  weather: {type: String},
  places: {type: String}

})

module.exports = mongoose.model('Hotel', hotelSchema)
