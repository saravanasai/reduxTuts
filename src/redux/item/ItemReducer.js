import { BUY_ITEM } from "./itemtype"


const initialState= {
    noOfBike:10
}


 const ItemReducer = (state= initialState,action) =>
{
    switch(action.type)
    {
        case BUY_ITEM : return {
            ...state,noOfBike:state.noOfBike-action.payload
        }
        default: return state
        
    }
}


export default ItemReducer;