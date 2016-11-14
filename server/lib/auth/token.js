import jwt from 'jsonwebtoken'
import { pick } from 'lodash'

const { JWT_KEY, JWT_EXPIRATION } = process.env
const options = {
  expiresIn: JWT_EXPIRATION
}

export function sign (user) {
  const json = pick(user, '_id')
  const token = jwt.sign(json, JWT_KEY, options)
  return token
}

export function verify (token) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, JWT_KEY, (err, decoded) => {
      return err ? reject(err) : resolve(decoded)
    })
  })
}
