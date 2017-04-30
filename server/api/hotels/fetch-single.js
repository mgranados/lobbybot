const Hotel = require('../../models/Hotel')

module.exports = {
  method: 'get',
  path: '/:uuid',
  handler: function *() {
    const { uuid } = this.params

    const hotel = yield Hotel.findOne({uuid})
    this.body = {
      hotel
    }
  }
}
