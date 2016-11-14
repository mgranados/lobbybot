process.env.NODE_ENV = 'test'

require('babel-core/register')
require('babel-polyfill')

require('../config')
require('../src/server/databases')
