import { combineReducers } from 'redux'
import items from './items'
import users from './users'

const rootReducer = combineReducers({
  items,
  users
})

export default rootReducer
