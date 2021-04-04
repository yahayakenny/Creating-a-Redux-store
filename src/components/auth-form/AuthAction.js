import axios from 'axios';
import store from '../Store'

//The Action creator mainly retrieves the data usually from an API or from a form, Next it dispatches the data and passes it to the reducer to save to the store

const AuthAction = (email, password) => {
    axios({
        method: 'POST',
        url: 'http://localhost:1337/auth/local',
        data: {
            identifier: email,
            password: password,
        },
        headers: {
            'content-type': 'application/json'
        }
    })
    .then((res) => {
        console.log(res)
        store.dispatch({ 
            type: 'VALIDATE_DETAILS',
            data: {
                email: email,
                password: password,
                token: res.data.jwt
            }
        })   
     } )
    .catch((err) => console.log(err.response))

 }
 
 export default AuthAction;