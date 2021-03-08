import {LPC_GET_REQUEST,
    LPC_GET_SUCCESS,
    LPC_GET_FAILURE} from '../redux/ActionType'

import {put, takeLatest, takeEvery, call} from 'redux-saga/effects'    
import getLPC from './Api'
import {lpcGEtSuccess} from '../redux/ActionCreator'

import {fork} from 'redux-saga/effects'

function* fetchLPC(action){
    console.log("LPCSAGA: ", action)
    try{
        console.log("TRY")
        const receivedLPC = yield getLPC(action.payload)
        console.log("RECEIVED RESPONSE: ", receivedLPC)
        yield put(lpcGEtSuccess(receivedLPC))
    }catch(error){
        yield put({type: LPC_GET_FAILURE, error})
    }
}
console.log("LPCSAGA***")
 function* watchGetLPC(){
    yield takeEvery(LPC_GET_REQUEST, fetchLPC)
}

const lpcSagas = [fork(watchGetLPC)];

export default lpcSagas