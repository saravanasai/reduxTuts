import { STORE_TRANSACION } from "./PurchaseType"


const initialSate={
    transaction:[]
}


const PurchaseReducer=(state = initialSate,action)=>
{
    switch(action.type)
    {
        case STORE_TRANSACION: return {
            ...state,transaction:state.transaction.concat(action.payload)}
        default: return state
    }
}


export default PurchaseReducer