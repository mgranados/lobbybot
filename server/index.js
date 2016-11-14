require('babel-core/register')
require('babel-polyfill')

require('../config')
require('./databases/mongo')

const port = require('../config/server').port
const app = require('./app').default

app.listen(port)
console.log(`App started on port ${port}`)
