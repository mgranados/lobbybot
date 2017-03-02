
export const sessionActions = {
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILED: 'LOGIN_FAILED',

  login: ({ email, password }) => ({
    type: sessionActions.LOGIN_REQUEST,
    payload: {
      email, password
    }
  })
}

