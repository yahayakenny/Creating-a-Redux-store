import axios from 'axios'

const GetAccountsAction = (getToken) => {
  //async function is possible here because of redux thunk which i have installed  
    return async(dispatch) => {
        const response = await axios({
            method: 'GET',
            url: 'http://localhost:1337/accounts',
            headers: {
                'Authorization': `Bearer ${getToken}`
            }
        })
        let resData= await response.data

        dispatch({ 
            type: 'GET_ACCOUNTS',
            data: resData
        })   
       
    }
}

export default GetAccountsAction;