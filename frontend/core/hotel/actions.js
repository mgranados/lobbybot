
export const hotelActions = {
  HOTEL_CREATION_REQUEST: 'HOTEL_CREATION_REQUEST',
  HOTEL_CREATION_SUCCESS: 'HOTEL_CREATION_SUCCESS',

  createHotel: ({ name, checkIn, checkOut, menuImage, wifiPassword, googleMaps, roomsAvailable, weather, places }) => ({
    type: hotelActions.SIGNUP_REQUEST,
    payload: {
       name, checkIn, checkOut, menuImage, wifiPassword, googleMaps, roomsAvailable, weather, places
    }
  }),

  fetchHotel: () => ({
    type: hotelActions.GET_CURRENT_USER_REQUEST,
    payload: {}
  })
}
