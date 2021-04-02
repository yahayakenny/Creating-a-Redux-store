import {createStore} from 'redux';

// npm install redux-devtools-extension --save -dev
import {composeWithDevTools} from 'redux-devtools-extension';
import {myReducer} from './fluid/Reducer';
import {combineReducers} from 'redux';
import postReducer from './post-form/PostReducer';
import AccountReducer from './add-account/AccountReducer';
import GetAccountReducer from './get-accounts/GetAcountReducer';
import UpdateAccountReducer from './update-account/UpdateAccountReducer';

const composeEnhancers = composeWithDevTools({});
const rootReducer = combineReducers({
  // fluid: myReducer,
  post: postReducer,
  account: AccountReducer,
  getAccounts : GetAccountReducer,
  updateAccounts: UpdateAccountReducer,
})

const store = createStore(
    rootReducer,
    composeEnhancers(
    )
  );

export default store;
