import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import { reducer as form } from 'redux-form'
import { sessionReducer } from './session'
import { hotelReducer } from './hotel'

export default combineReducers({
  routing,
  form,
  session: sessionReducer,
  hotel: hotelReducer
})
