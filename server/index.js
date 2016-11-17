require('../config')
require('./databases/mongo')

const { port } = require('../config/server')
const app = require('./app')

app.listen(port)
console.log(`App started on port ${port}`)
