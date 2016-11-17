const { map } = require('lodash')
const models = require('../../server/models')

module.exports = function clearDatabase () {
  const promises = map(models, model => model.remove({}))
  return Promise.all(promises)
}
