const { webpack } = require('../../config')

module.exports = function * () {
  yield this.render('index', webpack)
}
