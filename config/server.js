
module.exports = {
  port: parseInt(process.env.PORT) || 3000,
  static: process.env.WEBPACK_PUBLIC_PATH
}
