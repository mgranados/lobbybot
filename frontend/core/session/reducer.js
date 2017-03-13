import { sessionActions } from './actions'

export const initialState = {
  loggedIn: !!window.user
}

export function sessionReducer (state = initialState, { payload, type }) {
  switch (type) {
    case sessionActions.LOGIN_SUCCESS:
      return {
        ...state,
        loggedIn: true
      }

    case sessionActions.LOGOUT_SUCCESS:
      return {
        ...state,
        loggedIn: false
      }

    default:
      return state
  }
}
