const requireindex = require('es6-requireindex')
const debug = require('debug')
const convert = require('koa-convert')
const router = require('koa-joi-router')
const { forEach } = require('lodash')

const resouces = requireindex(__dirname, { recursive: false })

module.exports = function api (app) {
  forEach(resouces, ({ prefix, routes }) => {
    const pfix = `/api${prefix}`
    const rtr = router()
    rtr.prefix(pfix)

    forEach(routes, route => {
      rtr.route(route)
    })

    debug('api')(`Added new resource ${pfix}`)

    app.use(convert(rtr.middleware()))
  })
}
