import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import storageSession from 'redux-persist/lib/storage/session'
import reduces from './Redux/index'
import { useDispatch, useSelector } from 'react-redux'

const persistConfig = {
  key: 'root',
  storage: storage,
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const persistedReducer = persistReducer(persistConfig, reduces)

export default () => {
  let store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))
  let persistor = persistStore(store)
  return { store, persistor }
}
