import React from 'react';
import {useSelector} from 'react-redux'
import GetAccountsAction from './GetAccountsAction'
import { useHistory } from 'react-router-dom';
import PopulateAction from '../update-account/PopulateAction';

const AccountDisplay = () => {
  let history = useHistory();
  const accounts = useSelector(state => state.getAccounts)
 
  const handleClick = () => {
    GetAccountsAction()
  }

  const handleEdit = (account) => {
    history.push(`/update-accounts/${account.id}/edit`);
    PopulateAction(account.id)
    console.log(account.id)
  }
  
  return (
      <div>
        lIST OF ACCOUNTS
        <button onClick = {handleClick}>Get accounts</button>
        <div>
        {accounts.map(account=>
          <div>ID: {account.id}, {account.account_name} <button onClick = {() => handleEdit(account)}>Update</button></div>
          )}
        </div> 
      </div>
  )
}

export default AccountDisplay;

// kehinde.yahaya@octosoft.ai
// password