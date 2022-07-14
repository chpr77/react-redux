import { legacy_createStore as createStore,applyMiddleware } from "redux";
import logger from "redux-logger";
import {composeWithDevTools} from 'redux-devtools-extension'
import calculatorReducer from "../reducers/calculatorReducer";
export const store=createStore(calculatorReducer,composeWithDevTools(applyMiddleware(logger)))

store.subscribe( () =>{
    console.log("Store Changed"+store.getState())
})