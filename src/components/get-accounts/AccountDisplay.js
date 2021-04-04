import React, {useEffect} from 'react';
import {useSelector, } from 'react-redux'
import GetAccountsAction from './GetAccountsAction'
import { useHistory } from 'react-router-dom';
import PopulateAction from '../update-account/PopulateAction';
import {useDispatch} from 'react-redux';
import DeleteAccountAction from '../delete-account/DeleteAccountAction';

const AccountDisplay = () => {
  const dispatch = useDispatch();
  let history = useHistory();

  const getToken = useSelector(state => state.auth.token)
  const accounts = useSelector(state => state.getAccounts)
 
  const handleClick = () => {
    dispatch(GetAccountsAction(getToken))
  }

  const handleUpdate = (account) => {
    history.push(`/update-accounts/${account.id}/edit`);
    dispatch(PopulateAction(account.id, getToken))
  
  }

  const handleDelete = (account) => {
    dispatch(DeleteAccountAction(account.id, getToken))
    history.push('/display-accounts');
  }
  
  return (
      <div>
        lIST OF ACCOUNTS
        <button onClick = {handleClick}>Get accounts</button>
        <div>
        {accounts.map(account=>
          <div key = {account.id}> ID: {account.id}, {account.account_name} <button onClick = {() => handleUpdate(account)}>Update</button>  <button onClick = {() => handleDelete(account)}>Delete</button></div>
          )}
        </div> 
      </div>
  )
}

export default AccountDisplay;

// kehinde.yahaya@octosoft.ai
// password