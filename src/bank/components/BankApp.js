import Deposits from '../containers/Deposits';
import HomePage from '../containers/HomePage'
import Withdraw from '../containers/withDraw';
import './BankApp.css'

function BankApp() {
  return (
    <div>
      
      <h1 className="bg-danger text-warning">
        Prabhakar's Corporate Bank</h1>
      <HomePage />      
      <Deposits/>
      <Withdraw/>
      
    </div>
  );
}

export default BankApp
