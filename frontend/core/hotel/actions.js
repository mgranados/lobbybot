export const hotelActions = {
  HOTEL_CREATION_REQUEST: 'HOTEL_CREATION_REQUEST',
  HOTEL_CREATION_SUCCESS: 'HOTEL_CREATION_SUCCESS',

  createHotel: ({ name, checkIn, checkOut, wifiNetwork, wifiPassword, lat, lng, roomsAvailable }) => ({
    type: hotelActions.HOTEL_CREATION_REQUEST,
    payload: {
      name, checkIn, checkOut, wifiNetwork, wifiPassword, lat, lng, roomsAvailable
    }
  })
}
