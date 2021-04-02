import React, {useState} from 'react';
import AccountAction from './AccountAction';

const account = {
    account_name: '',
    account_number: '',
}

const AccountForm = () => {
    const [values, setValues] = useState(account)
   
    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values)
        AccountAction(values)
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

            {/* <div>
                <AccountDisplay/>
            </div> */}
        </div>
    )
}

export default AccountForm;