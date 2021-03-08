import {createStore, applyMiddleware} from 'redux'

import createSagaMiddleware from 'redux-saga'
import reducer from '../reducer/index'
import RootSaga from '../saga/RootSaga'

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(RootSaga)
// console.log("Store: ", store.getState())

export default store