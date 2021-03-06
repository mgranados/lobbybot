// node tasks/send-reset-email --email archr@app.com
require('../config')
require('server/databases/mongo')

const { User } = require('server/models')
const Task = require('server/lib/task')

const task = new Task(function * (argv) {
  if (!argv.email) { throw new Error('email and password are required') }

  const user = yield User.findOne({email: argv.email})

  if (!user) { throw new Error('User not found') }
  yield user.sendResetPasswordEmail()

  console.log('Email send to', user.email)
})

if (require.main === module) {
  task.setCliHandlers()
  task.run()
} else {
  module.exports = task
}
