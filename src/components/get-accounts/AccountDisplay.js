import React, {useEffect} from 'react';
import {useSelector, } from 'react-redux'
import GetAccountsAction from './GetAccountsAction'
import { useHistory } from 'react-router-dom';
import PopulateAction from '../update-account/PopulateAction';
import {useDispatch} from 'react-redux';

const AccountDisplay = () => {
  const dispatch = useDispatch();
  let history = useHistory();

  const getToken = useSelector(state => state.post.token)
  const accounts = useSelector(state => state.getAccounts)
 
  const handleClick = () => {
    dispatch(GetAccountsAction(getToken))
    
  }

  const handleUpdate = (account) => {
    history.push(`/update-accounts/${account.id}/edit`);
    dispatch(PopulateAction(account.id, getToken))
  }
  
  return (
      <div>
        lIST OF ACCOUNTS
        <button onClick = {handleClick}>Get accounts</button>
        <div>
        {accounts.map(account=>
          <div key = {account.id}> ID: {account.id}, {account.account_name} <button onClick = {() => handleUpdate(account)}>Update</button></div>
          )}
        </div> 
      </div>
  )
}

export default AccountDisplay;

// kehinde.yahaya@octosoft.ai
// password