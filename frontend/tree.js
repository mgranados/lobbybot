import Baobab from 'baobab'
import ls from 'local-storage'

const options = {
  autoCommit: false
}

const initialState = {
  users: [],
  token: '',
  isAuthenticated: false
}

try {
  initialState.isAuthenticated = ls.get('isAuthenticated') === 'true'
  initialState.token = ls.get('token')
} catch (e) {
  console.log(e)
}

const tree = new Baobab(initialState, options)

export default tree
