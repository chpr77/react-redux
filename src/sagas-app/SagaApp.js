import React, { Component } from 'react'
import {connect} from 'react-redux'
class SagaApp extends Component {
  render() {
    return (
      <div>
        <center>
        <h2>Working with redux saga</h2>
        <h3>Your age : {this.props.age}</h3>
        <br/>
        <button onClick={this.props.onAgeUp}>Age Up</button>
        <button onClick={this.props.onAgeDown}>Age Down</button>
        </center>
      </div>
    )
  }
}

const mapStateToProps=(state)=>{
    return {age:state.age}
}
const mapDispatchToProps=(dispatch)=>{
    return {
        onAgeUp:()=>dispatch({type:'AGE_UP', value:1}),
        onAgeDown:()=>dispatch({type:'AGE_DOWN', value:1})
    }
}
export default connect(
    mapStateToProps,mapDispatchToProps
)(SagaApp)