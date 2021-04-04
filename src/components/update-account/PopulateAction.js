import axios from 'axios';

const PopulateAction = (id, getToken) => {
    return async(dispatch) => {
        const response = await axios({
            method: 'GET',
            url: `http://localhost:1337/accounts/${id}`,
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${getToken}`
            }
        })

        const resData = await response.data;
        console.log('resData:', resData)

        dispatch({ 
            type: 'POPULATE_ACCOUNTS',
            data: resData
        })  
    }
    
}

export default PopulateAction;