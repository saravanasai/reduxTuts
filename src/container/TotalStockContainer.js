
import {connect} from 'react-redux';

function TotalStockContainer(props) {
  return (
    <div>
      <table class="table mt-5">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Remianing stock</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>R15 V3</td>
            <td>{props.items}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

const mapSateToProps=(state)=>{
  return{
    items:state.ItemReducer.noOfBike
  }
}



export default connect(mapSateToProps,{}) (TotalStockContainer);
