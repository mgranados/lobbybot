const Hotel = require('../../models/Hotel')

module.exports = {
  method: 'post',
  path: '/:uuid/towels',
  handler: function *() {
    const {uuid} = this.params
    const hotel = yield Hotel.findOne({uuid})

    this.body = [
        {
          text: `Tus toallas van en camino!`
        }
    ]
  }
}
