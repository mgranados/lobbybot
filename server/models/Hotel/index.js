const mongoose = require('mongoose')
const { Schema } = require('mongoose')
const { extend } = require('lodash')
const { v4 } = require('uuid')
const statics = require('./statics')
const methods = require('./methods')

const hotelSchema = new Schema({
  uuid: {type: String, default: v4},
  checkIn: { type: String },
  checkOut: { type: String },
  name: { type: String },
  wifiNetwork: {type: String},
  wifiPassword: {type: String},
  lat: {type: String},
  lng: {type: String},
  roomsAvailable: {type: String}
})

module.exports = mongoose.model('Hotel', hotelSchema)
