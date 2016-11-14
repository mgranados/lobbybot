import bcrypt from 'bcrypt'

const SALT_WORK_FACTOR = process.env.SALT_WORK_FACTOR

export default function (schema) {
  schema.pre('save', function (next) {
    if (this.isNew) {
      this.id = this._id.toString()
    }

    next()
  })

  schema.pre('save', function (next) {
    if (!this.password || !this.isModified('password')) return next()

    try {
      const salt = bcrypt.genSaltSync(SALT_WORK_FACTOR)
      this.password = bcrypt.hashSync(this.password, salt)
    } catch (err) {
      return next(err)
    }

    return next()
  })
}
