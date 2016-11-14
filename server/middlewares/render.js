import sendfile from 'koa-sendfile'
import path from 'path'
import config from '../../config'

const file = path.resolve(config.webpack.outputPath, 'index.html')

export default async (ctx) => {
  await sendfile(ctx, file)
}
