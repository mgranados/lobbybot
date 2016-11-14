import { Schema } from 'mongoose'
import { extend } from 'lodash'
import statics from './statics'
import methods from './methods'
import hooks from './hooks'

const userSchema = new Schema({
  id: {
    type: String
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password: {
    type: String
  },
  name: {
    type: String
  }
})

hooks(userSchema)
extend(userSchema.statics, statics)
extend(userSchema.methods, methods)

export default userSchema
