import mongoose from 'mongoose'
import config from '../../config/database'

mongoose.Promise = Promise
mongoose.connect(config.mongo.url)

export default mongoose.connection
