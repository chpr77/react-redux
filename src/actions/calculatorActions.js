import { ADD_INPUTS, SUBTRACT_INPUTS } from "./types";

export const addInputs=(input1,input2)=>{
    //business logic
    // fetch/axios api call with thunk
    let output= input1+input2
    return{
        type:ADD_INPUTS,
        payload:output
    }
}

export const subtractInputs=(input1,input2)=>{
    //business logic
    // fetch/axios api call with thunk
    let output= input1-input2
    return{
        type:SUBTRACT_INPUTS,
        payload:output
    }
}