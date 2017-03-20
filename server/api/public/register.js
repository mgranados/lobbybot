const Joi = require('koa-joi-router').Joi

module.exports = {
  method: 'post',
  path: '/register',
  validate: {
    body: {
      screenName: Joi.string().required(),
      displayName: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required()
    },
    type: 'json'
  },
  handler: function *() {
    const { screenName, displayName, email, password } = this.request.body

    const user = yield User.register(screenName, displayName, email, password)

    this.body = {
      user: user.format()
    }

  }
}
