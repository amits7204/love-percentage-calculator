import {combineReducers} from 'redux'
import LPCreducer from './LPCreducer'

const allReducer = combineReducers({reducer: LPCreducer});

export default allReducer