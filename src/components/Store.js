import {createStore} from 'redux';

// npm install redux-devtools-extension --save -dev
import {composeWithDevTools} from 'redux-devtools-extension';
// import {myReducer} from './fluid/Reducer';
import {combineReducers, applyMiddleware} from 'redux';
import postReducer from './post-form/PostReducer';
import AccountReducer from './add-account/AccountReducer';
import GetAccountReducer from './get-accounts/GetAcountReducer';
import UpdateAccountReducer from './update-account/UpdateAccountReducer';
import PopulateAccountReducer from './update-account/PopulateReducer';

//install redux thunk with npm i redux-thunk, then also import applymiddleware from redux
import ReduxThunk from 'redux-thunk';

const composeEnhancers = composeWithDevTools({});
const rootReducer = combineReducers({
  // fluid: myReducer,
  post: postReducer,
  account: AccountReducer,
  getAccounts : GetAccountReducer,
  updateAccounts: UpdateAccountReducer,
  populateAccounts: PopulateAccountReducer,
});

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(ReduxThunk)
    )
  );

export default store;
