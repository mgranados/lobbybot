import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import { sessionReducer } from './session'

export default combineReducers({
  routing,
  session: sessionReducer
})
