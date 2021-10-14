
import './App.css';
import MainContainer from './components/ mainContainer';
import {Provider} from 'react-redux'
import store from './redux/store';

function App() {
  return (
    <Provider store={store} >
    <div className="App">
       <div className="conatiner-fluid">
         <MainContainer />
       </div>
    </div>
    </Provider>
  );
}

export default App;
