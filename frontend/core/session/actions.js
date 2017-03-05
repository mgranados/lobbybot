
export const sessionActions = {
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',

  login: ({ email, password }) => ({
    type: sessionActions.LOGIN_REQUEST,
    payload: {
      email, password
    }
  })
}

