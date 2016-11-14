import ls from 'local-storage'
import api from '../../api'

export default async function create (tree, body) {
  const { user, token } = await api.post('/sessions', body)

  ls.set('token', token)
  ls.set('isAuthenticated', 'true')

  tree.push('users', user)
  tree.set('token', token)
  tree.set('isAuthenticated', true)
  tree.commit()
}
