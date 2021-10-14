import { STORE_TRANSACION } from "./PurchaseType"



export const storetransaction = (value)=>{
  
    return {
        type:STORE_TRANSACION,
        payload:value
    }
     
}