import { User } from '../../src/server/models'
import { userFixture } from '../fixtures'

export default async function createUser (opts = {}) {
  return await User.create({ ...userFixture, ...opts })
}
