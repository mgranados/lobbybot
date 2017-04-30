import { hotelActions } from './actions'

export function hotelReducer (state = {}, { payload, type }) {
  switch (type) {
    case hotelActions.HOTEL_CREATION_SUCCESS:
      return {
        ...state,
        hotel: payload.hotel
      }

    default:
      return state
  }
}
