import { BUY_ITEM } from "./itemtype"

export const buyItem=(value=1)=>{
    return {
        type:BUY_ITEM,
        payload:value
    }
}

