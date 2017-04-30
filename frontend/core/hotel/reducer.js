import { hotelActions } from './actions'

export function hotelReducer (state = {}, { payload, type }) {
  switch (type) {
    case hotelActions.HOTEL_CREATION_SUCCESS:
      return {
        ...state,
        hotel: payload.hotel
      }

    case hotelActions.HOTEL_FETCH_SUCCESS:
      return {
        ...state,
        currentHotel: payload.hotel
      }
    case hotelActions.HOTEL_UPDATE_SUCCESS:
      return {
        ...state,
        currentHotel: payload.hotel
      }

    default:
      return state
  }
}
