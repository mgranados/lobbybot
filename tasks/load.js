require('babel-core/register')
require('babel-polyfill')

require('../config')
require('../server/databases/mongo')

const func = require(`./${process.argv[2]}`).default

try {
  func().then(() => {
    process.exit(1)
  })
} catch (err) {
  console.log(err.stack)
  process.exit(1)
}
