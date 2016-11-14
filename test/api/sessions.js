import { expect } from 'chai'
import { clearDatabase, createUser } from '../utils'
import app from '../../src/server/app'
import request from 'supertest'

describe('/sessions', () => {
  const agent = request.agent(app.listen())
  const password = '1234'

  beforeEach(async () => {
    await clearDatabase()
  })

  describe('post', () => {
    it('should return a error', async (done) => {
      const user = await createUser({ password })

      agent
        .post('/sessions')
        .send({ password: '4321', email: user.email })
        .set('Accept', 'application/json')
        .expect(401)
        .end((err, res) => {
          if (err) return done(err)
          done()
        })
    })

    it('should create a session', async (done) => {
      const user = await createUser({ password })

      agent
        .post('/sessions')
        .send({ password, email: user.email })
        .set('Accept', 'application/json')
        .expect(200)
        .end((err, res) => {
          if (err) return done(err)
          expect(res.body.user.email).equal(user.email)
          done()
        })
    })
  })
})
