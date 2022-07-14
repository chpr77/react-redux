import logo from './logo.svg';
import './App.css';
import Calculator from './containers/Calculator';
import Clock from './containers/Clock';

function App() {
  return (
    <div className="App">
     <center>
      <h1>Prabhakar's Calculator</h1>
      <Calculator></Calculator>
      <br/><br/>
      <Clock/>
     </center>
    </div>
  );
}

export default App;
