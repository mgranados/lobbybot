
export const sessionActions = {
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGOUT_REQUEST: 'LOGOUT_REQUEST',
  LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',

  login: ({ email, password }) => ({
    type: sessionActions.LOGIN_REQUEST,
    payload: {
      email, password
    }
  }),

  logout: () => ({
    type: sessionActions.LOGOUT_REQUEST,
    payload: {}
  })
}

