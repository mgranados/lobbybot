import http from '../http'

export default {
  login: data => {
    return http.post('/sessions', data)
  },

  logout: () => {
    return http.del('/sessions')
  }
}

