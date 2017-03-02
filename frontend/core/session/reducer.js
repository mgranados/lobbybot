import { sessionActions } from './actions'
import ls from 'local-storage'

const token = ls.get('token')

export const initialState = {
  loggedIn: token && token.length || false,
  token,
  isSending: false,
  errorText: ''
}

export function sessionReducer (state = initialState, { payload, type }) {
  switch (type) {
    case sessionActions.LOGIN_REQUEST:
      return {
        ...state,
        errorText: '',
        isSending: true
      }

    case sessionActions.LOGIN_FAILED:
      return {
        ...state,
        errorText: payload.message,
        loggedIn: true,
        isSending: false
      }

    case sessionActions.LOGIN_SUCCESS:
      return {
        ...state,
        errorText: '',
        isSending: false
      }
    default:
      return state
  }
}
