import ls from 'local-storage'
import { push } from 'react-router-redux'
import { call, fork, put, takeLatest } from 'redux-saga/effects'
import { sessionActions } from './actions'
import api from './api'

export function * login ({ payload }) {
  const { email, password } = payload

  try {
    const data = yield call(api.login, { email, password })
    yield put({ type: sessionActions.LOGIN_SUCCESS, ...data })
    ls.set('token', data.token)
    push('/')
  } catch (err) {
    yield put({ type: sessionActions.LOGIN_FAILED, payload: err })
  }
}

export function * watchLogin () {
  yield * takeLatest(sessionActions.LOGIN_REQUEST, login)
}

export const sessionSagas = [
  fork(watchLogin)
]
