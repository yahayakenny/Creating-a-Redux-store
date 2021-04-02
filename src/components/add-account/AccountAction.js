import axios from 'axios';
import store from '../Store'


const AccountAction = (values) => {
    //To get the token from the redux store
    console.log(store.getState())
    const getToken = store.getState().post.token

    axios({
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
    }).then(res => console.log(res))
    .catch(err => console.log(err.response))

    store.dispatch({
        type: 'POST_ACCOUNT',
        data: values, 
    })

}
export default AccountAction;