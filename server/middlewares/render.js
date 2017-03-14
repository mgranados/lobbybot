const { webpack } = require('../../config')
const User = require('../models/User')

module.exports = function * () {
  const { userId } = this.session

  if (userId) {
    const user = yield User.findOne({ id: userId })
    this.state.user = JSON.stringify(user.format())
  }

  yield this.render('index', webpack)
}
