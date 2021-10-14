import { useState } from "react";
import { connect } from "react-redux";
import {buyItem} from "../redux/item/itemAction"
import {storetransaction} from '../redux/PurchaseReducer/PurchaseAction'

const PurchaseComponent = (props) => {

    const [value,setvalue]=useState('')

        

    const handlePurchase=(value)=>{
        props.purchase(value);
        props.transaction(value);
        setvalue('');
    }
    return ( 
    <div className="container mt-3">
        <form>
            <div className="row">
                <div className="col md-6">
                <div class="form-group">
                <label for="exampleInputEmail1" className="float-left">Quantity</label>
                <input type="number" value={value} onChange={(e)=>setvalue(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Quantity" />
                </div>
                </div>
            </div>
            <button type="button" onClick={()=>handlePurchase(value)}  class="btn btn-primary">Purchase</button>
       </form>
    </div>
     );
}



const mapSateToprops=state=>{
    return {
        state
    }
}

const mapDispatchToProps=(dispatch)=>
{
    return{
        purchase:(value)=>dispatch(buyItem(value)),
        transaction:(value)=>dispatch(storetransaction(value))
    }
}
export default connect(mapSateToprops,mapDispatchToProps) (PurchaseComponent);