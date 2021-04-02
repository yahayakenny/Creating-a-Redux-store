import axios from 'axios'
import store from '../Store';

const GetAccountsAction = () => {
    const getToken = store.getState().post.token
    console.log(getToken)
    axios({
        method: 'GET',
        url: 'http://localhost:1337/accounts',
        headers: {
            'Authorization': `Bearer ${getToken}`
        }
    }
    ).then((res) => {
        store.dispatch({ 
            type: 'GET_ACCOUNTS',
            data: res.data
        })   
     } )
    .catch((err) => console.log(err.response))
}

export default GetAccountsAction;

// kehinde.yahaya@octosoft.ai
// password