import React, {useState} from 'react';
import AccountAction from './AccountAction';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';

const account = {
    account_name: '',
    account_number: '',
}

const AccountForm = () => {
    const [values, setValues] = useState(account)
    const getToken = useSelector(state => state.auth.token)
    const dispatch = useDispatch()
   
    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values)
        dispatch(AccountAction(values, getToken))
    }

    return (
        <div>
            <form onSubmit = {handleSubmit}>
                <div>Add account</div>
             
                <label>Account Name
                    <input type = 'text' onChange = {handleChange} value = {values.account_name} name = 'account_name'/>
                </label>
                 
                <label>Account Number
                    <input type = 'number' onChange = {handleChange} value = {values.account_number} name = 'account_number'/>
                </label> 
                <button>Submit</button>
            </form>
        </div>
    )
}

export default AccountForm;