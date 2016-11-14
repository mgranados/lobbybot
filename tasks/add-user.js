// node tasks/load add-user --email archr@app.com --password foobar
import parseArgs from 'minimist'
import { User } from '../server/models'

const argv = parseArgs(process.argv.slice(2))

export default async () => {
  if (!argv.password || !argv.email) {
    throw new Error('email and password are required')
  }

  const user = new User({
    email: argv.email,
    password: argv.password
  })

  await user.save()

  console.log('User created:', user.email)
}
