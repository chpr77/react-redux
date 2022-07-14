/*//Level 1
import { applyMiddleware, legacy_createStore as createStore } from "redux";
//Level 2 middleware
//npm install redux-logger --save-dev
import logger from "redux-logger";

const reducer=function(state,action){
  if(action.type === 'INC'){
    return state+action.payload
  }
  if(action.type === 'DEC'){
    return state-action.payload
  }
  
  return state
}
const middleware=applyMiddleware(logger)

const store=createStore(reducer,1,middleware)
store.subscribe(() =>{
    console.log(`Store Changed ${store.getState()}`) //6,3,1
  })
store.dispatch({type:'INC',payload:5}) //dispatch action
store.dispatch({type:'DEC',payload:3})
store.dispatch({type:'INC',payload:8})
store.dispatch({type:'MULTIPLY',payload:10})
/*import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
*/

/*
//Level 3 , Combine reducers, dev tools
import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import logger from "redux-logger";
//npm install redux-devtools-extension --save-dev
import {composeWithDevTools} from 'redux-devtools-extension'

const userReducer=(state={},action)=>{
  switch(action.type){
  case 'CHANGE_NAME':{
      return state={...state,name:action.payload}  // {user:{name:"Prabhakar"}}
    }
  case 'CHANGE_AGE':{
    return state={...state,age:action.payload}//{user:{name:"Prabhakar",age:35}}
  }
  default:return state
  }
}
const tweetsReducer=(state=[],action)=>{
  return state
}

//combine reducers
const allReducers=combineReducers({
   user:userReducer,
   tweets:tweetsReducer
})
//Store will become big json object like store={user={},tweets={}}
const store=createStore(allReducers, composeWithDevTools(applyMiddleware(logger)))
store.dispatch({type:'CHANGE_NAME',payload:'Prabhakar'}) //sync dispatch
store.dispatch({type:'CHANGE_AGE',payload:35})//sync dispatch
store.dispatch({type:'CHANGE_NAME',payload:'ChPR'})//sync dispatch
*/
//Level 4 , axios : API calls, Sync and Async dispatch of actions
import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import logger from "redux-logger";
import {composeWithDevTools} from 'redux-devtools-extension'
//npm install axios: For API calls 
import axios from "axios";
//npm install redux-thunk : For asyn dispatch of multiple actions
import thunk from 'redux-thunk'

const intialState={
  fetching:false,
  fetched:false,
  users:[],
  error:null
}

const reducer= (state=intialState,action) =>{
  switch (action.type){
    case 'FETCH_USERS_START':{
      return {...state,fetching:true}
    }
    case 'RECEIVED_USERS':{
      return {...state,fetching:false,fetched:true,users:action.payload}
    }
    case 'FETCH_USERS_ERROR':{
      return {...state,fetching:false,error:action.payload}
    }
    default: return state
  }

}

const store=createStore(reducer,composeWithDevTools(applyMiddleware(thunk,logger)))
store.dispatch((dispatch)=>{
  //call back function is thunk here.
  dispatch({type:'FETCH_USERS_START'})
  axios.get("https://jsonplaceholder.typicode.com/users")
  .then(response=>{
    dispatch({type:'RECEIVED_USERS',payload:response.data})
  })
  .catch((error)=>{
    dispatch({type:'FETCH_USERS_ERROR',payload:error})
  })
})
