import {LPC_GET_REQUEST, LPC_GET_SUCCESS, LPC_GET_FAILURE} from '../redux/ActionType'

const initState = {
    responseLPC: {},
    isLoading: true  
}

const LPCreducer = (state = initState, {type, payload})=>{
    console.log("PAYLOAD: ", payload)
    switch(type){
        case LPC_GET_REQUEST: 
            return {
                ...state,
            }
        case LPC_GET_SUCCESS:
            return {
                ...state,
                responseLPC: payload,
                isLoading: false
            }
        case LPC_GET_FAILURE:
            return {
                ...state,
                isLoading: true
            }        
        default:
            return state;    
    }
}
export default LPCreducer