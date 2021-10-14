import { connect } from "react-redux";

const TransactionComponent = (props) => {
    return ( 
        
        <div className="row">
            <div className="col col-md-6">
            <table class="table mt-5">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">order_id</th>
            <th scope="col">purchased</th>
          </tr>
        </thead>
        <tbody>
            {props.history.map((his,index)=>{
                return(
                    <tr>
                        <th scope="row">{++index}</th>
                        <td>ORID{++index}{his}</td>
                        <td>{his}</td>
                    </tr>
                )
            })}
        </tbody>
      </table>
            </div>
        </div>
     );
}
 
const mapSateToprops =(state)=>{
    return {
        history:state.PurchaseReducer.transaction
    }
}

export default connect(mapSateToprops,{})(TransactionComponent) ;