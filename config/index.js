const path = require('path')
const dotenv = require('dotenv')
const requireindex = require('es6-requireindex')

try {
  dotenv.load({
    path: path.resolve('.env'),
    silent: true
  })
} catch (e) {} // eslint-disable-line no-empty

dotenv.load({
  path: path.resolve('.env.default')
})

module.exports = requireindex(__dirname)
