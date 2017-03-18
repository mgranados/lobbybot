require('babel-core/register')
require('babel-polyfill')

require('../config')
require('../server/databases/mongo')

const func = require(`./${process.argv[2]}`)

try {
  func().then(data => {
    console.log('Success =>', process.argv[2], data)
    process.exit()
  }).catch(err=>{
    console.error('=>',err)
    process.exit(1)
  })
} catch (err) {
  console.error(err.stack)
  process.exit(1)
}
