const { webpack } = require('../../config')
const User = require('../models/User')
const _ = require('lodash')
const ObjectId = require('mongoose').Types.ObjectId

module.exports = function * () {
  // Don't render on api calls
  if (this.path.indexOf('/api') === 0) {return}

  const { userId } = this.session

  if (userId) {
    const user = yield User.findOne({ _id: ObjectId(userId) })
    this.state.user = JSON.stringify(user.format())
  }

  if (this.flash) {
    this.state.flash = JSON.stringify(this.flash)
  }

  yield this.render('index', webpack)
}
