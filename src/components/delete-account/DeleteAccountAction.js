import axios from 'axios';

const DeleteAccountAction = (id, getToken) => {
    return async (dispatch) => {
        const response = await axios({
            method: 'DELETE',
            url: `http://localhost:1337/accounts/${id}`,
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${getToken}`
            }
        })

        const resData = await response.data

        dispatch({ 
            type: 'DELETE_ACCOUNT',
            data: resData
        }) 

        
    }
  
     
}

export default DeleteAccountAction;