const path = require('path')

module.exports = {
  publicPath: process.env.WEBPACK_PUBLIC_PATH,
  outputPath: path.resolve(process.cwd(), process.env.WEBPACK_DIR)
}
