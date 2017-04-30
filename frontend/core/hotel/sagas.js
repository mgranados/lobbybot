import { push } from 'react-router-redux'
import { call, fork, put, takeLatest } from 'redux-saga/effects'
import { startSubmit, stopSubmit } from 'redux-form'
import { hotelActions } from './actions'
import api from './api'

export function * createHotel ({ payload }) {
  const formId = 'createHotel'
  yield put(startSubmit(formId))

  try {
    const data = yield call(api.createHotel, payload)

    yield put({ type: hotelActions.HOTEL_CREATION_SUCCESS, payload: data })
    yield put(stopSubmit(formId))

    yield put(push('/app'))
  } catch (err) {
    yield put(stopSubmit(formId, { _error: err.message }))
  }
}

export function * watchCreateHotel () {
  yield takeLatest(hotelActions.HOTEL_CREATION_REQUEST, createHotel)
}

export const hotelSagas = [
  fork(watchCreateHotel)
]
