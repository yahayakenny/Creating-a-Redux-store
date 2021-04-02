import store from '../Store';
import axios from 'axios';

const PopulateAction = (id) => {
    const getToken = store.getState().post.token

    axios({
        method: 'GET',
        url: `http://localhost:1337/accounts/${id}`,
        headers: {
            'content-type': 'application/json',
            'Authorization': `Bearer ${getToken}`
        }
    })
    .then((res) => {
        console.log(res)
        store.dispatch({ 
            type: 'POPULATE_ACCOUNTS',
            data: res.data
        })     
     } )
    .catch((err) => console.log(err.response))

   
     
}

export default PopulateAction;