import middleware from 'koa-webpack'
import webpack from 'webpack'
import path from 'path'
import config from './dev.config'

export default function (app) {
  const compiler = webpack(config)

  app.use(middleware({
    compiler
  }))

  app.use(async (ctx) => {
    const filename = path.join(compiler.outputPath, 'index.html')
    const result = await new Promise((resolve, reject) => {
      compiler.outputFileSystem.readFile(filename, function (err, result) {
        if (err) {
          return reject(err)
        }

        resolve(result)
      })
    })

    ctx.body = result
    ctx.set('Content-Type', 'text/html')
  })
}
