import { push } from 'react-router-redux'
import { call, fork, put, takeLatest } from 'redux-saga/effects'
import { startSubmit, stopSubmit } from 'redux-form'
import { sessionActions } from './actions'
import api from './api'

export function * login ({ payload }) {
  const formId = 'login'
  yield put(startSubmit(formId))

  try {
    const { email, password } = payload
    const data = yield call(api.login, { email, password })

    yield put({ type: sessionActions.LOGIN_SUCCESS, payload: { ...data } })
    yield put(stopSubmit(formId))

    yield put(push('/app'))
  } catch (err) {
    yield put(stopSubmit(formId, { _error: err.message }))
  }
}

export function * logout() {
  yield call(api.logout)
  yield put({ type: sessionActions.LOGOUT_SUCCESS, payload: {} })
  yield put(push('/'))
}

export function * watchLogin () {
  yield takeLatest(sessionActions.LOGIN_REQUEST, login)
}

export function * watchLogout() {
  yield takeLatest(sessionActions.LOGOUT_REQUEST, logout)
}

export const sessionSagas = [
  fork(watchLogin),
  fork(watchLogout)
]
