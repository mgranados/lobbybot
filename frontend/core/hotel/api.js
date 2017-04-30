import http from '../http'

export default {
  createHotel: (data) => {
    return http.post('/hotels/register', data)
  },
  fetchHotel: (hotel) => {
    return http.get('/hotels/' + hotel.uuid)
  },

  updateHotel: (hotel) => {
    return http.put(`/hotels/${hotel.uuid}`, hotel)
  }
}
