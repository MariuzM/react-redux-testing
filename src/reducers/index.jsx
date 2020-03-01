import { combineReducers } from 'redux'
import counterReduser from './counter'
import loggedReducer from './isLogged'

const all = combineReducers({
  count: counterReduser,
  log: loggedReducer,
})

export default all
