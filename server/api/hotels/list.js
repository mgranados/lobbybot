const Hotel = require('../../models/Hotel')

module.exports = {
  method: 'get',
  path: '/',
  handler: function *() {
    const hotels = yield Hotel.find()
    const total = yield Hotel.count()

    this.body = {
      hotels: hotels,
      total
    }
  }
}
