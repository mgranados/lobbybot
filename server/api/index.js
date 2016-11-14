import requireindex from 'es6-requireindex'
import debug from 'debug'
import convert from 'koa-convert'
import router from 'koa-joi-router'
import { forEach } from 'lodash'

const resouces = requireindex(__dirname, { recursive: false })

export default function api (app) {
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
