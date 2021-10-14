import TotalStockContainer from "../container/TotalStockContainer";
import PurchaseComponent from "./PurchaseComponent";
import TransactionComponent from "./transactionComponent";

const MainContainer = () => {
    return ( 
        <div className="container-fluid">
            <div className="container mt-5">
                <div className="row">
                    <div className="col md-6 text-center">Total Stocks
                    <TotalStockContainer />
                    </div>
                    <div className="col md-6 text-center">Purchase
                    <PurchaseComponent />
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col col-md-6 text-center"> Transaction history
                    <TransactionComponent />
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default MainContainer;