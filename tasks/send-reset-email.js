// node tasks/load add-user --email archr@app.com --password foobar
const parseArgs = require('minimist')
const co = require('co')

const { User } = require('models')

const argv = parseArgs(process.argv.slice(2))

module.exports = co.wrap(function *(){
  if (!argv.email) {throw new Error('email and password are required')}

  const user = yield User.findOne({email: argv.email,})

  if(!user){}
  yield user.sendResetPasswordEmail()

  console.log('Email send to', user.email)
})