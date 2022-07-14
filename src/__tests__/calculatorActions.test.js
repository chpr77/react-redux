import { ADD_INPUTS,SUBTRACT_INPUTS } from "../actions/types";
import {addInputs,subtractInputs} from '../actions/calculatorActions'

describe('Test Calculator actions',()=>{
    it('ActionCreator for addInputs',()=>{
        const add=addInputs(10,20)
        expect(add).toEqual({
            type:ADD_INPUTS,
            payload:30
        })
    })
    it('ActionCreator for subtractInputs',()=>{
        const subtracted=subtractInputs(50,30)
        expect(subtracted).toEqual({
            type:SUBTRACT_INPUTS,
            payload:20
        })
    })
})
