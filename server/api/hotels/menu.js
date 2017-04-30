const Hotel = require('../../models/Hotel')

module.exports = {
  method: 'get',
  path: '/:uuid/menu',
  handler: function *() {
    const {uuid} = this.params
    const hotel = yield Hotel.findOne({uuid})

    this.body = {
      "messages": [
        {
          "attachment": {
            "type": "image",
            "payload": {
              "url": "http://4.bp.blogspot.com/-GF2bSF9poRc/Tz37JTb0ixI/AAAAAAAAABQ/l8PdDfqCZU4/s1600/3+copy.jpg"
            }
          }
        }
      ]
    }
  }
}
