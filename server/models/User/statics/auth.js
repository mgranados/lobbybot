import assert from 'http-assert'
import bcrypt from 'bcrypt'

export default async function auth (email, password) {
  const User = this

  const user = await User.findOne({ email })
  assert(user, 401)

  const isValid = await new Promise((resolve, reject) => {
    bcrypt.compare(password, user.password, (err, compared) =>
      (err ? reject(err) : resolve(compared))
    )
  })
  assert(isValid, 401)

  return user
}
