import { Joi } from 'koa-joi-router'
import { User } from '../../models'
import { auth } from '../../lib'

export default {
  method: 'post',
  path: '/',
  validate: {
    body: {
      email: Joi.string().email().required(),
      password: Joi.string().required()
    },
    type: 'json'
  },
  handler: function *() {
    const { email, password } = this.request.body
    const user = yield User.auth(email, password)
    this.body = {
      user: user.format(),
      token: auth.token.sign(user)
    }
  }
}
