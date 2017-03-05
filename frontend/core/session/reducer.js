import { sessionActions } from './actions'
import ls from 'local-storage'

const token = ls.get('token')

export const initialState = {
  loggedIn: token && token.length || false,
  token
}

export function sessionReducer (state = initialState, { payload, type }) {
  switch (type) {
    case sessionActions.LOGIN_SUCCESS:
      return {
        ...state,
        token: payload.token
      }

    default:
      return state
  }
}
