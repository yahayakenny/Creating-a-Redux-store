import store from '../Store';
import axios from 'axios';



const UpdateAccountAction = (values) => {
    const getToken = store.getState().post.token

    axios({
        method: 'PUT',
        url: 'http://localhost:1337/accounts/5',
        data: values,
        headers: {
            'content-type': 'application/json',
            'Authorization': `Bearer ${getToken}`
        }
    })
    .then((res) => {
        console.log(res)    
     } )
    .catch((err) => console.log(err.response))

    store.dispatch({ 
        type: 'UPDATE_ACCOUNTS',
        data: values
    }) 
     
}

export default UpdateAccountAction;

