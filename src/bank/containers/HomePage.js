import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/bankActions';
import PropTypes from 'prop-types';


class HomePage extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      amount: this.props.accountProp.balance
    };
    
  }

  handleChange(e){
    this.setState({amount:parseInt(e.target.value)});
  }

  deposit(){
    this.props.actionsProp.deposit(this.state.amount);
  }

  withdraw(){
    this.props.actionsProp.withdraw(this.state.amount);
  }
  render(){
    const {account} = this.props.accountProp;
    return (
      <div>

        <h2 >
            <div className="bg-warning">Powered by Redux.</div>      
        </h2>     

        <h1 className="bg-dark text-warning">Current Balance<br/><span
        className={account.balance >= 0 ? "green" : "red"}>
               ${account.balance}</span>
        </h1>


          <div className="bg-info">

            <h1>Make a Deposit</h1>
            Amount ($) :<input type="number" onChange={(e)=>this.handleChange(e)} /><br/><br/>
            <button className="green" onClick={(e)=>this.deposit(e)}
               >Deposit</button>
          </div>
          <div className="bg-warning">

            <h1>Make a Withdrawal</h1>
            Amount ($): <input type="number" onChange={(e)=>this.handleChange(e)} /><br/><br/>
            <button className="red" onClick={(e)=>this.withdraw(e)} 
            >Withdraw</button>
          </div>
      </div>
    );
  }
}
HomePage.propTypes = {
    accountProp: PropTypes.object.isRequired,
    actionsProp: PropTypes.object
   
  };
  
  //state management
  function mapStateToProps(state) {
    return {
      accountProp: state
    };
  }
  
  //actions management
  function mapDispatchToProps(dispatch) {
    return {
      actionsProp: bindActionCreators(actions, dispatch)
    };
  }
  //this.props.actionProp.Deposit(1000)
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(HomePage);
  

