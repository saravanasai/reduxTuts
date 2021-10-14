import { combineReducers } from "redux";
import ItemReducer from "./item/ItemReducer";
import PurchaseReducer from "./PurchaseReducer/PurchaseReducer";

 const rootReducer = combineReducers({
     ItemReducer:ItemReducer,
     PurchaseReducer:PurchaseReducer

 })


export default rootReducer



