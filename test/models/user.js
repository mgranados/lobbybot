import { expect } from 'chai'
import { User } from '../../src/server/models'
import { clearDatabase } from '../utils'

describe('user', () => {
  beforeEach(async () => {
    await clearDatabase()
  })

  describe('auth', () => {
    const email = 'user@app.com'
    const password = '1234'

    it('should return a error 401', async () => {
      await User.create({ email, password })
      try {
        await User.auth(email, '4321')
      } catch (err) {
        expect(err.statusCode).equal(401)
      }
    })

    it('should auth an user with correct credentials', async () => {
      await User.create({ email, password })
      const user = await User.auth(email, password)

      expect(user.email).equal(email)
    })
  })
})
