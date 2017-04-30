const Hotel = require('../../models/Hotel')
var moment = require('moment')

module.exports = {
  method: 'get',
  path: '/:uuid/wifi',
  handler: function *() {
    const {uuid} = this.params
    const hotel = yield Hotel.findOne({uuid})
    const data = {
      wifiNetwork: hotel.wifiNetwork,
      wifiPassword: hotel.wifiPassword
    }

    this.body = [
        {
          text: `La red es: ${data.wifiNetwork} y el password es: ${data.wifiPassword}`
        }
    ]
  }
}
