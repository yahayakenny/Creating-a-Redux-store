import {createStore, combineReducers} from 'redux';

// npm install redux-devtools-extension --save -dev
import {composeWithDevTools} from 'redux-devtools-extension';
import {myReducer} from './Reducer'

const composeEnhancers = composeWithDevTools({});

const store = createStore(
    myReducer,
    composeEnhancers(
    )
  );
export default store;
