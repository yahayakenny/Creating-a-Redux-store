import axios from 'axios';

const AccountAction = (values, getToken) => {
    return async (dispatch) => {
       const response = await axios({
            method: 'POST',
            url: 'http://localhost:1337/accounts',
            data: {
                account_name: values.account_name,
                account_number: values.account_number,
            },
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${getToken}`
            }
        });
        let resData = await response.data
    
        dispatch({
            type: 'POST_ACCOUNT',
            data: resData, 
        })
    
    }
   
}
export default AccountAction;