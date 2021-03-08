import {LPC_GET_REQUEST,
    LPC_GET_SUCCESS,
    LPC_GET_FAILURE} from '../redux/ActionType'

export const lpcGEtRequest = (payload)=>{
    console.log("ACTION CREATOR: ", payload)
    return{
        type: LPC_GET_REQUEST,
        payload
    }
}
export const lpcGEtSuccess = (payload)=>{
    return{
        type: LPC_GET_SUCCESS,
        payload
    }
}
export const lpcGEtFailure = (payload)=>{
    return{
        type: LPC_GET_FAILURE,
        payload
    }    

}
   