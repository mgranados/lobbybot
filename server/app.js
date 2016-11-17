const Koa = require('koa')
const logger = require('koa-logger')
const mount = require('koa-mount')
const serve = require('koa-static')
const convert = require('koa-convert')
const api = require('./api')
const nunjucks = require('nunjucks')
const views = require('yet-another-nunjucks-koa-render')
const { render, errorHandler } = require('./middlewares')
const config = require('../config')

const { webpack, server, env } = config
const app = new Koa()

// View templates
app.use(views(nunjucks.configure(`${__dirname}/views`, { noCache: true }), { ext: '.html' }))

// Static files
app.use(mount(server.static, serve(webpack.outputPath, { defer: false })))

// Logger
if (env !== 'test') {
  app.use(logger())
}

// Error handler
app.use(convert(errorHandler))

// api
api(app)

// frontend
app.use(convert(render))

module.exports = app
