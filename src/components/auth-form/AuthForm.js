import React, {useState}from 'react';
import AuthAction from './AuthAction';

export const AuthForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmail = (e) => {
        setEmail(e.target.value)
     }
 
     const handlePassword = (e) => {
        setPassword(e.target.value)
     }
 
     const handleSubmit = (e) => {
        e.preventDefault()
        console.log(email, password)
        
        // In order to retrieve the data gotten from this component or any other component, you pass it to the action creator
        AuthAction(email, password)
     }

    return (
        <form onSubmit = {handleSubmit}>
            <div>Authenticate form to API</div>
            <label>Email:
                <input type = 'email' onChange = {handleEmail} value = {email}/>
            </label>
           
            <label>Password:
                <input type = 'password' onChange = {handlePassword} value = {password}/>
            </label> 
            <button>Submit</button>
        </form>
    )
}

export default AuthForm;