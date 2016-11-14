import Koa from 'koa'
import logger from 'koa-logger'
import mount from 'koa-mount'
import serve from 'koa-static'
import api from './api'
import { errorHandler, render } from './middlewares'
import config from '../config'

const { env, webpack } = config
const app = new Koa()

// Static files
app.use(mount(webpack.publicPath, serve(webpack.outputPath, { defer: false })))

// Logger
if (env !== 'test') {
  app.use(logger())
}

// Error handler
app.use(errorHandler)

// api
api(app)

// frontend
if (env === 'development') {
  require('../webpack/server').default(app)
} else {
  app.use(render)
}

export default app
