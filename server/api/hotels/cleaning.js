const Hotel = require('../../models/Hotel')
var moment = require('moment')

module.exports = {
  method: 'post',
  path: '/:uuid/cleaning',
  handler: function *() {
    const {uuid} = this.params
    const hotel = yield Hotel.findOne({uuid})
    const data = {
      checkIn: hotel.checkIn
    }
    const onemore = moment().add(1, 'hour').format('ddd, h:mmA')

    this.body = [
        {
          text: `Tu limpieza ha sido programada a las ${onemore}`
        }
    ]
  }
}
