import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addInputs,subtractInputs} from '../actions/calculatorActions'
class Calculator extends Component {
    input1=React.createRef()
    input2=React.createRef()//userRef() -->hook for functional comp or class  React.createRef()

  render() {
    let intA,intB
    return (
      <div>
            <h2>Using React And Redux</h2>
            <div>Input1:
                <input type='text' placeholder='0' ref={this.input1}/>
            </div>
            <div>Input2:
                <input type='text' placeholder='0' ref={this.input2}/>
            </div>
            <div>output:
                <input type='text' placeholder='0' readOnly value={this.props.outputProp}/>
            </div>
            <div>
                <button onClick={()=>{
                 intA=parseInt(this.input1.current.value)
                 intB=parseInt(this.input2.current.value)
                 this.props.dispatch(addInputs(intA,intB))
                }}>Add</button>
            </div>
            <div>
                <button onClick={()=>{
                 intA=parseInt(this.input1.current.value)
                 intB=parseInt(this.input2.current.value)
                 this.props.dispatch(subtractInputs(intA,intB))
                }}>Subtract</button>
            </div>
      </div>
    )
  }
}
//call back for getting store state (data)
// store state is available as props
const mapStateToProps=(state)=>({
    outputProp:state.output
})

export default connect(mapStateToProps)(Calculator)