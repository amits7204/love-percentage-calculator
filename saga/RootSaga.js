import {all, fork} from 'redux-saga/effects'
import lpcSagas from './LPCsaga'

export default function* rootSaga(){
    console.log("***ROOTSAGA***")
    yield all(lpcSagas)
}