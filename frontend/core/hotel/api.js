import http from '../http'

export default {
  createHotel: (data) => {
    return http.post('/hotels/register', data)
  }
}
