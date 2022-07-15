import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
//npm install react-redux for provider to connect with store
import {Provider} from 'react-redux' // to connect with store
//import {store} from './store/configStore' // store
//import {store} from './bank/store/configStore.dev'
//import BankApp from './bank/components/BankApp';

import { legacy_createStore as createStore, applyMiddleware } from 'redux';
//npm install redux-saga
import createSagaMiddleware from 'redux-saga'
import {watchAgeUp} from './sagas-app/sagas/saga'
import reducer from './sagas-app/store/reducer'
import SagaApp from './sagas-app/SagaApp'
const sagaMiddleware=createSagaMiddleware()
const store=createStore(reducer,applyMiddleware(sagaMiddleware))
sagaMiddleware.run(watchAgeUp)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>    
      <React.StrictMode>
        <SagaApp />
      </React.StrictMode>    
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


