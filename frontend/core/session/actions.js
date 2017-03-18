
export const sessionActions = {
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',

  LOGOUT_REQUEST: 'LOGOUT_REQUEST',
  LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',

  RESET_PASSWORD_REQUEST: 'RESET_PASSWORD_REQUEST',
  RESET_PASSWORD_SUCCESS: 'RESET_PASSWORD_SUCCESS',

  REQUEST_PASSWORD_REQUEST: 'REQUEST_PASSWORD_REQUEST',
  REQUEST_PASSWORD_SUCCESS: 'REQUEST_PASSWORD_SUCCESS',

  login: ({ email, password }) => ({
    type: sessionActions.LOGIN_REQUEST,
    payload: {
      email, password
    }
  }),

  logout: () => ({
    type: sessionActions.LOGOUT_REQUEST,
    payload: {}
  }),

  resetPassword: ({ password, confirmPassword, token, email }) => ({
    type: sessionActions.RESET_PASSWORD_REQUEST,
    payload: {
      password, confirmPassword, token, email
    }
  }),

  requestPassword: ({ email }) => ({
    type: sessionActions.REQUEST_PASSWORD_REQUEST,
    payload: {
      email
    }
  })
}

