import React from 'react';
import ReactDOM from 'react-dom';
import ReceiveInput from './components/ReceiveInput';
import {Provider} from 'react-redux';
import store from './components/Store'


ReactDOM.render(
  <Provider store = {store}>
    <ReceiveInput/>
  </Provider>,
  document.getElementById('root')
);


