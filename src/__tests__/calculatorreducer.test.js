import calculatorReducer from '../reducers/calculatorReducer'
import {ADD_INPUTS,SUBTRACT_INPUTS} from '../actions/types'

describe('Test calculatorReducer', ()=>{
    it('Reducer for ADD',()=>{
        let state={output:0}
        state=calculatorReducer(0,{type:ADD_INPUTS,payload:30})
        expect(state).toEqual({output:30})
    })

    it('Reducer for SUBTRACT',()=>{
        let state={output:0}
        state=calculatorReducer(0,{type:SUBTRACT_INPUTS,payload:50})
        expect(state).toEqual({output:50})
    })
})