import store from '../Store';
import axios from 'axios';

const UpdateAccountAction = (values, id) => {
    const getToken = store.getState().post.token
    console.log(id)
    console.log(values)

    axios({
        method: 'PUT',
        url: `http://localhost:1337/accounts/${id}`,
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

