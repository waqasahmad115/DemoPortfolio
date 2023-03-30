import { combineReducers } from 'redux'
import { reducer } from './reducer'

const reducers = combineReducers({
  reduxTheme: reducer,
})

export default reducers
