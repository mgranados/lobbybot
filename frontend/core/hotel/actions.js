export const hotelActions = {
  HOTEL_CREATION_REQUEST: 'HOTEL_CREATION_REQUEST',
  HOTEL_CREATION_SUCCESS: 'HOTEL_CREATION_SUCCESS',
  HOTEL_UPDATE_REQUEST: 'HOTEL_UPDATE_REQUEST',
  HOTEL_UPDATE_SUCCESS: 'HOTEL_UPDATE_SUCCESS',
  HOTEL_FETCH_REQUEST: 'HOTEL_FETCH_REQUEST',
  HOTEL_FETCH_SUCCESS: 'HOTEL_FETCH_SUCCESS',


  createHotel: ({ name, checkIn, checkOut, wifiNetwork, wifiPassword, lat, lng, roomsAvailable }) => ({
    type: hotelActions.HOTEL_CREATION_REQUEST,
    payload: {
      name, checkIn, checkOut, wifiNetwork, wifiPassword, lat, lng, roomsAvailable
    }
  }),

  fetchHotel: ({uuid}) => ({
    type: hotelActions.HOTEL_FETCH_REQUEST,
    payload: {
      uuid
    }
  }),

  updateHotel: ({uuid, name, checkIn, checkOut, wifiNetwork, wifiPassword, lat, lng, roomsAvailable}) => ({
    type: hotelActions.HOTEL_UPDATE_REQUEST,
    payload: {
      uuid, name, checkIn, checkOut, wifiNetwork, wifiPassword, lat, lng, roomsAvailable
    }
  }),



}
