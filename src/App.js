import logo from './logo.svg';
import './App.css';
import Calculator from './containers/Calculator';
import Clock from './containers/Clock';
import DataGrid from './griddemo/DataGrid';
import { Demo } from './rxjsdemos/Demo';
import RxApp from './rxjsdemos/RxApp';
import Consumer1 from './rxjsdemos/Consumer1';
import Consumer2 from './rxjsdemos/Consumer2';

function App() {
  return (
    <div className="App">
     <center>
      <RxApp/>
      <br/>
      <Consumer1></Consumer1>
      <br/>
      <Consumer2></Consumer2>
     </center>
    </div>
  );
}

export default App;
