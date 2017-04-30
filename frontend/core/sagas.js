import { sessionSagas } from './session'
import { hotelSagas } from './hotel'

export default function* sagas () {
  yield [
    ...sessionSagas,
    ...hotelSagas
  ]
}
